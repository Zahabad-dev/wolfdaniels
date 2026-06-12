-- Ejecutar con el usuario admin de Postgres (Zahabad) en la BD WOLFDANIELS.
-- Crea la tabla de usuarios del CRM y da acceso de lectura a crm_readonly.

CREATE TABLE IF NOT EXISTS crm_usuarios (
  id SERIAL PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  nombre TEXT NOT NULL,
  activo BOOLEAN NOT NULL DEFAULT true,
  creado_en TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT SELECT ON crm_usuarios TO crm_readonly;

-- Usuario inicial del CRM (cambia el username si quieres otro).
-- La contraseña en texto plano correspondiente a este hash es la que te
-- pasó Claude en el chat (no se guarda en este archivo).
INSERT INTO crm_usuarios (username, password_hash, nombre)
VALUES (
  'wolfdaniels',
  '$2b$10$mw6UCblj5W7S1x.looOjFe18A23Qs2z4dSOwn4xntQwBHtgbCxQZ.',
  'Wolf Daniels'
)
ON CONFLICT (username) DO NOTHING;
