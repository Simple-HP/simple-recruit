import * as React from "react";

const MOBILE_BREAKPOINT = 768;

/**
 * モバイルデバイスの判定を行うカスタムフック
 * @returns {boolean} モバイルデバイスの場合はtrue、それ以外はfalse
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(false);

  React.useEffect(() => {
    // クライアントサイドでのみ実行
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    // 初期値を設定
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return isMobile;
}
