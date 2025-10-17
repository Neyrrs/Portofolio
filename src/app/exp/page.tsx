"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Loader2Icon, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Home() {
  const { setTheme, theme } = useTheme();
  const [date, setDate] = useState(new Date());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(date);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [date]);

  const formatTanggalIndonesia = (date: Date | undefined): string => {
    if (!date) return "";

    const namaBulanIndonesia = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];

    const tanggal = date.getDate();
    const bulan = date.getMonth();
    const tahun = date.getFullYear();

    return `${tanggal} ${namaBulanIndonesia[bulan]} ${tahun}`;
  };

  const themeToggle = theme === "dark" ? "light" : "dark";
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      {loading ? (
        <LoadingLoader />
      ) : (
        <div className="flex flex-col gap-2">
          <Button size={"sm"} onClick={() => setTheme(themeToggle)}>
            {theme == "dark" ? <Moon /> : <Sun />}
            {theme?.toUpperCase() || "L"}
          </Button>
          <Calendar
            mode="single"
            className="rounded-lg border"
            selected={date}
            onSelect={setDate}
            captionLayout="dropdown"
          />
          <p>Date selected: {formatTanggalIndonesia(date)}</p>
        </div>
      )}
    </div>
  );
}

const LoadingLoader = () => {
  return <Loader2Icon className="animate-spin" />;
};
