export const siteConfig = {
  name: "Restaurace u Fintů",
  tagline: "Klasická restaurace s kvalitním jídlem v Krajkové",
  description:
    "Restaurace u Fintů v Krajkové — poctivá česká kuchyně, denní menu a příjemné posezení. Přijďte ochutnat naše speciality.",
  url: "https://restauraceufintu.cz",
  locale: "cs-CZ",

  owner: {
    name: "[doplňte provozovatele]",
    ico: "12345678",
    dic: "12345678",
    registeredAddress: "Krajková 241, 35709 Krajková, CZ",
    phone: "+420 792 768 000",
    email: "info@restauraceufintu.cz",
  },

  openingHours: {
    monday: { open: "11:00", close: "22:00", label: "Pondělí" },
    tuesday: { open: "11:00", close: "22:00", label: "Úterý" },
    wednesday: { open: "11:00", close: "22:00", label: "Středa" },
    thursday: { open: "11:00", close: "22:00", label: "Čtvrtek" },
    friday: { open: "11:00", close: "23:00", label: "Pátek" },
    saturday: { open: "11:00", close: "23:00", label: "Sobota" },
    sunday: { open: "11:00", close: "21:00", label: "Neděle" },
  },

  googleMapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2558.0!2d12.538!3d50.169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zKrajkov%C3%A1!5e0!3m2!1scs!2scz!4v1234567890",

  address: {
    street: "Krajková 241",
    city: "Krajková",
    postalCode: "35709",
    country: "CZ",
  },
} as const;

export type OpeningHoursKey = keyof typeof siteConfig.openingHours;
