import { DashboardIcon, HomeIcon, LineChartIcon, PackageIcon,  UsersIcon, VideoCallIcon } from "../components/IconsSvg"


export const linkTooltip = [
  
  {
    href: "/dashboard/home",
    name: "Home",
    className: "flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8 hover:bg-zinc-500 hover:text-white",
    icon: HomeIcon
  },
  {
    href: "/dashboard",
    name: "Dashboard",
    icon: DashboardIcon,
    className: "flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8 hover:bg-zinc-500 hover:text-white"
  },
  {
    href: "/dashboard/products",
    name: "Produtos",
    icon: PackageIcon,
    className: "flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8 hover:bg-zinc-500 hover:text-white"
  },
  {
    href: "/dashboard/clients",
    name: "Contatos",
    icon: UsersIcon,
    className: "flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8 hover:bg-zinc-500 hover:text-white"
  },
  // Esse temos que pensar como usuario de perfil de role com privilegios de admin ou de suporte  
  {
    href: "/dashboard/orders",
    name: "Salas",
    icon: VideoCallIcon,
    className: "flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8 hover:bg-zinc-500 hover:text-white"
  },
  {
    href: "/dashboard/analytics",
    name: "Analise",
    icon: LineChartIcon,
    className: "flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8 hover:bg-zinc-500 hover:text-white"
  },
  
]