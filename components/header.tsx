"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Container } from "@/components/container";
import Logo from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { LayoutToggle } from "@/components/layout-toggle";
import { cn } from "@/lib/utils";
import { AUTH_DIR } from "@/lib/constants";

export function Header({ className }: { className?: string }) {
  return (
    <header
      className={cn(
        "bg-background/60 sticky top-0 z-50 w-full border-b border-dashed backdrop-blur-sm",
        className,
      )}
    >
      <Container>
        <div className="flex w-full flex-col items-center justify-between gap-4 py-3.5 md:flex-row">
          <div className="flex w-full">
            <Logo />
            <div className="ml-auto items-center gap-2 sm:flex sm:flex-1 sm:justify-end">
              <div className="mr-4 ml-auto flex items-center space-x-2 sm:m-0">
                <Button variant={"outline"} asChild className="hidden sm:flex">
                  <Link href={AUTH_DIR + "/sign-in"}>Sign In</Link>
                </Button>
              </div>
              <Separator
                orientation="vertical"
                className="3xl:flex ml-2 hidden data-[orientation=vertical]:h-4"
              />
              <LayoutToggle className="3xl:flex hidden" />
              <Separator
                orientation="vertical"
                className="3xl:flex hidden data-[orientation=vertical]:h-4"
              />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
