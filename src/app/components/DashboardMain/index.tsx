'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PlusCircledIcon } from "@radix-ui/react-icons"
import { useState } from "react"

export default function DashboardMain() {
  const [name, setName] = useState('Thiago Morgado')
  const [isOpenModal, setIsOpenModal] = useState(false)
  return (
    <main className="
    flex w-full items-center justify-between px-2 h-15
      flex-row sm:p-4 sm:px-8
    ">
      <div className="flex flex-col xs:flex-row justify-between">
        <h1 className="text-sm font-bold">Bem-vindo,</h1>
        <h1 className="text-sm font-bold">{name}</h1>
      </div>

      <Button variant="outline" onClick={() => setIsOpenModal(true)} className="flex items-center justify-center hover:bg-zinc-500 hover:text-white">
        <PlusCircledIcon className="w-4 h-4 " />

      </Button>
      {isOpenModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white p-4 sm:p-6 rounded-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Novo Contato</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome</label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Digite o nome"
                />
              </div>
              <div className="">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Telefone</label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Digite o telefone"
                />
              </div>
              <div className="flex flex-row justify-between items-center gap-11">
                <Button type="submit" className="w-[50%]">Cadastrar</Button>
                <Button onClick={() => setIsOpenModal(false)} className="w-[50%]">Fechar</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  )
}