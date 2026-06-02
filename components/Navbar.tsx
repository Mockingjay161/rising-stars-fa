"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Rising Stars FA"
            width={50}
            height={50}
          />
          <span className="font-bold text-yellow-500">
            Rising Stars FA
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/programs">Programs</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/news">News</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
  <div className="md:hidden bg-slate-800 px-6 py-6 space-y-4 flex flex-col">

    <Link
      onClick={() => setOpen(false)}
      href="/"
      className="py-2 border-b border-slate-700"
    >
      Home
    </Link>

    <Link
      onClick={() => setOpen(false)}
      href="/about"
      className="py-2 border-b border-slate-700"
    >
      About
    </Link>

    <Link
      onClick={() => setOpen(false)}
      href="/programs"
      className="py-2 border-b border-slate-700"
    >
      Programs
    </Link>

    <Link
      onClick={() => setOpen(false)}
      href="/gallery"
      className="py-2 border-b border-slate-700"
    >
      Gallery
    </Link>

    <Link
      onClick={() => setOpen(false)}
      href="/news"
      className="py-2 border-b border-slate-700"
    >
      News
    </Link>

    <Link
      onClick={() => setOpen(false)}
      href="/contact"
      className="py-2"
    >
      Contact
    </Link>

  </div>
)}

    </header>
  );
}