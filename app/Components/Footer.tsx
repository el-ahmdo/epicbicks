import React from "react";
import Image from "next/image";
import Link from "next/link";
import linkedin from "../../public//assets/logos_linkedin.svg";
import twitter from "../../public/assets/logos_twitter.svg";
import facebook from "../../public/assets/logos_facebook.svg";
import instagram from "../../public/assets/logos_instagram.svg";
import youtube from "../../public/assets/logos_youtube.svg";
import logo from "../../public/assets/Images/Logo.svg";

const Footer = () => {
  return (
    <footer className="bg-[#ffffff] text-gray-800 px-6 py-12 md:px-24 lg:px-32">
      {/* Main Footer Content */}
      <div className="flex flex-col md:grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-[28.3%_13.1%_20.6%_31%]">
        {/* Logo & Description */}
        <div className="flex flex-col items-start md:items-start md:text-left">
          <div className="flex justify-center">
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2">
              <Image src={logo} alt="LinkedIn" width={80} height={50} />
              <h3 className="text-lg font-semibold mb-0">Epic Bricks</h3>
            </Link>
          </div>

          <div className="font-light">
            <p className="text-sm max-w-xs not-italic">
              Together, we’re creating opportunities, empowering lives, and
              making a difference—one brick at a time.
            </p>

            <p className="text-sm mt-4 ">No 24, Road G, Malali New Extension</p>
            <p className="text-sm mt-1">+2348139414056</p>
            <p className="text-sm  mt-1">@gmail.com</p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4 mt-4 items-center">
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer">
              <Image src={linkedin} alt="LinkedIn" width={24} height={24} />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer">
              <Image src={twitter} alt="Twitter" width={24} height={24} />
            </Link>
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer">
              <Image src={facebook} alt="Facebook" width={24} height={24} />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer">
              <Image src={instagram} alt="Instagram" width={24} height={24} />
            </Link>
            <Link
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer">
              <Image src={youtube} alt="YouTube" width={24} height={24} />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-start md:items-start">
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/aboutUs" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/getHelp" className="hover:underline">
                Get Help
              </Link>
            </li>
            <li>
              <Link href="/donate" className="hover:underline">
                Donate
              </Link>
            </li>
            <li></li>
            <li></li>
          </ul>
        </div>

        {/* Subscription Packages */}
        <div className="flex flex-col items-start md:items-start">
          <h3 className="text-lg font-semibold mb-4">Subscription Packages</h3>
          <ul className="space-y-2 text-sm">
            <li>Gold Package</li>
            <li>Silver Package</li>
            <li>Bronze Package</li>
          </ul>
        </div>

        {/* Benefit Packages */}
        <div className="flex flex-col items-start md:items-start">
          <h3 className="text-lg font-semibold mb-4">Benefit Packages</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5 text-sm font-medium">
            <li>
              <Link href="/about" className="hover:underline">
                Housing Support
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:underline">
                Financial Aid
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:underline">
                Corporate Support
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Transport Support
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Energy Support
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Mental Health Counseling
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                Social events and programs
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:underline">
                Hospitality Support
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:underline">
                Military Benefits
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Education & Skills Training
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Legal Aid
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Volunteer Support
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-12 border-t border-gray-300 pt-6 text-sm font-medium text-center">
        <ul className="flex flex-nowrap gap-2 md:gap-4 mb-4 md:mb-0 overflow-x-auto  ">
          <li>
            <Link href="/contact" className="hover:underline">
              Terms of Service
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              Cookies Policy
            </Link>
          </li>
          <li>
            <Link href="/admin/login" className="hover:underline">
              Login as Admin
            </Link>
          </li>
        </ul>

        <p className="flex">
          © {new Date().getFullYear()} Veteran Connect. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
