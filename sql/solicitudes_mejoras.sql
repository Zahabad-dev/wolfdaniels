-- Ejecutar con el usuario admin de Postgres (Zahabad) en la BD WOLFDANIELS.
-- 1) Columnas nuevas para el seguimiento de intención de compra y recordatorios 24h.
-- 2) Permisos para que el CRM (crm_readonly) pueda editar prioridad y
--    activar/desactivar el bot por contacto (bot_bloqueado), sin dar acceso
--    de escritura al resto de columnas de la tabla.
-- 3) Permiso para borrar solicitudes desde el CRM (pruebas).

ALTER TABLE solicitudes_mayoreo
  ADD COLUMN IF NOT EXISTS intencion_compra BOOLEAN NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS recordatorio_enviado BOOLEAN NOT NULL DEFAULT false;

GRANT UPDATE (prioridad, bot_bloqueado) ON solicitudes_mayoreo TO crm_readonly;
GRANT DELETE ON solicitudes_mayoreo TO crm_readonly;
