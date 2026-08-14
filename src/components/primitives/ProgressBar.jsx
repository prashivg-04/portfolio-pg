"use client";

import { Progress } from "@/components/ui/progress";

export function ProgressBar({ value, active }) {
  return <Progress value={active ? value : 0} aria-label={`${value}%`} />;
}
