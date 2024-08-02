'use client'
import { useAuth } from "@/app/context/AuthContext"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PlusCircledIcon } from "@radix-ui/react-icons"
import { useAmp } from "next/amp"
import { useEffect, useState } from "react"
import { BellNoNotificationIcon, BellWithNotificationIcon } from "../IconsSvg"
import { Skeleton } from "@/components/ui/skeleton"

interface Notification {
  id: number;
  message: string;
}

export default function DashboardMain() {
  const { user } = useAuth()
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false)
  const [isLoadingNotification, setIsLoadingNotification] = useState(true)
  const [notifications, setNotifications] = useState<Notification[]>([])

  useEffect(() => {
    // This effect will run every time the notifications array changes
    console.log('Notifications updated:', notifications);
    setTimeout(() => {
      setIsLoadingNotification(false)
    }, 20)
  }, [notifications]);


  return (
    <main className="
    flex w-full items-center justify-between px-2 h-15
      flex-row sm:p-4 sm:px-8
    ">
      <div className="flex flex-col xs:flex-row justify-between">
        <h1 className="text-sm font-bold">Bem-vindo,</h1>
        <h1 className="text-sm font-bold">{user?.name}</h1>
      </div>

      <div className="flex flex-row items-center justify-center gap-2">
        <Button variant="outline" onClick={() => setIsOpenModal(true)} className="flex items-center justify-center hover:bg-zinc-500 hover:text-white">
          <PlusCircledIcon className="w-4 h-4 " />

        </Button>
        <div className="notifications">
          <Button variant="outline" className="flex items-center justify-center hover:bg-zinc-500 hover:text-white">
            <div className="notifications">
              {notifications.length > 0 ? (
                <BellWithNotificationIcon className="w-6 h-6" onClick={() => setIsNotificationModalOpen(true)} />
              ) : (
                <BellNoNotificationIcon className="w-6 h-6" onClick={() => setIsNotificationModalOpen(true)} />
              )}
            </div>
          </Button>

        </div>

      </div>

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

      {/* Modal de notificaçes */}
      {isNotificationModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white p-4 sm:p-6 rounded-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Notificaçes {notifications.length}</h2>
            {isLoadingNotification ? (
              <div className="flex flex-col space-y-3 ">
                <Skeleton className="h-[125px] w-full rounded-xl" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                </div>
              </div>
            ) : (
              <div className="max-h-60 overflow-y-auto">
                {notifications.length > 0 ? (
                  notifications.map((notification, index) => (
                    <div key={index} className="mb-2 p-2 bg-gray-100 rounded">
                      <p>{notification.message}</p>
                    </div>
                  ))
                ) : (
                  <p>Não há notificaçes no momento.</p>
                )}
              </div>
            )}
            <div className="mt-4 flex justify-end">
              <Button onClick={() => setIsNotificationModalOpen(false)} className="w-1/3">
                Fechar
              </Button>
            </div>
          </div>
        </div>
      )}

    </main>
  )
}