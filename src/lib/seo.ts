import type { Metadata } from "next";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://agent-atlas.vercel.app";
export const SITE_NAME = "Agent Atlas";

type PageMeta = {
  title: string;
  description: string;
  path?: string;
  type?: "website" | "article";
};

export function pageMetadata({ title, description, path = "/", type = "website" }: PageMeta): Metadata {
  const url = new URL(path, SITE_URL).toString();
  const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;
  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      type
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description
    }
  };
}

export function jsonLd(data: Record<string, unknown>) {
  return {
    __html: JSON.stringify(data)
  };
}
