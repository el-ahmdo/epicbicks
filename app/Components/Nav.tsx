"use client";
// import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import logo from "@/public/assets/Images/Logo.svg";
import Link from "next/link";
import AboutUs from "./AboutUs";
// import LoginModalWrapper from "../homepage/login";
// import PasswordModalWrapper from "../homepage/passwordSceen";
// import JoinModal from "../homepage/JoinModal";

export default function NavBar() {
  // const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showDeals, setShowDeals] = useState(false);
  const [showMobileDeals, setShowMobileDeals] = useState(false);
  const [showMobileStories, setShowMobileStories] = useState(false);

  const [showStories, setShowStories] = useState(false);
  const [clickedMenu, setClickedMenu] = useState<string | null>(null);
  // const [showLogin, setShowLogin] = useState(false);
  // const [showPassword, setShowPassword] = useState(false);
  // const [joinModel, setJoinModel] = useState(false);
  // const [email, setEmail] = useState("");
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as HTMLElement;

      // ✅ 1. Ignore clicks inside the nav
      if (navRef.current && navRef.current.contains(target)) return;

      // ✅ 2. Ignore clicks on "View All" button
      if (target.closest("#view-all-button")) return;

      // ✅ 3. Otherwise, close dropdowns
      setShowDeals(false);
      setShowStories(false);
      setClickedMenu(null);
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full  ">
      {/* Header */}

      <header
        ref={navRef}
        className="flex items-center w-full justify-between px-4 md:px-22 py-2  z-50 bg-white ">
        {/* Logo */}
        <Link href="/">
          <Image
            src={logo}
            alt="PWVI Logo"
            width={240}
            height={600}
            priority
            className="cursor-pointer"
          />
        </Link>

        {/* Desktop Navigation */}

        <nav
          className="hidden md:flex items-center justify-evenly 
                     w-134.5 h-16.5 px-6 gap-6 
                     bg-[#F2F2F2] rounded-full text-sm  font-medium">
          {/* Discover Deals */}
          <div
            onMouseEnter={() => {
              if (clickedMenu !== "deals") {
                setShowDeals(true);
                setShowStories(false);
              }
            }}
            onMouseLeave={() => {
              if (clickedMenu !== "deals") {
                setShowDeals(false);
              }
            }}>
            <button
              onClick={() => {
                const newState = !(showDeals && clickedMenu === "deals");
                setShowDeals(newState);
                setShowStories(false);
                setClickedMenu(newState ? "deals" : null);
              }}
              className="flex items-center gap-1 hover:text-blue-900 transition">
              Home
            </button>
          </div>

          {/* Stories */}
          <div
            onMouseEnter={() => {
              if (clickedMenu !== "stories") {
                setShowStories(true);
                setShowDeals(false);
              }
            }}
            onMouseLeave={() => {
              if (clickedMenu !== "stories") {
                setShowStories(false);
              }
            }}>
            <button
              onClick={() => {
                const newState = !(showStories && clickedMenu === "stories");
                setShowStories(newState);
                setShowDeals(false);
                setClickedMenu(newState ? "stories" : null);
              }}
              className="flex items-center gap-1  transition">
              About Us <ChevronDown size={16} />
            </button>
          </div>

          <a href="/#projects" className=" transition">
            Projects and Other Services{" "}
          </a>
          <a href="/#contact" className=" transition">
            Contact Us{" "}
          </a>
        </nav>

        {/* Join Us Button (desktop only) */}
        <button
          className="hidden md:flex items-center justify-center w-[221px] h-[58px] px-6 gap-3 
                     bg-[#0A1816] text-white rounded-full text-base font-medium transition">
          <span>Make an Enquiry</span>
          <ArrowRight size={18} />
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center text-gray-700"
          onClick={() => {
            setMobileMenuOpen(!mobileMenuOpen);
            setShowDeals(false);
            setShowStories(false);
            setClickedMenu(null);
          }}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col px-6 py-4 md:hidden z-40">
          {!showDeals && !showStories && (
            <>
              <button className="flex items-center justify-between w-full py-2 relative">
                Home{" "}
              </button>

              <a href="/#projects" className="w-full py-2">
                Projects and other services
              </a>

              <button
                onClick={() => setShowMobileStories((prev) => !prev)}
                className="flex items-center justify-between w-full py-2 relative">
                About Us
                <ChevronDown size={16} />
                {showMobileStories && (
                  <div className="w-full h-45 shadow  bg-white z-10 text-left absolute top-10 left-0 py-3 flex flex-col gap-1">
                    <a href="/#about">
                      <div className=" border-gray-300 p-2 border-b w-full text-[16px] font-thin text-black">
                        About Us{" "}
                      </div>
                    </a>

                    <a href="/#team">
                      <div className=" border-gray-300 border-b p-2 w-full text-[16px] font-thin text-black">
                        Our Team{" "}
                      </div>
                    </a>
                    <a href="/#projects">
                      <div className=" border-gray-300 border-b p-2 w-full text-[16px] font-thin text-black">
                        Our Projects{" "}
                      </div>
                    </a>
                  </div>
                )}
              </button>

              <a href="/#contact" className="w-full py-2">
                Contact Us{" "}
              </a>

              {/* CTA */}
              <button
                className="mt-4 flex items-center justify-center w-full h-[50px] gap-3 
                          bg-[#0A1816] text-white rounded-full text-base font-medium transition">
                <span>Make an Enquiry</span>
                <ArrowRight size={18} />
              </button>
            </>
          )}

          {showStories && (
            <div>
              <button
                onClick={() => setShowStories(false)}
                className="flex items-center gap-2 mb-4 text-blue-900">
                ← Back
              </button>
              <AboutUs setShowStories={setShowStories} />
            </div>
          )}
        </div>
      )}

      {showStories && !mobileMenuOpen && (
        <div className="absolute top-[130px] left-0 w-full z-60">
          <AboutUs setShowStories={setShowStories} />
        </div>
      )}
    </div>
  );
}
