'use client'

import { useAuth } from "@/app/context/AuthContext";
import { Button } from "@/components/ui/button";
import { PlayIcon } from "@radix-ui/react-icons";
import { useState } from "react";

export default function HomePage() {
  const user = useAuth()
  const [isCourseisPlatyer, setIsCourseisPlay] = useState<Array<any>>([])

  const teachers = [
    {
      name: "Professor 1",
      subjects: ["Matemática", "Física", "Química"]
    },
    {
      name: "Professor 2",
      subjects: ["Português", "História", "Geografia"]
    },
    {
      name: "Professor 3",
      subjects: ["Biologia", "Educação Física", "Artes"]
    }
  ];

  return (
    <div className="px-20 p-10 ">
      <div className="w-full flex items-center justify-between">
        <h1 className="font-bold text-2xl">Ola, {user.user?.name}</h1>
        <Button className="flex gap-2">
          <PlayIcon />
          Volte a estudar
        </Button>
      </div>

      

    </div>
  )
}