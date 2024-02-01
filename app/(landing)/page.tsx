/**
 * v0 by Vercel.
 * @see https://v0.dev/t/xVlutpvh4Ob
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"
import { Image } from "next/image";

export default function Component() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <nav className="flex justify-between items-center py-6">
        <div className="flex items-center space-x-4">
          <FlagIcon className="h-8 w-8" />
          <span className="font-bold text-xl">TokenKey</span>
        </div>
        <div className="flex space-x-4">
          <Link className="text-gray-500 hover:text-gray-700" href="#">
            Inicio
          </Link>
          <Link className="text-gray-500 hover:text-gray-700" href="#">
            Inmuebles
          </Link>
          <Link className="text-gray-500 hover:text-gray-700" href="#">
            Mi perfil
          </Link>
          <Link className="text-gray-500 hover:text-gray-700" href="#">
            Ayuda
          </Link>
        </div>
      </nav>
      <header className="text-center py-10">
        <h1 className="text-6xl font-bold">TokenKey</h1>
        <p className="mt-4 text-lg text-gray-600">El presente de la inversión en el sector inmobiliario</p>
        <p className="mt-2 text-sm text-gray-500 max-w-2xl mx-auto">
          Nuestro sistema de tokenización, permite dividir una gran inversión en proporciones pequeñas de esta,
          permitiendo así que pequeños inversores puedan acceder a grandes beneficios.
        </p>
        <Button className="mt-4" variant="secondary">
          En breves estará disponible
        </Button>
      </header>
      <div className="flex justify-center items-center py-10">
        <image
          alt="Tokenization illustration"
          className="max-w-full h-auto"
          height="400"
          src="/placeholder.svg"
          style={{
            aspectRatio: "600/400",
            objectFit: "cover",
          }}
          width="600"
        />
      </div>
      <section className="py-10">
        <h2 className="text-3xl font-bold text-center">
          Puedes invertir como los grandes inversores, desde solo 100€.
        </h2>
        <div className="mt-6 max-w-4xl mx-auto text-center text-gray-600">
          <p>
            Los tokens de inversión en inmuebles también se benefician de la seguridad y transparencia de las
            blockchains, lo que aumenta la confianza de los inversores y reduce el riesgo de fraude.
          </p>
          <p className="mt-4">
            La tokenización de inversión en inmuebles es una forma innovadora de democratizar el acceso al mercado
            inmobiliario y brindar nuevas oportunidades de inversión a una audiencia más amplia.
          </p>
        </div>
      </section>
      <section className="py-10 bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card className="w-full">
            <CardContent>
              <image
                alt="Residential property"
                className="w-full h-auto"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
              <h3 className="mt-4 text-xl font-semibold">Residencial</h3>
              <p className="text-gray-600">
                Viviendas para uso residencial, principalmente en zonas de playa y en su gran mayoría provinientes de
                adjudicaciones.
              </p>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardContent>
              <image
                alt="Industrial property"
                className="w-full h-auto"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
              <h3 className="mt-4 text-xl font-semibold">Industrial</h3>
              <p className="text-gray-600">
                Naves industriales en polígonos altamente demandados, provinientes de adjudicaciones.
              </p>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardContent>
              <image
                alt="Commercial property"
                className="w-full h-auto"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
              <h3 className="mt-4 text-xl font-semibold">Comercial</h3>
              <p className="text-gray-600">Principalmente edificaciones comerciales en zonas prime.</p>
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="py-10">
        <h2 className="text-3xl font-bold text-center">Gestionamos todo el proceso</h2>
        <div className="flex justify-center items-center mt-6">
          <div className="grid grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="text-center">
              <LocateIcon className="h-12 w-12 mx-auto text-blue-500" />
              <h3 className="mt-2 font-semibold">Localizamos</h3>
              <p className="text-sm text-gray-600">
                Disponemos de expertos en la localización de los mejores productos inmobiliarios.
              </p>
            </div>
            <div className="text-center">
              <StoreIcon className="h-12 w-12 mx-auto text-blue-500" />
              <h3 className="mt-2 font-semibold">Gestionamos la compra</h3>
              <p className="text-sm text-gray-600">
                Somos expertos en la negociación de condiciones las mejores condiciones posibles.
              </p>
            </div>
            <div className="text-center">
              <ReplaceIcon className="h-12 w-12 mx-auto text-blue-500" />
              <h3 className="mt-2 font-semibold">Reformamos</h3>
              <p className="text-sm text-gray-600">
                Disponemos de profesionales de alto nivel para proceder a la reforma necesaria para obtener el máximo
                rendimiento de mercado.
              </p>
            </div>
            <div className="text-center">
              <StoreIcon className="h-12 w-12 mx-auto text-blue-500" />
              <h3 className="mt-2 font-semibold">Vendemos</h3>
              <p className="text-sm text-gray-600">
                Debido a nuestro conocimiento y experiencia, proporcionamos buenos precios de venta, incluso para
                inversores.
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer className="py-10">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">TokenKey</span>
          <Button variant="secondary">En breves estará disponible</Button>
        </div>
        <div className="flex justify-center space-x-4 mt-4">
          <Link className="text-gray-500 hover:text-gray-700" href="#">
            PRIVACY POLICY
          </Link>
          <Link className="text-gray-500 hover:text-gray-700" href="#">
            COOKIES POLICY
          </Link>
          <Link className="text-gray-500 hover:text-gray-700" href="#">
            LEGAL NOTICE
          </Link>
        </div>
      </footer>
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


function LocateIcon(props) {
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
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  )
}


function ReplaceIcon(props) {
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
      <path d="M14 4c0-1.1.9-2 2-2" />
      <path d="M20 2c1.1 0 2 .9 2 2" />
      <path d="M22 8c0 1.1-.9 2-2 2" />
      <path d="M16 10c-1.1 0-2-.9-2-2" />
      <path d="m3 7 3 3 3-3" />
      <path d="M6 10V5c0-1.7 1.3-3 3-3h1" />
      <rect width="8" height="8" x="2" y="14" rx="2" />
    </svg>
  )
}


function StoreIcon(props) {
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
      <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
      <path d="M2 7h20" />
      <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" />
    </svg>
  )
}