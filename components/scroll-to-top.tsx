"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * ページ遷移時に自動的にトップにスクロールするコンポーネント
 * @returns {null} レンダリングなし
 */
export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // クライアントサイドでのみ実行
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
