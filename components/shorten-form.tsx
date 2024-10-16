"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function ShorteneForm() {
  const [url, setUrl] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    console.log("working");
    e.preventDefault();
    console.log(url);
  };
  return (
    <form className="mb-4" onSubmit={handleSubmit}>
      <div className="space-y-4">
        <Input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="h-12"
          type="url"
          placeholder="URL خود را برای کوتاه شدن وارد کنید"
          dir="rtl"
          required
        />
        <Button className="w-full p-2" type="submit" dir="rtl">
          URL را کوتاه کن
        </Button>
      </div>
    </form>
  );
}
