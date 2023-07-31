"use client";

import Header from "@/components/Header";
import Input from "@/components/Input";
import PageContent from "@/components/PageContent";
import { ToggleTheme } from "@/components/ToggleTheme";
import { useEffect, useState } from "react";
import Loading from "./loading";
import Link from "next/link";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});
  const [location, setLocation] = useState("paris");
  const [error, setError] = useState("");
  const [isMounted, setIsMounted] = useState(false);
  const url = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_API_KEY}&q=${location}&days=7&aqi=yes&alerts=yes`;

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error();
      }

      const data = await res.json();

      setData(data);
      setIsLoading(false);
      setLocation("");
      setError("");
      console.log(data?.current?.condition?.icon);
    } catch (error) {
      setIsLoading(false);
      setData({});
      setError("City not found.");
    }
  };

  useEffect(() => {
    setIsMounted(true);
    // Fetch data when the component first mounts
    fetchData();
  }, []);

  const handleChange = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      // Fetch data when user hits Enter in the input field
      fetchData();
    }
  };

  return (
    <>
      <div className="flex flex-col justify-between items-center p-6 md:flex-row">
        <div className="">
          <Header className=" md:text-4xl font-bold text-5xl">
            <Link href="/">dotweather</Link>
          </Header>
        </div>

        <div className="flex gap-x-6 items-center w-full md:w-3/5 justify-center mt-3 md:mt-0">
          <Input
            handleChange={handleChange}
            setLocation={setLocation}
            placeholder="Search by city"
            className=""
          />
          <ToggleTheme />
        </div>
      </div>
      <div className="">
        {isLoading ? <Loading /> : <PageContent data={data} />}
      </div>
    </>
  );
}
