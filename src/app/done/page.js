'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import Request from "@/components/request";
import Link from 'next/link'

export default function Home() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://api.bandwatch.co.il/requests/done")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setIsLoading(false);
      })
      .catch((error) => setItems(error));
  }, []);
  return (
    <main>
      <Image className="main-image" src={"/shalishut.png"} width={80} height={80} alt="Shalishut tag"/>
      <h1>מערך החמ״לים - הושלם</h1>
      {isLoading && <div className="loader">טוען...</div>}
      {items && items.map(item => <Request request={item} key={item._id} />)}
      <Link href="/">בקשות פתוחות</Link>
    </main>
  );
}
