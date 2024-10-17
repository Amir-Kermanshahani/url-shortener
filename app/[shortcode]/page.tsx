import prisma from "@/lib/db";
import { redirect } from "next/navigation";
import React from "react";

interface RedirectPageProps {
  params: { shortcode: string };
}

export default async function RedirectPage({ params }: RedirectPageProps) {
  const { shortcode } = params;
  const url = await prisma.url.findUnique({
    where: {
      shortenedUrl: shortcode,
    },
  });
  if (!url) {
    return <div>404 - Url not found</div>;
  }
  await prisma.url.update({
    where: {
      id: url.id,
    },
    data: {
      visits: { increment: 1 },
    },
  });
  redirect(url.originalUrl);
}
