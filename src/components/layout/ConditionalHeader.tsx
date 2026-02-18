"use client";

import { usePathname } from "next/navigation";
import Logo, { Logo2 } from "./Logo";
import DateTime from "./DateTime";

export default function ConditionalHeader() {
  const pathname = usePathname();
  const isPasswordPage = pathname === "/password";

  if (isPasswordPage) {
    return null;
  }

  return (
    <div className="relative w-full mb-[-60px]">
      {/* Logo - centered above content on mobile, absolute on desktop */}
      <div className="flex justify-center sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:top-0">
        <div className="flex items-center justify-center h-16 gap-4 sm:h-24">
          <Logo
            width={300}
            height={120}
            className="flex items-center h-full"
          />
          <div className="w-[2px] bg-gray-400 dark:bg-gray-600 h-8 sm:h-12"></div>
          <Logo2
            width={300}
            height={120}
            className="flex items-center h-full ml-[-22px] sm:ml-[-35px]"
          />
        </div>
      </div>
      {/* Datum oben rechts */}
      <div className="flex justify-center sm:justify-end sm:mr-10">
        {/* TODO: Messtation Datum und Uhrzeit anzeigen*/}
        <DateTime />
      </div>
    </div>
  );
}
