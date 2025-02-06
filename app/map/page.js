import { auth } from "@/auth";
import Footer from "@/components/global/footer";
import Nav from "@/components/global/nav";
import MapaDestinos from "@/components/map/mapDestinations";

export default async function Mapa() {
  const session = await auth(); // Ejecuta auth en el servidor
  const user = session.user;
  if (!session) {
    return <div>Not authenticated</div>;
  }

  return (
      <>
      <Nav></Nav>
      <MapaDestinos />
      <Footer></Footer>
      </>);
}

