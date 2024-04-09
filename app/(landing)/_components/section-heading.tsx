import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-center text-4xl font-bold text-black dark:text-white max-[500px]:text-3xl">
      {children}
    </h2>
  );
}
