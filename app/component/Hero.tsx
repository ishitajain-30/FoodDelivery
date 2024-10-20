import Image from "next/image";
import { Button } from "@/components/ui/button";
import banner from "../images/Banner.png";

export default function AboutSection() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
        <div className="sm:order-last">
          <Image src={banner} alt="Delicious Pizza" />
        </div>

        <div className="flex flex-col w-3/4 sm:w-full justify-center ml-20 gap-10 ">
          <h1 className="text-4xl md:w-1/2 md:text-5xl lg:text-6xl font-bold font-subheading text-[#0E2368]">
            Discover the <span className="text-[#E23744]">Best</span> Food and
            Drinks
          </h1>
          <p className="text-[#444957] text-lg max-w-md">
            Naturally made Healthcare Products for the better care & support of
            your body.
          </p>
          <div>
            <Button className="bg-[#E23744] hover:bg-[#c52f3a] text-white font-semibold px-8 py-4 rounded-full text-xl">
              Explore Now!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
