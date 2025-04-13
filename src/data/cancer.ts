interface CancerInfo {
  id: string;
  image: string[];
  title: string;
  description: string;
  symptoms: string[];
}

// Data kanker
export const cancerData: CancerInfo[] = [
  {
    id: "kanker-paru-paru",
    image: [
      "/paru1.jpg",
      "/paru2.jpeg",
      "/paru3.jpeg",
      "/paru4.jpeg",
      "/paru5.jpeg",
    ],
    title: "Kanker Paru-Paru",
    description:
      "Kanker paru-paru adalah pertumbuhan sel kanker yang tidak terkendali di jaringan paru-paru dan dapat menyebar ke bagian tubuh lainnya.",
    symptoms: [
      "Batuk terus-menerus",
      "Batuk berdarah",
      "Sesak napas",
      "Nyeri dada",
      "Penurunan berat badan",
    ],
  },
];
