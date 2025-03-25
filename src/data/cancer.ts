interface CancerInfo {
  id: string;
  image: string;
  title: string;
  description: string;
  symptoms: string[];
}

// Data kanker
export const cancerData: CancerInfo[] = [
  {
    id: "kanker-getah-bening",
    image: "/kanker-getahBnening.jpg",
    title: "Kanker Getah Bening",
    description:
      "Kanker getah bening, atau limfoma, adalah penyakit kanker yang menyerang sistem limfatik. Sistem limfatik adalah jaringan yang berperan penting dalam pertahanan tubuhmu lebih maksimal.",
    symptoms: [
      "Pembengkakan kelenjar getah bening",
      "Kelelahan yang tidak kunjung hilang",
      "Batuk produktif",
      "Batuk basah",
      "Demam 39.5 derajat C ke atas",
      "Nyeri pada perut",
      "Diare terus menerus",
    ],
  },
  {
    id: "kanker-prostat",
    image: "/Kanker-Prostat.jpg",
    title: "Kanker Prostat",
    description:
      "Kondisi ketika sel-sel di kelenjar prostat tumbuh secara abnormal dan membentuk tumor ganas. Kelenjar prostat merupakan bagian dari sistem reproduksi pria.",
    symptoms: [
      "Sulit buang air kecil",
      "Pancaran kencing lemah",
      "Sering terbangun untuk buang air kecil pada malam hari",
      "Nyeri atau panas pada penis saat buang air kecil atau ejakulasi",
      "Merasa kandung kemih selalu penuh",
    ],
  },
  {
    id: "kanker-usus-besar",
    image: "/kanker-kolorektal.jpg",
    title: "Kanker Usus Besar",
    description:
      "Kanker usus besar atau kanker kolorektal adalah pertumbuhan sel abnormal di usus besar atau rektum yang dapat menyebar ke bagian tubuh lainnya.",
    symptoms: [
      "Darah dalam tinja",
      "Perubahan kebiasaan buang air besar",
      "Nyeri perut atau kram",
      "Kehilangan berat badan tanpa sebab",
      "Kelelahan yang berlebihan",
    ],
  },
  {
    id: "kanker-paru-paru",
    image: "/kanker-paru-paru.jpg",
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
  {
    id: "kanker-payudara",
    image: "/kanker-payudara.jpg",
    title: "Kanker Payudara",
    description:
      "Kanker payudara adalah pertumbuhan sel kanker yang tidak terkendali di jaringan payudara yang dapat menyebar ke bagian tubuh lainnya.",
    symptoms: [
      "Benjolan di payudara",
      "Perubahan bentuk atau ukuran payudara",
      "Keluarnya cairan dari puting",
      "Nyeri di area payudara",
      "Kulit payudara berubah warna atau bertekstur seperti kulit jeruk",
    ],
  },
];
