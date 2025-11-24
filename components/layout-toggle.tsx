"use client";

import * as React from "react";
import { GalleryHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLayout } from "@/hooks/use-layout";

interface Props {
  className?: string;
}

export const LayoutToggle: React.FC<Props> = ({ className }) => {
  const { layout, setLayout } = useLayout();

  return (
    <Button
      className={className}
      variant="ghost"
      size="icon"
      onClick={() => {
        const newLayout = layout === "fixed" ? "full" : "fixed";
        setLayout(newLayout);
      }}
      title="Toggle layout"
    >
      <span className="sr-only">Toggle layout</span>
      <GalleryHorizontal />
    </Button>
  );
};
