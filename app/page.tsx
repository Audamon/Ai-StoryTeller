import Image from "next/image";
import logo from "@/assets/images/wizard-hat.png";

export default function Home() {
  return (
    <main className="">
      <section>
        <div>
          <Image src={logo} height={250} alt="logo" />
        </div>
      </section>
    </main>
  );
}
