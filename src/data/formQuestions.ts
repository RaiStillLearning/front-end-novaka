export const formQuestions: Record<
  string,
  { question: string; type: string; options?: string[] }[]
> = {
  "kanker-payudara": [
    {
      question: "Apakah ada benjolan di area payudara?",
      type: "radio",
      options: ["Ya", "Tidak"],
    },
    {
      question: "Apakah ada perubahan warna kulit di sekitar payudara?",
      type: "radio",
      options: ["Ya", "Tidak"],
    },
    { question: "Sejak kapan gejala ini muncul?", type: "text" },
  ],
  "kanker-paru": [
    {
      question: "Apakah Anda mengalami batuk berkepanjangan?",
      type: "radio",
      options: ["Ya", "Tidak"],
    },
    {
      question: "Apakah Anda memiliki riwayat merokok?",
      type: "radio",
      options: ["Ya", "Tidak"],
    },
    { question: "Berapa lama gejala ini terjadi?", type: "text" },
  ],
  "kanker-prostat": [
    {
      question: "Apakah Anda sering buang air kecil terutama di malam hari?",
      type: "radio",
      options: ["Ya", "Tidak"],
    },
    {
      question: "Apakah ada darah dalam urine?",
      type: "radio",
      options: ["Ya", "Tidak"],
    },
    { question: "Seberapa sering gejala ini terjadi?", type: "text" },
  ],
};
