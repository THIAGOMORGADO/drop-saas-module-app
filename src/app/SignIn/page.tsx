'use client'

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import { useRouter } from "next/navigation"
import { ChromeIcon, FacebookIcon, GithubIcon } from "../components/IconsSvg"

import { useForm } from "react-hook-form"
import { useAuth } from "../context/AuthContext"


export default function SignInPage() {
  const form = useForm()
  const router = useRouter()
  const { login } = useAuth();

  const handleSignIn = form.handleSubmit(async (data) => {
    try {

      await login(data.email, data.password);
      router.push('/dashboard/home'); // Redirect to dashboard after successful login
    } catch (error) {
      console.error('Login failed:', error);
      // Here you might want to set an error state or show an error message to the user
    }
  })
  return (
    <div className="flex min-h-screen p-10 flex-col items-center justify-center bg-background">
      <div className="mx-auto w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Login</h1>
          <p className="mt-2 text-muted-foreground">Digite seu e-mail e senha para acessar sua conta.</p>
        </div>
        <form className="space-y-4" onSubmit={handleSignIn}>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="name@example.com" required {...form.register('email')} />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required {...form.register('password')} />
          </div>
          <Button className="w-full" type="submit">
            Sign In
          </Button>
        </form>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">Ou entre com</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <Button variant="outline">
            <GithubIcon className="mr-2 h-4 w-4" />
            Github
          </Button>
          <Button variant="outline">
            <ChromeIcon className="mr-2 h-4 w-4" />
            Google
          </Button>
          <Button variant="outline">
            <FacebookIcon className="mr-2 h-4 w-4" />
            Facebook
          </Button>
        </div>
      </div>
    </div>
  )
}
