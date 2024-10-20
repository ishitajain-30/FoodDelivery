import Image from "next/image";
import { Button } from "@/components/ui/button";
import about from "../images/About.png";

export default function AboutSection() {
  return (
    <section className="w-full h-[467px] bg-blue-100">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-48">
          <div className="hidden sm:flex justify-center lg:justify-end">
            <Image
              alt="Company Image"
              className="aspect-[3/4] overflow-hidden object-cover object-center h-[467px]"
              src={about}
            />
          </div>
          <div className="h-[467px] space-y-4 flex flex-col items-center justify-center sm:items-start ">
            <h2 className="text-2xl tracking-tighter text-[#0E2368] sm:text-4xl md:text-5xl font-heading font-semibold">
              About Us
            </h2>
            <p className="max-w-[400px] font-sans font-normal text-[#444957] md:text-base/relaxed  md:justify-center lg: justify-center xl:justify-center lg:text-sm/relaxed xl:text-base/relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. t has survived
              not only five centuries.
            </p>
            <div>
              <Button
                size="lg"
                className="bg-red-500 hover:bg-red-600 rounded-3xl w-[1/4]"
              >
                Read More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
