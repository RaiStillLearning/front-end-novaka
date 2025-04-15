// src/app/about/page.tsx

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { team } from "./data";
import { TeamMemberCard } from "@/components/about/TeamMemberCard";
import {
  CodeIcon,
  RocketIcon,
  TargetIcon,
  UsersIcon,
} from "@/components/ui/icons";

const coreValues = [
  {
    icon: <RocketIcon className="w-6 h-6" />,
    title: "Innovation",
    description: "Kami selalu mencari cara baru untuk menyelesaikan masalah",
  },
  {
    icon: <UsersIcon className="w-6 h-6" />,
    title: "Collaboration",
    description: "Bekerja sama untuk mencapai hasil terbaik",
  },
  {
    icon: <CodeIcon className="w-6 h-6" />,
    title: "Excellence",
    description: "Berkomitmen pada kualitas dalam setiap kode",
  },
  {
    icon: <TargetIcon className="w-6 h-6" />,
    title: "Impact",
    description: "Menciptakan solusi yang benar-benar berguna",
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 py-10 mt-30">
      {/* Hero Section with Image and Team */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start"
      >
        {/* Left Column: Text */}
        <Card className="p-6 md:p-8 shadow-xl rounded-2xl">
          <div className="space-y-6">
            <Badge variant="outline" className="text-sm font-medium">
              Coding Camp powered by DBS Foundation
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Mimpi Kami adalah{" "}
              <span className="text-primary">Transformasi Deteksi Kanker</span>
            </h1>

            <p className="text-lg text-muted-foreground mt-5">
              Deteksi kanker secara dini merupakan langkah penting untuk
              meningkatkan peluang kesembuhan dan menyelamatkan lebih banyak
              nyawa. Website ini hadir sebagai solusi inovatif berbasis
              teknologi, yang dirancang untuk membantu masyarakat dan tenaga
              medis dalam memprediksi potensi kanker secara lebih cepat, akurat,
              dan efisien. Dengan menggabungkan data medis dan kecerdasan
              buatan, kami ingin menjadi jembatan antara harapan dan kenyataan
              dalam perjuangan melawan kanker.
            </p>

            {/* Tentang Kami */}
            <div className="pt-8 border-t border-border space-y-3">
              <h2 className="text-2xl font-semibold">Tentang Kami</h2>
              <p className="text-muted-foreground mb-1">
                Kami adalah tim pelajar yang memiliki semangat besar dalam
                memanfaatkan teknologi untuk menciptakan dampak sosial yang
                nyata. Melalui proyek ini, kami berharap dapat memberikan
                kontribusi positif dalam bidang kesehatan, khususnya dalam
                meningkatkan kesadaran dan deteksi dini kanker. Dengan
                pendekatan yang humanis dan berbasis data, kami percaya bahwa
                teknologi bisa menjadi bagian dari solusi besar bagi masalah
                kesehatan di masa depan.
              </p>
            </div>
          </div>
        </Card>

        {/* Right Column: Image + Team */}
        <div className="space-y-6">
          <Image
            src="/images/teamwork.jpg"
            alt="Tim kami"
            width={600}
            height={500}
            className="rounded-xl shadow-md object-cover w-full"
          />

          <div>
            <h2 className="text-xl font-bold mb-6 text-center">Anggota Tim</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {team.map((member) => (
                <TeamMemberCard
                  key={member.name}
                  name={member.name}
                  image={member.image}
                  role={member.role}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Nilai Inti */}
      <section className="space-y-6">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-bold">Nilai Inti Kami</h2>
          <Separator className="mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="p-2 rounded-full bg-primary/10 text-primary">
                        {value.icon}
                      </div>
                      <CardTitle className="text-lg">{value.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </section>

      {/* Tentang Proyek */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-4"
      >
        <h2 className="text-2xl font-bold text-end">Tentang Proyek Ini</h2>
        <Separator />
        <p className="text-muted-foreground">
          Proyek ini merupakan bagian dari Coding Camp yang didukung oleh DBS
          Foundation. Kami membangun platform ini sebagai sarana pembelajaran
          dan kontribusi nyata untuk masyarakat.
        </p>
      </motion.section>

      {/* Teknologi yang Digunakan */}
      {/* <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <h2 className="text-2xl font-bold">Teknologi yang Digunakan</h2>
        <Separator />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {stack.map((tech, index) => (
            <TechnologyCard key={index} name={tech.name} icon={tech.icon} />
          ))}
        </div>
      </motion.section> */}
    </div>
  );
}
