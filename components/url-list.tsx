import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { CopyIcon, EyeIcon } from "lucide-react";

export default function UrlList() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2" dir="rtl">
        آخرین URL ها
      </h2>
      <ul className="space-y-2">
        <li className="flex items-center gap-2 justify-between">
          <Link
            href={"https://ui.shadcn.com/docs/installation/next"}
            className="text-blue-500"
            target="_blank"
          >
            https://ui.shadcn.com/docs/installation/next
          </Link>
          <div className="flex items-center gap-3">
            <Button
              variant={"ghost"}
              size={"icon"}
              className="text-muted-foreground hover:bg-muted"
            >
              <CopyIcon className="w-4 h-4" />
              <span dir="rtl" className="sr-only">
                کپی کردن URL
              </span>
            </Button>
            <span className="flex items-center space-x-1">
              <p dir="rtl">100 مشاهده</p>
              <EyeIcon className="w-4 h-4" />
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
}
