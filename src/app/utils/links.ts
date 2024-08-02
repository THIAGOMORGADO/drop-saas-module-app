
import { DashboardIcon, HomeIcon, LineChartIcon, LogoutIcon, PackageIcon, SettingsIcon, UsersIcon, VideoCallIcon } from "../components/IconsSvg"
export const menuLinkMain = [
  
  {
    href: "/dashboard/home",
    icon: HomeIcon,
    name: "Home"
  },
  {
    href: "/dashboard",
    icon: DashboardIcon,
    name: "Dashboard"
  },
  {
    href: "/dashboard/products",
    icon: PackageIcon,
    name: "Produtos"
  },
  {
    href: "/dashboard/clients",
    icon: UsersIcon,
    name: "Contatos"
  },
  {
    href: "/dashboard/orders",
    icon: VideoCallIcon,
    name: "Salas"
  },
  {
    href: "/dashboard/analytics",
    icon: LineChartIcon,
    name: "Analise"
  }
]
export const menuLinkFooter = [{
    href: "/dashboard/setting",
    icon: SettingsIcon,
    name: "Configuraçoes",
    className: "flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8 hover:bg-zinc-500 hover:text-white"
  },
  {
    href: "/dashboard/logout",
    icon: LogoutIcon,
    name: "Logout",
    className: "flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8 hover:bg-zinc-500 hover:text-white"
  }
]