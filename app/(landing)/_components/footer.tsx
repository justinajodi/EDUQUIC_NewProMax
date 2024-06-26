import React from "react";
import { Button } from "@/components/ui/button";
import { FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-zinc-500">
      <div className="flex items-center justify-between pb-10">
        <Link href="/">
          <Button variant={"ghost"}>
            <FaEnvelope className="mr-2 h-4 w-4" />
            Email
          </Button>
        </Link>

        <Link href="/">
          <Button variant={"ghost"}>
            <FaTwitter className="mr-2 h-4 w-4" />
            Twitter
          </Button>
        </Link>

        <Link href="">
          <Button variant={"ghost"}>
            <FaFacebook className="mr-2 h-4 w-4" />
            Facebook
          </Button>
        </Link>

        <Link href="https://www.instagram.com/justina__17?igsh=MTFiNzJyZHU5cWlsag==">
          <Button variant={"ghost"}>
            <FaInstagram className="mr-2 h-4 w-4" />
            Instagram
          </Button>
        </Link>
      </div>
      <small className="mb-2 block text-xs">
        &copy; 2024 Eduquic. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
}
