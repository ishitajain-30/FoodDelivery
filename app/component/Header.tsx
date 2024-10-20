import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import logo from "../images/Logo.png";

const Header = () => {
  return (
    <div className="relative top-3 flex justify-center">
      <div className="hidden absolute sm:block md:block lg:block left-5">
        <Image src={logo} alt="Delicious Pizza" width={100} height={100} />
      </div>
      <div className="absolute right-5 ">
        <Button
          variant="outline"
          className="border-white text-white font-semibold px-8 py-4 rounded-full text-xl"
        >
          Get in Touch
        </Button>
      </div>
    </div>
  );
};

export default Header;
