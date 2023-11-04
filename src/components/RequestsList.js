"use client";

import { useEffect, useState } from "react";
import RequestItem from "./request";

export default function RequestsList() {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://api.bandwatch.co.il/requests")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setIsLoading(false);
      })
      .catch((error) => setItems(error));
  }, []);
  return (
    isLoading && <div className="loader">טוען...</div>,
    items && items.map((item) => <RequestItem request={item} key={item._id} />)
  );
}
