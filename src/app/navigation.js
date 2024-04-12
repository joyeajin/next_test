"use client";

import Link from "next/link";
import "./navigation.css";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  // console.log(pathname);
  // const isAbout = pathname === "/about";
  // const isProduct = pathname === "/product";
  // const isSupport = pathname === "/support";
  const navList = [
    { path: "/about", label: "회사소개" },
    { path: "/product", label: "제품소개" },
    { path: "/support", label: "지원" },
  ];
  return (
    <>
      <nav>
        <ul>
          {navList.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={pathname === item.path ? "active" : ""}
              >
                {item.label}
              </Link>
            </li>
          ))}
          {/* <li>
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
          </li> */}
        </ul>
      </nav>
    </>
  );
}
