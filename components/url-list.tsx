"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { CheckIcon, CopyIcon, EyeIcon } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

type Url = {
  id: string;
  shortenedUrl: string;
  originalUrl: string;
  visits: number;
};

export default function UrlList() {
  const [urls, setUrls] = useState<Url[]>([]);
  const [copied, setCopied] = useState<boolean>(false);
  const [copiedUrl, setCopiedUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const shortUrl = (code: string) =>
    `${process.env.NEXT_PUBLIC_BASE_URL}/${code}`;

  const fetchUrls = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/urls");
      const data = await response.json();
      setUrls(data);
    } catch (error) {
      console.log("Error fetching urls", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyUrl = (code: string) => {
    const fullUrl = `${shortUrl(code)}`;
    navigator.clipboard.writeText(fullUrl).then(() => {
      setCopied(true);
      setCopiedUrl(code);
      setTimeout(() => {
        setCopied(false);
        setCopiedUrl("");
      }, 3000);
    });
  };

  useEffect(() => {
    fetchUrls();
  }, []);

  if (isLoading) {
    return (
      <div>
        <h2 className="text-2xl font-bold mb-2" dir="rtl">
          آخرین URL ها
        </h2>
        <div className="flex items-center gap-2 justify-between bg-card rounded-md text-card-foreground border p-3">
          <Skeleton className="w-[200px] h-[20px] rounded-md" />
          <div className="flex items-center gap-3">
            <Skeleton className="w-4 h-4 rounded-md" />
            <span className="flex items-center gap-2">
              <Skeleton className="w-24 h-4 rounded-full" />
              <Skeleton className="w-4 h-4 rounded-md" />
            </span>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2" dir="rtl">
        آخرین URL ها
      </h2>
      <ul className="space-y-2">
        {urls?.map((url) => (
          <li
            className="flex items-center gap-2 justify-between bg-card rounded-md text-card-foreground border py-1 px-3"
            key={url.id}
          >
            <Link
              href={`/${url.shortenedUrl}`}
              className="text-blue-500"
              target="_blank"
            >
              {`/${url.shortenedUrl}`}
            </Link>
            <div className="flex items-center gap-3">
              <Button
                onClick={() => handleCopyUrl(url.shortenedUrl)}
                variant={"ghost"}
                size={"icon"}
                className="text-muted-foreground hover:bg-muted"
              >
                {copied && copiedUrl == url.shortenedUrl ? (
                  <CheckIcon className="w-4 h-4" />
                ) : (
                  <CopyIcon className="w-4 h-4" />
                )}
                <span dir="rtl" className="sr-only">
                  کپی کردن URL
                </span>
              </Button>
              <span className="flex items-center gap-2">
                <p dir="rtl">{url.visits} مشاهده</p>
                <EyeIcon className="w-4 h-4" />
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
