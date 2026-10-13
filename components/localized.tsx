"use client";

import type { ElementType } from "react";
import { useLanguage } from "@/components/language-provider";

export default function Localized({ children, as: Tag = "span" }: { children: string; as?: ElementType }) {
  const { t } = useLanguage();
  return <Tag>{t(children)}</Tag>;
}
