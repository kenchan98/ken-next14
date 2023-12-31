"use client";

import CCTV from "@/app/_components/cctv";
import data from "@/data/cctv.json";

export default function CCTVs() {
  return (
    <div className="flex flex-wrap justify-center max-w-7xl">
      {data.cctv.map((url, index) => (
        <CCTV url={url} key={index} />
      ))}
    </div>
  );
}
