"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface ShorteneFormProps {
  handleUrlShortener: () => void;
}

export default function ShorteneForm({
  handleUrlShortener,
}: ShorteneFormProps) {
  const [url, setUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch("/api/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });
      await response.json();
      setUrl("");
      handleUrlShortener();
    } catch (error) {
      console.log("Error shortening the URL", error);
    } finally {
      setIsLoading(false);
    }
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
        <Button
          className="w-full p-2"
          type="submit"
          dir="rtl"
          disabled={isLoading}
        >
          {isLoading ? "در حال کوتاه سازی URL" : " URL را کوتاه کن"}
        </Button>
      </div>
    </form>
  );
}
