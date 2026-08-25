import { company } from "./company";

export const services = [
  {
    title: "Nationaler Güterverkehr",
    description:
      "Transporte für gewerbliche Auftraggeber mit Kerngebiet Wien und Niederösterreich. Geeignet für regelmäßige Fahrten, einzelne Aufträge und kurzfristige Anforderungen.",
  },
  {
    title: "Komplettladungen / FTL",
    description:
      "Bei einer Komplettladung nutzt ein Auftraggeber die verfügbare Transportkapazität für seine Ware. Das eignet sich für direkte Fahrten ohne unnötige Umladung.",
  },
  {
    title: "Teilladungen / LTL",
    description: `Teilladungen sind sinnvoll, wenn keine komplette LKW-Ladung benötigt wird. ${company.name} stimmt Umfang, Termin und Ablauf pragmatisch mit dem Auftraggeber ab.`,
  },
  {
    title: "Expresszustellungen",
    description:
      "Für zeitkritische gewerbliche Transporte zählt schnelle Reaktion. Anfragen werden direkt abgestimmt, damit rasch geklärt ist, ob und wann die Fahrt möglich ist.",
  },
  {
    title: "Vertretungsfahrten",
    description: `Bei Urlaub, Ausfällen oder kurzfristigen Engpässen unterstützt ${company.name} diskret und verlässlich als externer Transportpartner.`,
  },
  {
    title: "Palettenware und flexible Termine",
    description:
      "Palettenware und abgestimmte Liefertermine werden sachlich geplant und zuverlässig abgewickelt. Im Mittelpunkt stehen klare Kommunikation und passende Zeitfenster.",
  },
];
