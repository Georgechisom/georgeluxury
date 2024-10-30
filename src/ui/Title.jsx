import { twMerge } from "tailwind-merge";


const Title = ({ text, className } = {text: string, className: string}) => {
  const newClassName = twMerge("text-4xl font-bold text-skyText", className);
  return <h2 className={newClassName}>{text}</h2>;
};

export default Title;