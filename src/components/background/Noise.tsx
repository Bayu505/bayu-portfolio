export default function Noise() {
  return (
    <div
      className="
        pointer-events-none
        absolute
        inset-0
        opacity-[0.03]
        mix-blend-soft-light
      "
      style={{
        backgroundImage: `
          url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180' viewBox='0 0 180 180'%3E%3Cg fill='%23ffffff'%3E%3Ccircle cx='18' cy='24' r='1'/%3E%3Ccircle cx='64' cy='40' r='1'/%3E%3Ccircle cx='110' cy='18' r='1'/%3E%3Ccircle cx='152' cy='52' r='1'/%3E%3Ccircle cx='38' cy='94' r='1'/%3E%3Ccircle cx='92' cy='110' r='1'/%3E%3Ccircle cx='146' cy='90' r='1'/%3E%3Ccircle cx='48' cy='150' r='1'/%3E%3Ccircle cx='120' cy='154' r='1'/%3E%3Ccircle cx='164' cy='136' r='1'/%3E%3C/g%3E%3C/svg%3E")
        `,
      }}
    />
  );
}