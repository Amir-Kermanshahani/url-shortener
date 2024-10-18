"use client";

import React, { useState } from "react";
import ShortenForm from "./shorten-form";
import UrlList from "./url-list";

export default function UrlShortenerContainer() {
  const [refreshKey, setRefreshKey] = useState<number>(0);
  const handleUrlShortener = () => {
    setRefreshKey((prev) => prev + 1);
  };
  return (
    <div className="text-center flex flex-col gap-12">
      <ShortenForm handleUrlShortener={handleUrlShortener} />
      <UrlList key={refreshKey} />
    </div>
  );
}
