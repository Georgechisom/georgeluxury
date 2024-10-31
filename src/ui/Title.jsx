import { twMerge } from "tailwind-merge";


const Title = ({ text, className } = {text: string, className: string}) => {
  const newClassName = twMerge("font-bold text-skyText text-3xl md:text-4xl", className);
  return <h2 className={newClassName}>{text}</h2>;
};

export default Title;