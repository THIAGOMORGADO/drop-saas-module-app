import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"

import { DashboardIcon, LogoutIcon, MultiServiceIcon, SettingsIcon } from "../IconsSvg"
import Link from "next/link"
import { linkTooltip } from "@/app/utils/linkTooltip"
import { menuLinkFooter } from "@/app/utils/links"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function Sidebar() {
  return (
    <>
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col bg-background sm:flex  text-white">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5 text-black ">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Link
                  href="#"
                  className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base hover:text-white"
                  prefetch={true}
                >
                  <MultiServiceIcon className="h-4 w-4 transition-all group-hover:scale-110" />

                  <span className="sr-only">Paginia incial</span>

                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Pagina Inicial</TooltipContent>

            </Tooltip>
            {
              linkTooltip.map((link) => {
                const isActive = usePathname()
                return (
                  <Tooltip key={link.href}>
                    <TooltipTrigger asChild>
                      <Link href={link.href}
                        className={isActive === link.href ? 'bg-zinc-600 rounded-lg p-3 text-white' : link.className}>
                        {link.icon && <link.icon className="h-5 w-5" />}
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">{link.name}</TooltipContent>
                  </Tooltip>
                )
              })
            }
          </TooltipProvider>
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5 ">
          <TooltipProvider>
            {menuLinkFooter.map((link) => {
              const isActive = usePathname()
              return (
                <Tooltip key={link.href}>
                  <TooltipTrigger asChild>
                    <Button variant={isActive === link.href ? 'outline' : 'ghost'} className={isActive === link.href ? 'bg-zinc-600 rounded-lg p-3 text-white' : link.className}>
                      {link.icon && <link.icon className="h-5 w-5" />}
                    </Button>
                  </TooltipTrigger>
                </Tooltip>
              )
            })}
          </TooltipProvider>
        </nav>
      </aside >
    </>

  )
}