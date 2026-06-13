-- Ejecutar con el usuario admin de Postgres (Zahabad) en la BD WOLFDANIELS.
-- Tabla de un solo registro (id = 1) con el link del catálogo vigente.
-- El bot de WhatsApp lo consulta para responder cuando preguntan por el catálogo.
-- El CRM permite actualizarlo cada semana desde /crm/catalogo.

CREATE TABLE IF NOT EXISTS catalogo_mayoreo (
  id INTEGER PRIMARY KEY DEFAULT 1,
  link TEXT NOT NULL DEFAULT '',
  actualizado_en TIMESTAMPTZ NOT NULL DEFAULT now(),
  actualizado_por TEXT,
  CONSTRAINT catalogo_mayoreo_una_fila CHECK (id = 1)
);

INSERT INTO catalogo_mayoreo (id, link) VALUES (1, '')
ON CONFLICT (id) DO NOTHING;

-- crm_readonly necesita poder leer y actualizar este único registro
-- (es información operativa, no datos sensibles del bot/clientes).
GRANT SELECT, UPDATE ON catalogo_mayoreo TO crm_readonly;
