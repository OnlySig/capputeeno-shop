"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
const Tags = () => {
  const page = usePathname();
  return (
    <ul className="flex items-center gap-9 pt-8 mb-16">
      <li>
        <Link
          href={"/"}
          className={`${
            page === "/"
              ? "font-bold border-b-4 border-[#bb2e2e]"
              : "hover:border-b-4 border-[#ff4400]"
          }`}
        >
          TODOS OS PRODUTOS
        </Link>
      </li>
      <li>
        <Link
          href={"/camisetas"}
          className={`${
            page === "/camisetas"
              ? "font-bold border-b-4 border-[#bb2e2e]"
              : "hover:border-b-4 border-[#ff4400]"
          }`}
        >
          CAMISETAS
        </Link>
      </li>
      <li>
        <Link
          href={"/canecas"}
          className={`${
            page === "/canecas"
              ? "font-bold border-b-4 border-[#bb2e2e]"
              : "hover:border-b-4 border-[#ff4400]"
          }`}
        >
          CANECAS
        </Link>
      </li>
    </ul>
  );
};

export default Tags;
