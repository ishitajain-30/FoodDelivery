"use client";
import * as React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import img1 from "../images/Article1.png";
import img2 from "../images/Article2.png";
import img3 from "../images/Article3.png";
import img4 from "../images/Article4.png";
import img5 from "../images/Article5.png";
import img6 from "../images/Article6.png";

const articles = [
  {
    title: "Grilled Tomatoes at Home",
    image: img1,
    description:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
  },
  {
    title: "Snacks for Travel",
    image: img2,
    description:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
  },
  {
    title: "Post-workout Recipes",
    image: img3,
    description:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
  },
  {
    title: "How to Grill Fish",
    image: img4,
    description:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
  },
  {
    title: "Crunchy Salad Ideas",
    image: img5,
    description:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
  },
  {
    title: "Quick Breakfast Bowls",
    image: img6,
    description:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
  },
];

export default function LatestArticles() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-5xl font-bold mb-8 font-subheading text-[#0E2368]">
        Latest Articles
      </h2>
      <Carousel className="w-full" opts={{ loop: true }} setApi={setApi}>
        <CarouselContent>
          {Array.from({ length: Math.ceil(articles.length / 3) }).map(
            (_, index) => (
              <CarouselItem key={index}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {articles
                    .slice(index * 3, index * 3 + 3)
                    .map((article, articleIndex) => (
                      <Card key={articleIndex} className="flex flex-col ">
                        <CardHeader className="p-5 self-center">
                          <Image
                            src={article.image}
                            alt={article.title}
                            width={260}
                            height={200}
                            className="h-48 object-cover rounded-lg"
                          />
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <CardTitle className="text-lg font-bold mb-2">
                            {article.title}
                          </CardTitle>
                          <p className="text-muted-foreground ">
                            {article.description}
                          </p>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline" className="rounded-full">
                            Read More
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </CarouselItem>
            )
          )}
        </CarouselContent>
        <div className="hidden sm:flex md:flex items-center justify-center mt-8 space-x-2">
          <CarouselPrevious variant="outline" />
          <span className="text-sm text-muted-foreground">
            {current} / {count}
          </span>
          <CarouselNext variant="outline" />
        </div>
      </Carousel>
    </div>
  );
}
