"use client";
import { InfiniteMovingCardsDemo } from "./testimonialsmotiona";
import SectionHeading from "./section-heading";

const testimonials = [
  {
    name: "Miracline J.",
    avatar: "J",
    title: "Software Engineer",
    description: "This is the best application I've ever used!",
  },
  {
    name: "Selena A.",
    avatar: "A",
    title: "Designer",
    description: "I use this daily for scoring better marks",
  },
  {
    name: "Charlton D.",
    avatar: "M",
    title: "CEO",
    description:
      "This app has changed my life, cannot imagine working without it!",
  },
  {
    name: "Atharva M.",
    avatar: "M",
    title: "CFO",
    description:
      "The best in class, definitely worth the premium subscription!",
  },
];

const counter = [
  {
    name: "Miracline J.",
    avatar: "J",
    title: "Software Engineer",
    description: "This is the best application I've ever used!",
  },
  {
    name: "Selena A.",
    avatar: "A",
    title: "Designer",
    description: "I use this daily for generating new photos!",
  },
  {
    name: "Charlton D.",
    avatar: "M",
    title: "CEO",
    description:
      "This app has changed my life, cannot imagine working without it!",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20 bg-white dark:bg-black mt-20 ">
      <h2 className="text-3xl font-medium capitalize text-center">
      <SectionHeading>Testimonials</SectionHeading>
      </h2>

      <InfiniteMovingCardsDemo/>
    
    </div>

  );
};
