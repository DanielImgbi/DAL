"use client";
import Image from "next/image";
import logo from "@/assets/Primary logo 1@11x.png";
import { FlipLink } from "./flip-link";
import { useTransitionRouter } from "next-view-transitions";
import Link from "next/link";
import { pageAnimation } from "../../helpers/animation";
import { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Navigation = ({ isHomePage = false }) => {
  const router = useTransitionRouter();

  const [toggle, setToggle] = useState(false);
  // const [backgroundVisibility, setBackgroundVisibility] = useState(false);

  const navItems = [
    { label: "Projects", href: "#" },
    { label: "Services", href: "#" },
    { label: "Studio", href: "/studio" },
    { label: "Journal", href: "#" },
  ];

  // useEffect(() => {
  //   window.addEventListener("scroll", handleBackgroundVisibility);
  //   return () => window.removeEventListener("scroll", handleBackgroundVisibility);
  // }, []);

  // const handleBackgroundVisibility = () =>
  //   window.scrollY > window.screenY
  //     ? setBackgroundVisibility(true)
  //     : setBackgroundVisibility(false);

  const NavItem = ({ item }: { item: { label: string; href: string } }) => (
    <li className="leading-[100%] font-base py-1 font-semibold  hover:text-[#c2a546ad]">
      <FlipLink
        href={item.href}
        onClick={(e) => {
          e.preventDefault();
          router.push(item.href, {
            onTransitionReady: pageAnimation,
          });
        }}
      >
        {item.label}
      </FlipLink>

      {/* {item.label} */}
    </li>
  );

  const MenuIcon = () => {
    return (
      <li
        className="leading-[100%] font-semibold font-base list-none  h-full cursor-pointer  flex flex-col items-end gap-1  lg:hidden"
        onClick={handleSideBar}
      >
        <span
          className={`p-[1px] w-4 bg-gray-400 transition-all ease-linear  ${toggle ? "rotate-45" : ""
            }`}
        ></span>
        <span
          className={`p-[1px] w-3 bg-gray-400 transition-all`}
          style={{
            display: `${toggle ? "none" : "block"}`,
          }}
        ></span>
        <span
          className={`p-[1px] w-4 bg-gray-400 transition-all ease-linear  ${toggle ? "rotate-[135deg] absolute" : ""
            } `}
        ></span>
      </li>
    );
  };

  const handleSideBar = () => {
    setToggle((prev) => !prev);
  };

  return (
    <nav className="w-screen  text-black fixed top-0 left-0 z-50 backdrop-blur-3xl py-3">
      <div className=" flex justify-between items-center py-2 px-7  font-semibold">
        <Link
          href="/"
          onClick={(e) => {
            e.preventDefault();
            router.push("/", {
              onTransitionReady: pageAnimation,
            });
          }}
        >
          <Image
            src={logo}
            alt="DAL logo"
            className="h-10  w-[5rem] lg:w-[8rem]"
          />
        </Link>

        <ul className="hidden items-center font-semibold gap-6 text-white lg:flex">
          {navItems.map((item, index) => (
            <NavItem
              key={index}
              item={item}
            />
          ))}
        </ul>

        <li className=" hidden leading-[100%] font-semibold font-base list-none lg:flex bg-[#c2a546ad] text-white  px-5 py-3 rounded-xl ">
          <FlipLink
            href="#"
            onClick={(e) => {
              e.preventDefault();
              router.push("#", {
                onTransitionReady: pageAnimation,
              });
            }}
          >
            Contact
          </FlipLink>
        </li>

        <MenuIcon />
      </div>

      {toggle && (
        <div className="w-2/3 absolute h-screen top-20 right-0 pt-11 flex flex-col items-center gap-6 z-50 text-lg bg-white backdrop-blur-3xl">
          <ul className="flex flex-col items-center gap-6 ">
            {navItems.map((item, index) => (
              <NavItem
                key={index}
                item={item}
              />
            ))}
          </ul>

          <li className="leading-[100%] font-semibold font-base list-none  bg-[#c2a546ad] text-white px-10 py-2 rounded-xl ">
            <FlipLink
              href="#"
              onClick={(e) => {
                e.preventDefault();
                router.push("#", {
                  onTransitionReady: pageAnimation,
                });
              }}
            >
              Contact
            </FlipLink>
          </li>
        </div>
      )}
    </nav>
  );
};


export default Navigation;

