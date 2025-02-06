import { auth } from "@/auth";
import Footer from "@/components/global/footer";
import FormularioCiudadPageClient from "@/components/global/formularioCiudadPageClient";
import Nav from "@/components/global/nav";

export default async function FormularioCiudadPage() {
  const session = await auth(); // Ejecuta auth en el servidor
  const user = session.user;
  if (!session) {
    return <div>Not authenticated</div>;
  }

  return (
    <>
    <Nav></Nav>
    <FormularioCiudadPageClient />
    <Footer></Footer>
    </>
);
}