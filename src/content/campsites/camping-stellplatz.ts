import type { CampsiteConfig } from "../types";

/**
 * Krenn Camping-Stellplatz — Wohnmobil-/Camperstellplatz an der B25 mitten in Göstling an der Ybbs
 * (Mostviertel, Niederösterreich). Inhalte zu 100 % aus raw/digest abgeleitet.
 * BILDERARM: Der Platz stellt nur eine eigene Drohnenaufnahme in zwei Ausschnitten + ein Logo bereit
 * (der Rest der Library ist Lageplan/Logo-Karten/360°-Video-Thumbnail mit Text — bewusst nicht verwendet).
 * Darum tragen die beiden echten Platzfotos die zwei großen Vollbild-Momente (Hero + Atempause);
 * Pillars/Camping-Bento/Galerie blenden sich ehrlich aus, die Ausstattung lebt in USPs, Trust & Booking.
 */
const IMG = "/campsites/camping-stellplatz";

const krenn: CampsiteConfig = {
  name: "Krenn Camping-Stellplatz",
  shortName: "Krenn",
  slug: "camping-stellplatz",
  ort: "Göstling an der Ybbs",
  region: "Mostviertel",
  brandKind: "Camping-Stellplatz",
  regionLong: "Mostviertel · Niederösterreich · Österreich",

  heroVariant: "center",

  claim: "Mit dem Wohnmobil mitten in Göstling ankommen",
  claimEmphasis: "mitten in Göstling",
  emailDetail: "eure zentrale Lage nur 500 m vom Ybbstaler Solebad",
  intro:
    "Ebener Wohnmobil-Stellplatz direkt an der B25 in Göstling: Platz für rund 20 Fahrzeuge, ganzjährig geöffnet — und von hier sind es nur 500 Meter ins Ortszentrum, zum Solebad und an den Ybbstalradweg.",

  logo: { src: `${IMG}/logo-58061c8fb0.webp`, alt: "Krenn Camping-Stellplatz Logo" },

  statement: {
    text: "Vom Stellplatz sind es nur fünf Minuten zu Fuß ins Ortszentrum, ins Solebad und an den Ybbstalradweg.",
    emphasis: "fünf Minuten zu Fuß",
  },

  // Bewusst leer: nur eine echte Drohnenaufnahme verfügbar — kein Block aus drei verschiedenen,
  // motivtreuen Fotos möglich. BrandStatement blendet sich damit ehrlich aus (statt zu wiederholen).
  pillars: [],

  usps: [
    "Strom, Wasser & WLAN",
    "Sanitär & Aufenthaltsraum",
    "Ver- & Entsorgung am Platz",
    "Ganzjährig geöffnet",
    "Hunde erlaubt",
    "Platz für rund 20 Fahrzeuge",
  ],

  trust: {
    heading: "Kurze Wege, viel Programm",
    headingEmphasis: "Kurze Wege",
    intro:
      "Mitten in Göstling und doch ruhig: Vom Stellplatz erreichst du Geschäfte, Gasthäuser, Solebad und Radweg in wenigen Minuten — und ringsum warten die Ybbstaler Alpen mit Wandern, Skifahren und Ausflugszielen.",
  },

  awards: [],

  saison: { von: "Jänner", bis: "Dezember" },

  hero: {
    aerial: { src: `${IMG}/hero-0f32cb3952.webp`, alt: "Luftaufnahme des Krenn Camping-Stellplatzes in Göstling an der Ybbs" },
  },

  breather: {
    image: { src: `${IMG}/breather-78eff67fe3.webp`, alt: "Wohnmobile und Campingbusse auf dem Krenn Camping-Stellplatz in Göstling" },
    line: "Mitten in Göstling, ringsum die Ybbstaler Alpen.",
  },

  // Bilderarm: kein motivtreues Foto je Ausstattungs-Kachel vorhanden — das Bento-Grid würde mit
  // einem Einzelbild unausgewogen wirken. Die Ausstattung steht ehrlich in USPs, Trust & Booking;
  // die Sektion blendet sich aus (leeres features-Array).
  camping: {
    heading: "Voll ausgestattet mitten im Ort",
    intro:
      "Ebene Stellplätze mit Strom- und Frischwasseranschluss, Sanitäranlage, WLAN und ein Aufenthaltsraum mit Küche — dazu Entsorgung für Toilettenkassette, Abwasser und Müll. Der ganze Platz ist umzäunt.",
    features: [],
  },

  anreise: {
    heading: "Dein Weg nach Göstling",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die B25 nach Göstling — die Zufahrt liegt zwischen Unimarkt und Autohaus Rottner, dann sofort links Richtung Dachdeckerei Leichtfried.",
      },
      {
        title: "Alles fußläufig",
        text: "Ortszentrum, Lebensmittelgeschäft, Drogeriemarkt und Tankstelle erreichst du in rund 500 Metern — alles bequem zu Fuß.",
      },
      {
        title: "Bahn & Bus",
        text: "Mit der Bahn bis Waidhofen an der Ybbs, von dort weiter per Bus ins rund 25 Kilometer entfernte Göstling.",
      },
    ],
  },

  // Bilderarm: weniger als vier eigenständige Aufnahmen — das Galerie-Bento blendet sich aus.
  galerie: {
    heading: "Göstling in Bildern",
    headingEmphasis: "Bildern",
    intro: "Eindrücke vom Stellplatz und aus Göstling.",
    tag: "Sommer & Winter",
    images: [],
  },

  booking: {
    heading: "Sichere dir deinen Platz in Göstling",
    headingEmphasis: "deinen Platz",
    intro:
      "Sag uns deinen Zeitraum und dein Fahrzeug — Familie Krenn meldet sich persönlich und reserviert deinen Stellplatz.",
    pricesArePlaceholder: false,
    priceNote:
      "Richtpreis inkl. Platzgebühr + 2 Personen (ab 15 J.) · je weitere Person € 8, Kinder 5–15 J. € 5, Hund € 3, Strompauschale € 4/Nacht · zzgl. Ortstaxe.",
    highlight: {
      title: "Alles fußläufig",
      text: "Ortszentrum, Solebad, Geschäfte und Radweg liegen rund 500 Meter vom Platz entfernt.",
    },
    categories: [
      { id: "wohnmobil", label: "Wohnmobil", perNight: 25, perExtraGuest: 8 },
      { id: "wohnwagen", label: "Wohnwagen + PKW", perNight: 27, perExtraGuest: 8 },
      { id: "zelt", label: "Zelt", perNight: 21, perExtraGuest: 8 },
    ],
  },

  kontakt: {
    tel: "+43 664 536 15 19",
    telHref: "tel:+436645361519",
    mail: "info@camping-stellplatz.at",
    adresse: "Stixenlehen 181 · 3345 Göstling an der Ybbs · Niederösterreich",
    coords: { lat: 47.806904, lng: 14.940600 },
  },

  languages: ["DE"],

  nav: [
    { label: "Stellplatz", href: "#top" },
    { label: "Lage", href: "#anreise" },
    { label: "Preise", href: "#booking" },
    { label: "Kontakt", href: "#anreise" },
  ],
};

export default krenn;
