"use client";
import React, { useState } from "react";
import { BackgroundBeams } from "@/components/ui/Background-Beam";
import { Spotlight } from "@/components/ui/Spotlight";
import {
  HoveredLink,
  MenuItemNoDrop,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar";
import Image from "next/image";
import { cn } from "@/utils/cn";
import { StickyScrollRevealDemo } from "@/sections/homepage";
import { Marketing } from "@/components/ui/marketing";
import { Footer } from "@/components/ui/footer";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="What we do">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Marketplace"
              href="https://algochurn.com"
              src="/ill1.jpg"
              description="Simplify carbon credit transactions with our seamless Marketplace."
            />
            <ProductItem
              title="Spot Trading"
              href="https://gomoonbeam.com"
              src="/ill2.jpg"
              description="Swift and efficient real-time carbon credit deals through Spot Trading."
            />
            <ProductItem
              title="Consulting Services"
              href="https://userogue.com"
              src="/ill3.jpg"
              description="Expert guidance for navigating carbon credit complexities."
            />
          </div>
        </MenuItem>
        <Link href="/about">
          <MenuItemNoDrop setActive={setActive} active={active} item="About Us" />
        </Link>
        <Link href="/contact">
          <MenuItemNoDrop
            setActive={setActive}
            active={active}
            item="Contact Us"
          />
        </Link>
        <Link href="/auction">
          <MenuItemNoDrop setActive={setActive} active={active} item="Auction" />
        </Link>
      </Menu>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Navbar className="top-2" />
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        {/* <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Sustain &amp; Co.
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
        Racing Up The Ladder | India&apos;s First Carbon Trading Platform
        </p>
      </div> */}
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt=""
                src="/hero3.png"
                className="absolute z-10 inset-0 h-full w-full object-contain md:p-0 pt-40"
                width={100}
                height={400}
              />
            </div>

            <div className="lg:py-24">
              {/* <h2 className="text-3xl font-bold sm:text-4xl">Grow your audience</h2> */}
              <h1 className="relative z-10 text-4xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-green-600 font-sans font-bold">
                Sustain &amp; Co.
              </h1>

              <p className="mt-4 text-gray-600">
                Sustain&Co. is India&apos;s first voluntary carbon credits trading
                platform. Our vision is to make carbon credit trading accessible
                and simplified for every individual in India. Our unique
                incorporation of CSR points ensures your investments align with
                corporate social responsibility, contributing to a sustainable
                future. Join us in redefining impact investing in India, where
                financial gains and environmental responsibility converge
                seamlessly at Sustain&Co.
              </p>

              <a
                href="#"
                className="mt-8 relative z-10 inline-block rounded bg-green-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-green-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
        <BackgroundBeams />
      </div>
      <StickyScrollRevealDemo />
      <Marketing />
      <Footer />
    </>
  );
}
