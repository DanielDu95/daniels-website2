"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { FlipText } from "./ui/flip-text";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative pt-32 group/card bg-gray-50 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <div className="h-40 w-40"></div>
        <CardItem
          translateZ="100"
          className="absolute -top-24 left-1/2 -translate-x-1/2 "
        >
          <img
            src="images/hero.jpg"
            height="240"
            width="240"
            className="w-60 h-60  rounded-full  shadow-xl object-cover object-top"
            alt="thumbnail"
          />
        </CardItem>

        <CardItem
          translateZ="50"
          as="h1"
          className="text-5xl px-5 font-bold text-neutral-600 dark:text-white py-3"
        >
          <FlipText>Hi, I&apos;m Daniel Du</FlipText>
        </CardItem>

        <CardItem
          translateZ="40"
          as="h2"
          className="text-3xl px-5 text-primary-500 py-3"
        >
          Full Stack Developer
        </CardItem>

        <CardItem
          as="p"
          translateZ="30"
          className="py-3 px-5 text-neutral-500 text-md text-left text-xl dark:text-neutral-300"
        >
          I build fast, modern web applications using React, TypeScript,
          Node.js, and PostgreSQL. My focus is on clean architecture, strong
          performance, and great user experiences.
        </CardItem>

        <div className="flex justify-center space-x-4 mt-6">
          <CardItem translateZ={20}>
            <Button>
              <a href="#projects">View Projects</a>
            </Button>
          </CardItem>
          <CardItem translateZ={20}>
            <Button variant="outline">
              <Link href="mailto:danieldu1131@gmail.com">Contact Me</Link>
            </Button>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
