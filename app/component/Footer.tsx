import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
import logo from "../images/Logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#F8F8F8] border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex items-center justify-center md:justify-center">
            <Image src={logo} alt="Delicious Pizza" width={150} height={150} />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#0E2368]">
              Contact Us
            </h3>
            <address className="not-italic text-[#646874]">
              <p>Lorem Ipsum Pvt Ltd.5/1, Magalton</p>
              <p>Road, Phartosh Gate near YTM</p>
              <p>Market, XYZ-343434</p>
              <p className="mt-2">example2020@gmail.com</p>
              <p>(904) 443-0343</p>
            </address>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#0E2368]">More</h3>
            <ul className="space-y-2 text-[#646874]">
              <li>
                <Link href="/" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  Career
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="hidden sm:block md:block lg:block">
            <h3 className="text-lg font-semibold mb-4 text-[#0E2368]">
              Social Links
            </h3>
            <div className="flex space-x-4 ">
              <Link
                href="https://www.instagram.com"
                className="hover:text-primary"
              >
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://www.twitter.com"
                className="hover:text-primary"
              >
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://www.facebook.com"
                className="hover:text-primary"
              >
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col self-center text-center md:text-right space-y-4">
          <p className="text-sm text-gray-500 items-end pr-10">
            © 2022 Food Truck Example
          </p>
          <div className="sm:hidden md:hidden">
            <div className="flex space-x-4 justify-center ">
              <Link
                href="https://www.instagram.com"
                className="hover:text-primary"
              >
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://www.twitter.com"
                className="hover:text-primary"
              >
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://www.facebook.com"
                className="hover:text-primary"
              >
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
