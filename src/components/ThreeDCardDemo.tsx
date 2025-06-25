"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

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
            className="w-60 h-60 object-cover rounded-full  shadow-xl object-cover object-top"
            alt="thumbnail"
          />
        </CardItem>

        <CardItem
          translateZ="50"
          as="h1"
          className="text-5xl px-5 font-bold text-neutral-600 dark:text-white py-3"
        >
          Hi, I&apos;m Daniel Du
        </CardItem>

        <CardItem
          translateZ="40"
          as="h2"
          className="text-2xl px-5 text-primary-500 py-3"
        >
          Full Stack Developer
        </CardItem>

        <CardItem
          as="p"
          translateZ="30"
          className="py-3 px-5 text-neutral-500 text-md text-left dark:text-neutral-300"
        >
          I build modern, performant web applications with React, TypeScript,
          Node.js, and PostgreSQL.
        </CardItem>

        <div className="flex justify-center space-x-4 mt-6">
          <CardItem translateZ={20}>
            <Button>
              <a href="#projects">View Projects</a>
            </Button>
          </CardItem>
          <CardItem translateZ={20}>
            <Button variant="outline">
              <Link href="/contact">Contact Me</Link>
            </Button>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
