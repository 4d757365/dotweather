"use client";

import Box from "@/components/Box";
import { useTheme } from "next-themes";
import { DotLoader } from "react-spinners";

const Loading = ({}) => {
  const { theme, setTheme } = useTheme();
  const color = theme === "dark" ? "white" : "black";
  // 2563eb
  return (
    <div className="flex flex-1 h-96 items-center justify-center">
      <DotLoader color={color} size={40} className="" />
    </div>
  );
};

export default Loading;
