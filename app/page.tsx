"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen((value) => !value);
  };
  return (
    <>
      <div className="h-full overflow-auto bg-[#FFFDFA] px-4 md:px-40">
        <div className="flex h-full w-full flex-col">
          {/* Navbar */}
          <nav className="flex items-center justify-between pt-8">
            {/* Logo */}
            <div className="relative h-[40px] w-[65px]">
              <Image fill alt="Logo" src={"logo.svg"} />
            </div>
            {!isOpen ? (
              <Menu
                onClick={() => toggleOpen()}
                className="block h-10 w-10 text-lg text-[#00001A] hover:cursor-pointer md:hidden"
              />
            ) : (
              <div className="absolute inset-0 z-10 h-full w-full bg-[#00001A]/60">
                <div className="fixed right-0 ml-auto h-full w-[70vw] bg-[#FFFDFA] px-6 pt-8">
                  <div className="mb-12">
                    <X
                      onClick={() => toggleOpen()}
                      className="ml-auto h-10 w-10 text-lg text-[#00001A] hover:cursor-pointer md:hidden"
                    />
                  </div>
                  <div className="flex h-[300px] flex-col justify-center gap-y-4">
                    <Link
                      href={"/"}
                      className="text-lg font-bold text-[#5D5F79]"
                    >
                      Home
                    </Link>
                    <Link
                      href={"/"}
                      className="text-lg font-bold text-[#5D5F79]"
                    >
                      New
                    </Link>
                    <Link
                      href={"/"}
                      className="text-lg font-bold text-[#5D5F79]"
                    >
                      Popular
                    </Link>
                    <Link
                      href={"/"}
                      className="text-lg font-bold text-[#5D5F79]"
                    >
                      Trending
                    </Link>
                    <Link
                      href={"/"}
                      className="text-lg font-bold text-[#5D5F79]"
                    >
                      Categories
                    </Link>
                  </div>
                </div>
              </div>
            )}
            <div className="hidden items-center justify-center gap-x-8 text-[#5D5F79] md:flex">
              <Link href={"/"} className="hover:text-[#F15E50]">
                Home
              </Link>
              <Link href={"/"} className="hover:text-[#F15E50]">
                New
              </Link>
              <Link href={"/"} className="hover:text-[#F15E50]">
                Popular
              </Link>
              <Link href={"/"} className="hover:text-[#F15E50]">
                Trending
              </Link>
              <Link href={"/"} className="hover:text-[#F15E50]">
                Categories
              </Link>
            </div>
          </nav>
          {/* Phần chính */}
          <main className="flex h-full w-full flex-grow flex-col pt-12">
            {/* Phần trên */}
            <div className="grid flex-shrink gap-x-8 md:grid-cols-3">
              {/* Phần trái */}
              <div className="mb-16 grid md:col-span-2 md:m-0 md:grid-rows-[300px_auto]">
                {/* Phần trái trên */}
                <div>
                  <div className="relative h-[300px]">
                    <Image
                      fill
                      alt="hero-image"
                      src={"/image-web-3-desktop.jpg"}
                      className="object-cover"
                    />
                  </div>
                </div>
                {/* Phần trái dưới */}
                <div className="mt-8 grid gap-x-8 md:grid-cols-2">
                  {/* Phần trái dưới trái */}
                  <h1 className="mb-8 pr-4 text-[52px] font-[800] leading-none text-[#00001A] md:m-0">
                    The Bright Future of Web 3.0?
                  </h1>
                  {/* Phần trái dưới phải */}
                  <div className="flex flex-col justify-between">
                    <p className="text-sm font-medium text-[#5D5F79]">
                      We dive into the next evolution of the web that claims to
                      put the power of the platforms back into the hands of the
                      people. But is it really fulfilling its promise?
                    </p>
                    <button className="mt-8 w-1/2 bg-[#F15E50]  px-4 py-3 text-sm font-semibold tracking-[4px] text-[#FFFDFA] hover:bg-[#00001A]">
                      READ MORE
                    </button>
                  </div>
                </div>
              </div>
              {/* Phần phải */}
              <div className="h-full w-full bg-[#00001A] px-6 py-8">
                <div className="flex h-full w-full flex-col">
                  <h1 className="mb-8 text-4xl font-bold text-[#E9AB53]">
                    New
                  </h1>
                  <div className="flex-grow"></div>
                  {/* Tin tức 1 */}
                  <div>
                    <a
                      href={"/"}
                      className="text-{#FFFDFA] text-lg font-bold hover:text-[#E9AB53]"
                    >
                      Hydrogen VS Electric Cars
                    </a>
                    <p className="mt-2 text-sm font-semibold text-[#5D5F79]">
                      Will hydrogen-fueled cars ever catch up to EVs?
                    </p>
                    <hr className="my-8 border-[#5D5F79]" />
                  </div>
                  {/* Tin tức 2 */}
                  <div>
                    <a
                      href={"/"}
                      className="text-{#FFFDFA] text-lg font-bold hover:text-[#E9AB53]"
                    >
                      The downsides of AI Artistry
                    </a>
                    <p className="mt-2 text-sm font-semibold text-[#5D5F79]">
                      What are the possible adverse effects of on-demand AI
                      image generation?
                    </p>
                    <hr className="my-8 border-[#5D5F79]" />
                  </div>
                  {/* Tin tức 3 */}
                  <div>
                    <a
                      href={"/"}
                      className="text-{#FFFDFA] text-lg font-bold hover:text-[#E9AB53]"
                    >
                      Is VC Funding Drying Up?
                    </a>
                    <p className="mt-2 text-sm font-semibold text-[#5D5F79]">
                      Private funding by VC firms is down 50% YOY. We take a
                      look at what that means.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Phần dưới */}
            <div className="mt-auto grid h-full w-full flex-grow gap-y-8 bg-[#FFFDFA] py-16 md:grid-cols-3 md:gap-0 md:gap-x-8">
              {/* Thẻ 1 */}
              <div className="flex h-full w-full items-center gap-x-6">
                <div className="relative h-full w-full max-w-[25%]">
                  <Image
                    fill
                    alt="image_1"
                    src={"/image-retro-pcs.jpg"}
                    className="object-cover"
                  />
                </div>
                <div className="flex h-full flex-col justify-between">
                  <h3 className="text-3xl font-black text-[#C5C6CE]">01</h3>
                  <a className="text-lg font-black text-[#00001A] hover:cursor-pointer hover:text-[#F15E50]">
                    Reviving Retro PCs
                  </a>
                  <p className="text-sm font-semibold text-[#5D5F79]">
                    What happens when old PCs are given modern upgrades?
                  </p>
                </div>
              </div>
              {/* Thẻ 2 */}
              <div className="flex h-full w-full items-center gap-x-4">
                <div className="relative h-full w-full max-w-[25%]">
                  <Image
                    fill
                    alt="image_1"
                    src={"/image-top-laptops.jpg"}
                    className="object-cover"
                  />
                </div>
                <div className="flex h-full flex-col justify-between">
                  <h3 className="text-3xl font-bold text-[#C5C6CE]">02</h3>
                  <a className="text-lg font-black text-[#00001A] hover:cursor-pointer hover:text-[#F15E50]">
                    Top 10 Laptops of 2022
                  </a>
                  <p className="text-sm font-semibold text-[#5D5F79]">
                    Our best picks for variouse needs and budgets.
                  </p>
                </div>
              </div>
              {/* Thẻ 3 */}
              <div className="flex h-full w-full items-center gap-x-4">
                <div className="relative h-full w-full max-w-[25%]">
                  <Image
                    fill
                    alt="image_1"
                    src={"/image-gaming-growth.jpg"}
                    className="object-cover"
                  />
                </div>
                <div className="flex h-full flex-col justify-between">
                  <h3 className="text-3xl font-bold text-[#C5C6CE]">03</h3>
                  <a className="text-lg font-black text-[#00001A] hover:cursor-pointer hover:text-[#F15E50]">
                    The Growth of Gaming
                  </a>
                  <p className="text-sm font-semibold text-[#5D5F79]">
                    How the pandemic has sparked fresh opportunities.
                  </p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
