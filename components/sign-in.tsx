/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/9vNTbtwTmWU
 */
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function sign-in() {
  return (
    <div className="max-w-md mx-auto rounded-lg border p-8 shadow-lg">
      <div className="flex flex-col items-center mb-4">
        <div className="rounded-full bg-[#50b5a9] w-16 h-16 flex items-center justify-center mb-2">
          <FlagIcon className="text-white text-3xl" />
        </div>
        <h2 className="text-2xl font-semibold">Registrate</h2>
        <p className="text-sm text-gray-600">Por favor rellena los siguientes campos:</p>
      </div>
      <form className="space-y-4">
        <Input placeholder="Nombre" type="text" />
        <Input placeholder="Apellidos" type="text" />
        <Input placeholder="Fecha de nacimiento" type="date" />
        <Input placeholder="Correo electrónico" type="email" />
        <Input placeholder="Contraseña" type="password" />
        <Input placeholder="Confirmar contraseña" type="password" />
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label className="text-sm text-gray-600" htmlFor="terms">
            Acepto los términos y condiciones
          </label>
        </div>
        <Button className="w-full bg-black text-white">REGISTRARSE</Button>
      </form>
      <div className="flex items-center justify-between my-4">
        <hr className="w-full" />
        <span className="p-2 text-sm text-gray-400">O</span>
        <hr className="w-full" />
      </div>
      <Button className="w-full bg-white text-black border border-gray-300">
        <ChromeIcon className="text-red-500 mr-2" />
        Continuar con Google{"\n      "}
      </Button>
      <p className="mt-4 text-sm text-center text-gray-600">
        Tienes cuenta?
        <Link className="text-blue-600 hover:underline" href="#">
          Inicia sesión
        </Link>
      </p>
    </div>
  )
}


function FlagIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  )
}


function ChromeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  )
}
