"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

interface AppProvidersProps {
  children: ReactNode;
}

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <TooltipProvider>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
        <Toaster />
        <Sonner />
      </TooltipProvider>
    </ThemeProvider>
  );
}
