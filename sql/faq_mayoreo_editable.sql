-- Ejecutar con el usuario admin de Postgres (Zahabad) en la BD WOLFDANIELS.
-- Permite editar el FAQ desde /crm/faq (pregunta, respuesta, activo).
-- El bot lee estas mismas filas (faqTexto) para responder, incluyendo precios.

GRANT UPDATE (pregunta, respuesta, activo) ON faq_mayoreo TO crm_readonly;
