"use client";

import Link from "next/link";

export const Header = () => {
  return (
    <div className="p-4 bg-white text-black flex flex-row justify-between">
      <Link href={"/"} className="my-4">
        <img
          src={`/images/logoja.png`}
          alt="logo ja img"
          width={151}
          height={42}
        />
      </Link>
      <img
        src={`/images/logobatiweb.png`}
        alt="logo img"
        width={128}
        className="h-auto"
      />
    </div>
  );
};
