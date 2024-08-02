'use client'

import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
import { NavigationMenu, NavigationMenuList, NavigationMenuLink, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent } from "@/components/ui/navigation-menu"
import { useRouter } from "next/navigation"

import { MenuIcon, MultiServiceIcon } from "../IconsSvg"
import { ChevronRightIcon } from "@radix-ui/react-icons"

export default function Header() {
  const router = useRouter()
  const handleSignIn = () => {
    router.push('/SignIn')
  }
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link href="#" className="flex items-center justify-start gap-2" prefetch={false}>

            <MultiServiceIcon className="h-6 w-6" />
            <span className="text-lg font-semibold">Multi-service</span>
          </Link>
          <div className="grid gap-4 py-6">
            <Link href="#" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
              Home
            </Link>
            <Collapsible className="grid gap-4">
              <CollapsibleTrigger className="flex w-full items-center text-lg font-semibold [&[data-state=open]>svg]:rotate-90">
                Features <ChevronRightIcon className="ml-auto h-5 w-5 transition-all" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="-mx-6 grid gap-6 bg-muted p-6">
                  <Link href="#" className="group grid h-auto w-full justify-start gap-1" prefetch={false}>
                    <div className="text-sm font-medium leading-none group-hover:underline">Analytics</div>
                    <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Upgrade your reporting with advanced analytics.
                    </div>
                  </Link>
                  <Link href="#" className="group grid h-auto w-full justify-start gap-1" prefetch={false}>
                    <div className="text-sm font-medium leading-none group-hover:underline">Developer Tools</div>
                    <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Extend your application with our developer tools.
                    </div>
                  </Link>
                  <Link href="#" className="group grid h-auto w-full justify-start gap-1" prefetch={false}>
                    <div className="text-sm font-medium leading-none group-hover:underline">
                      Security &amp; Compliance
                    </div>
                    <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Keep your data secure with our security features.
                    </div>
                  </Link>
                  <Link href="#" className="group grid h-auto w-full justify-start gap-1" prefetch={false}>
                    <div className="text-sm font-medium leading-none group-hover:underline">Scalability</div>
                    <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Scale your application with our infrastructure.
                    </div>
                  </Link>
                </div>
              </CollapsibleContent>
            </Collapsible>
            <Link href="#" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
              Pricing
            </Link>
            <Link href="#" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
              Contact
            </Link>
          </div>
        </SheetContent>
      </Sheet>
      <div className="flex container">
        <Link href="#" className="flex items-center justify-center gap-2 " prefetch={false}>

          <MultiServiceIcon className="h-6 w-6" />

          <span className="text-lg font-semibold">Multi-Service</span>
        </Link>
      </div>
      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList>
          <NavigationMenuLink asChild>
            <Link
              href="#"
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
              prefetch={false}
            >
              Home
            </Link>
          </NavigationMenuLink>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Features</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[400px] p-2">
                <NavigationMenuLink asChild>
                  <Link
                    href="#"
                    className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    prefetch={false}
                  >
                    <div className="text-sm font-medium leading-none group-hover:underline">Analytics</div>
                    <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Upgrade your reporting with advanced analytics.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    href="#"
                    className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    prefetch={false}
                  >
                    <div className="text-sm font-medium leading-none group-hover:underline">Developer Tools</div>
                    <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Extend your application with our developer tools.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    href="#"
                    className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    prefetch={false}
                  >
                    <div className="text-sm font-medium leading-none group-hover:underline">
                      Security &amp; Compliance
                    </div>
                    <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Keep your data secure with our security features.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    href="#"
                    className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    prefetch={false}
                  >
                    <div className="text-sm font-medium leading-none group-hover:underline">Scalability</div>
                    <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Scale your application with our infrastructure.
                    </div>
                  </Link>
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="#"
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
              prefetch={false}
            >
              Pricing
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              href="#"
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
              prefetch={false}
            >
              Contact
            </Link>
          </NavigationMenuLink>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="ml-auto">
        <Button onClick={handleSignIn}>Sign In</Button>
      </div>
    </header>
  )
}