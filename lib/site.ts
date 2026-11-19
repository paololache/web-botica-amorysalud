// Datos del negocio. Completar con la información real del cliente.
export const site = {
  name: "Botica Amor y Salud",
  tagline: "Peruanos trabajando para más Peruanos",
  phone: "01 555-0000",
  whatsapp: "51999999999", // formato internacional sin "+" para wa.me
  district: "Comas",
  address: "Av. [Dirección], Comas, Lima",
  hours: [
    { days: "Lunes a sábado", time: "7:00 a. m. – 11:00 p. m." },
    { days: "Domingos y feriados", time: "8:00 a. m. – 9:00 p. m." },
  ],
  deliveryZones: "Comas, Los Olivos, Independencia y SMP",
  freeShippingFrom: 50,
  shippingCost: 7,
  pharmacist: "Q.F. [Nombre] · CQFP [N°]",
  digemid: "Registro DIGEMID [N°]",
  // Centro del mapa (Comas, Lima)
  map: { lat: -11.9378, lon: -77.0563 },
};

export function waLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
