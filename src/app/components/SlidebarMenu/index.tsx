'use client'

import Link from "next/link"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import DashboardMain from "../DashboardMain"
import Sidebar from "../TooTips"
import { usePathname } from "next/navigation"
import { menuLinkFooter, menuLinkMain } from "@/app/utils/links"
import { DashboardIcon, MenuIcon } from "../IconsSvg"
import { useAuth } from "@/app/context/AuthContext"

export default function SlidebarMenu({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();
  const { logout } = useAuth()

  function handleLogOut() {
    logout()
  }


  return (
    <div className="flex min-h-screen flex-col bg-muted/40">
      <Sidebar />
      <div className="flex flex-row ">
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <MenuIcon className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="sm:max-w-xs flex flex-col gap-7 justify-center border-none w-[300px] rounded-e-md">
              <div className="flex flex-row items-center justify-start gap-2 ">
                <DashboardIcon className="h-10 w-10" />
                <h1 className="text-2xl font-bold">Agência Meta</h1>
              </div>

              {/* TooltipMain */}
              <nav className="flex flex-col gap-6 justify-strart items-start h-full pt-10">
                {
                  menuLinkMain.map((link, index) => {
                    const isActive = pathName.split('/')[2] === link.href.split('/')[2];
                    return (
                      <Link
                        href={link.href}
                        key={index}
                        className={`
                        flex w-full items-center gap-1 px-2.5 text-muted-foreground 
                        ${isActive ? 'bg-black rounded-full p-3 text-white' : ''}
                        `}
                        prefetch={false}
                      >
                        <link.icon className="h-5 w-5 mx-2" />
                        {link.name}
                      </Link>
                    )
                  })
                }
              </nav>
              {/* TooltipFooter */}
              <nav className="mt-auto flex flex-row justify-between items-center gap-4 px-2 sm:py-5 ">
                {
                  menuLinkFooter.map((link) => {
                    return (
                      <div key={link.href} className="flex flex-row items-center justify-between">
                        <Link
                          href={link.href}
                          className="flex w-full items-center justify-between text-muted-foreground"
                        >
                          <div className="flex flex-row items-center justify-between">
                            <link.icon className="h-5 w-5 mx-2" />
                          </div>
                          <div className="flex flex-row items-center justify-between gap-1">
                          </div>
                        </Link>
                      </div>
                    )
                  })
                }
              </nav>
            </SheetContent>
          </Sheet>
        </header>
        <DashboardMain />
      </div>

      {children}
    </div>
  )
}