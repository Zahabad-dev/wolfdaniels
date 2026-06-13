"use server";

import { AuthError } from "next-auth";
import { signIn, signOut, auth } from "@/auth";
import { query } from "@/lib/db";

export async function loginAction(
  _prevState: string | undefined,
  formData: FormData
): Promise<string | undefined> {
  try {
    await signIn("credentials", {
      username: formData.get("username"),
      password: formData.get("password"),
      redirectTo: "/crm",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      return "Usuario o contraseña incorrectos.";
    }
    throw error;
  }
}

export async function logoutAction() {
  await signOut({ redirectTo: "/crm/login" });
}

export async function actualizarCatalogoAction(
  _prevState: { error?: string; success?: string } | undefined,
  formData: FormData
): Promise<{ error?: string; success?: string }> {
  const link = String(formData.get("link") || "").trim();

  if (!link) {
    return { error: "Pega el link del catálogo antes de guardar." };
  }

  try {
    new URL(link);
  } catch {
    return { error: "El link no es una URL válida (debe empezar con https://)." };
  }

  const session = await auth();
  const actualizadoPor = session?.user?.name ?? session?.user?.email ?? "CRM";

  await query(
    `UPDATE catalogo_mayoreo
     SET link = $1, actualizado_en = NOW(), actualizado_por = $2
     WHERE id = 1`,
    [link, actualizadoPor]
  );

  return { success: "Catálogo actualizado. El bot ya enviará este link." };
}
