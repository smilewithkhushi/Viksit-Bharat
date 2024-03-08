import BadaltaBharat from "@/components/BadaltaBharat";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Pledge from "@/components/Pledge";
import PrimaryNavbar from "@/components/PrimaryNavbar";
import Schemes from "@/components/Schemes";
import StudentCreation from "@/components/StudentCreation";
import Glimpse from "@/components/glimpse";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-4">
      <PrimaryNavbar />
      <Header />
      <Glimpse />
      <section id="#videos">
        <BadaltaBharat />
      </section>

      <section id="#gallery">
        <StudentCreation />
      </section>

      <section id="#pledge">
        <Pledge />
      </section>

      <Schemes />
      <Footer />
    </div>
  );
}
