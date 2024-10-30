import React from "react";
import { twMerge } from "tailwind-merge";


const Container = ({ children, className } = {children: React.ReactNode, className: String}) => {
  const newClassName = twMerge(
    "max-w-screen-xl mx-auto py-10 px-4 lg:px-0",
    className
  );
  return <div className={newClassName}>{children}</div>;
};

export default Container;