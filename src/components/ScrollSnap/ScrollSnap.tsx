import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
const ScrollSnap = ({ children }: any) => {
  return (
    <ScrollArea className="bg-black rounded-md border p-4 h-screen w-full">
      {children}
    </ScrollArea>
  );
};

export default ScrollSnap;
