"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <section id="hero" className="text-center space-y-6 w-full">
          <CardItem translateZ="100" className="w-full mt-4">
            <img
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>

          <CardItem
            translateZ="50"
            as="h1"
            className="text-5xl font-bold text-neutral-600 dark:text-white"
          >
            Hi, I&apos;m Daniel Du
          </CardItem>

          <CardItem
            translateZ="40"
            as="h2"
            className="text-2xl text-primary-500"
          >
            Full Stack Developer
          </CardItem>

          <CardItem
            as="p"
            translateZ="30"
            className="text-neutral-500 text-sm max-w-sm mx-auto dark:text-neutral-300"
          >
            I build modern, performant web applications with React, TypeScript,
            Node.js, and PostgreSQL.
          </CardItem>

          <div className="flex justify-center space-x-4 mt-6">
            <CardItem translateZ={20} asChild>
              <Button asChild>
                <Link href="/projects">View Projects</Link>
              </Button>
            </CardItem>
            <CardItem translateZ={20} asChild>
              <Button variant="outline" asChild>
                <Link href="/contact">Contact Me</Link>
              </Button>
            </CardItem>
          </div>
        </section>
      </CardBody>
    </CardContainer>
  );
}
