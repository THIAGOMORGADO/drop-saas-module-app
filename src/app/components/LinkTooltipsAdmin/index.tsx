import { useAuth } from "@/app/context/AuthContext"
import { Button } from "@/components/ui/button"
import { PlusIcon } from "@radix-ui/react-icons"
import { useState } from "react"

export default function LinkTooltipsAdmin() {
  const user = useAuth()
  const [servicesUser, setSertvicesUser] = useState([])


  return (
    <div>
      {servicesUser.length === 0 && (
        <Button variant="default" className="">
          <PlusIcon />
        </Button>
      )}
    </div>
  )
}