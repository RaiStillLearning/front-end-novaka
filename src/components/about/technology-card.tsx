// src/components/technology-card.tsx

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface TechnologyCardProps {
  name: string;
  icon: string;
}

export default function TechnologyCard({ name, icon }: TechnologyCardProps) {
  return (
    <Card className="flex items-center space-x-4 p-4 shadow-md hover:shadow-lg transition-shadow">
      <Image
        src={icon}
        alt={name}
        width={40}
        height={40}
        className="object-contain"
      />
      <CardContent className="p-0">
        <p className="font-medium">{name}</p>
      </CardContent>
    </Card>
  );
}
