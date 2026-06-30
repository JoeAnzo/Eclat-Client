import { LoginForm } from "@/components/login-form"

export default function loginPage() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <h2 className="text-center font-playfair my-4 text-2xl">Welcome to <span className="text-(--primary-color)">Eclat Essense</span></h2>
        <LoginForm className="border-(--primary-color)"/>
      </div>
    </div>
  )
}
