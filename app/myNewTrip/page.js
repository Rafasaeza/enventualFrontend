import { auth } from "@/auth";
import NewTripForm from "@/components/forms/newTripForm";
import Footer from "@/components/global/footer";
import Nav from "@/components/global/nav";
export default async function Mapa() {
  const session = await auth(); // Ejecuta auth en el servidor
  const user = session.user;
  if (!session) {
    return <div>Not authenticated</div>;
  }

  return(
      <>
      <Nav></Nav>
      <NewTripForm/>
      <Footer></Footer>
     </>
     
    );
}

