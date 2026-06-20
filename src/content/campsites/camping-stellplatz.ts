import type { CampsiteConfig } from "../types";

/**
 * Krenn Camping-Stellplatz · Göstling an der Ybbs (Mostviertel · Niederösterreich)
 * Kleiner, ganzjährig geöffneter Stellplatz an der B25, Platz für ca. 20 Fahrzeuge,
 * 500 m zum Ortszentrum/Solebad/Radweg. Quelle: camping-stellplatz.at.
 * Bildlage ehrlich dünn: nur EINE eigene Drohnen-Aufnahme in zwei Zuschnitten →
 * bewusst schlanke Eine-Seite (Hero + Atempause), Karten-/Galerie-Sektionen blenden sich aus.
 */
const IMG = "/campsites/camping-stellplatz";

const campingStellplatz: CampsiteConfig = {
  name: "Krenn Camping-Stellplatz",
  shortName: "Krenn",
  slug: "camping-stellplatz",
  ort: "Göstling an der Ybbs",
  region: "Mostviertel",
  heroVariant: "center",
  brandKind: "Camping-Stellplatz",
  regionLong: "Ybbstaler Alpen · Mostviertel · Niederösterreich",

  claim: "Ganzjährig zu Gast in den Ybbstaler Alpen",
  claimEmphasis: "Ybbstaler Alpen",
  emailDetail: "eure ganzjährig geöffnete Lage direkt an der B25",
  intro:
    "Direkt an der B25 in Göstling an der Ybbs, ganzjährig geöffnet und Platz für rund 20 Fahrzeuge — Ortszentrum, Solebad und Radweg liegen alle keine 500 Meter entfernt.",

  logo: { src: `${IMG}/amenity-58061c8fb0.webp`, alt: "Krenn Camping-Stellplatz Logo" },

  statement: {
    text: "Mitten in Göstling an der Ybbs — und in fünf Minuten zu Fuß bei allem, was du brauchst.",
    emphasis: "fünf Minuten zu Fuß",
  },

  // Keine eigenen Motive für Foto-Kacheln vorhanden → Pillar-Block blendet sich aus (ehrlich).
  pillars: [],

  usps: [
    "Ganzjährig geöffnet",
    "Platz für ~20 Fahrzeuge",
    "Strom & Frischwasser",
    "Sanitär & Küche",
    "WLAN am Platz",
    "Hunde willkommen",
  ],

  trust: {
    heading: "Alles Wichtige in 500 Metern",
    headingEmphasis: "500 Metern",
    intro:
      "Ortszentrum, Lebensmittel, Tankstelle, das Ybbstaler Solebad und der Anschluss an den Ybbstalradweg — in Göstling erreichst du alles zu Fuß. Ringsum warten die Ybbstaler Alpen.",
  },

  awards: [],

  saison: { von: "Jänner", bis: "Dezember" },

  hero: {
    aerial: {
      src: `${IMG}/amenity-0f32cb3952.webp`,
      alt: "Luftaufnahme des Krenn Camping-Stellplatz in Göstling an der Ybbs",
    },
  },

  // Eine ruhige Full-Bleed-Atempause mit dem zweiten, schräg aufgenommenen Drohnenbild.
  breather: {
    image: {
      src: `${IMG}/amenity-079383ae70.webp`,
      alt: "Stellplatz mit Wohnmobilen, Aufenthaltsraum und Solar-Carport in Göstling",
    },
    line: "Mitten im Ort — und ringsum die Berge.",
  },

  // Keine eigenen Ausstattungs-Fotos → Foto-Kacheln entfallen, Infos stehen in den Chips & Preisen.
  camping: {
    heading: "Ausstattung am Platz",
    intro: "Alles, was ein unkomplizierter Stopp braucht.",
    features: [],
  },

  anreise: {
    heading: "Anfahrt über die B25",
    modes: [
      {
        title: "Mit Wohnmobil & Auto",
        text: "Über die B25 nach Göstling — zwischen Unimarkt und Autohaus Rottner links Richtung Dachdeckerei Leichtfried, der Platz ist bereits sichtbar.",
      },
      {
        title: "Von der A1 Westautobahn",
        text: "Bei Ybbs an der Donau auf die B25 Richtung Göstling wechseln — die Strecke ist durchgehend beschildert.",
      },
      {
        title: "Mit der Bahn",
        text: "Nächster Bahnhof ist Waidhofen an der Ybbs, von dort rund 30 Minuten weiter mit Bus oder Taxi.",
      },
    ],
  },

  // Galerie braucht 4 eigene Motive — die gibt der Platz nicht her → Sektion blendet sich aus.
  galerie: {
    heading: "Eindrücke",
    headingEmphasis: "Eindrücke",
    intro: "Ein paar Aufnahmen vom Platz in Göstling.",
    tag: "Göstling an der Ybbs",
    images: [],
  },

  booking: {
    heading: "Sichere dir deinen Platz in Göstling",
    headingEmphasis: "in Göstling",
    intro: "Wähle Anreise, Abreise und Personen — wir melden uns persönlich mit deiner Verfügbarkeit zurück.",
    pricesArePlaceholder: false,
    priceNote:
      "Richtpreise für 2 Erwachsene/Nacht inkl. Platzgebühr — jede weitere Person € 8, Kinder (5–15 J.) € 5; Strom € 4 pauschal und Ortstaxe kommen hinzu.",
    highlight: {
      title: "Ganzjährig geöffnet",
      text: "Auch im Winter erreichbar — ein praktischer Stützpunkt für Hochkar, Ötscher & Co.",
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
    coords: { lat: 47.806904, lng: 14.9406 },
  },

  languages: ["DE"],

  nav: [
    { label: "Willkommen", href: "#top" },
    { label: "Lage & Anreise", href: "#anreise" },
    { label: "Preise", href: "#booking" },
  ],
};

export default campingStellplatz;
