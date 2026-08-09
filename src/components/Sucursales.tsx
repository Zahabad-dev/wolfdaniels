import ScrollReveal from "./ScrollReveal";

const SUCURSALES = [
  {
    nombre: "Sucursal San Martín",
    direccion: "Eje Central, San Martín Texmelucan, Puebla.",
  },
  {
    nombre: "Sucursal Texticuizeo",
    direccion: "Pasillo 8, Locales 76-77, Carretera Morelia, Michoacán.",
  },
  {
    nombre: "Sucursal Chiconcuac",
    direccion: "Calle Vicente Guerrero, Chiconcuac, Estado de México.",
  },
];

export default function Sucursales() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {SUCURSALES.map((s, i) => (
        <ScrollReveal
          key={s.nombre}
          delay={i * 100}
          className="rounded-2xl border border-white/10 bg-brand-gray2 p-6"
        >
          <h3 className="font-heading text-base text-brand-gold">{s.nombre}</h3>
          <p className="mt-2 text-sm text-brand-cream/70">{s.direccion}</p>
        </ScrollReveal>
      ))}
    </div>
  );
}
