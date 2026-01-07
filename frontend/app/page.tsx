"use client"
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:5000/api", {method: "GET"});
      const data = await res.json();
      console.log(data);
    };

    fetchData();
  }, [])

  return (
    <div>hello</div>
  );
}
 