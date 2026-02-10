"use client";

import { useEffect } from "react";
import { useTOC } from "@/context/table-of-contents-context";

export function HideTOC() {
  const { setShowTOC } = useTOC();

  useEffect(() => {
    setShowTOC(false);
    
    return () => {
      setShowTOC(true);
    };
  }, [setShowTOC]);

  return null;
}
