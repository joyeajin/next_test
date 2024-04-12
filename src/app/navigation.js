"use client";

import Link from "next/link";
import "./navigation.css";
import { usePathname } from "next/navigation";
// import { useRouter } from "next/navigation";

export default function Navigation() {
  // const router = useRouter();
  const pathname = usePathname();
  console.log(pathname);
  const isAbout = pathname === "/about";
  const isProduct = pathname === "/product";
  const isSupport = pathname === "/support";
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/about" className={isAbout ? "active" : ""}>
              회사소개
            </Link>
          </li>
          <li>
            <Link href="/product" className={isProduct ? "active" : ""}>
              제품소개
            </Link>
          </li>
          <li>
            <Link href="/support" className={isSupport ? "active" : ""}>
              지원
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
