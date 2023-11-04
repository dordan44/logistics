import Image from "next/image";
import RequestsList from "@/components/RequestsList";

export default function Home() {
  return (
    <main>
      <Image className="main-image" src={"/shalishut.png"} width={80} height={80} alt="Shalishut tag"/>
      <h1>מערך החמ״לים</h1>
      <RequestsList/>
    </main>
  );
}
