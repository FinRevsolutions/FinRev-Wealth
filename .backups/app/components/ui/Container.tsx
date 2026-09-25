import { type HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  as?: "div" | "section" | "article" | "main";
}

export function Container({
  as: Tag = "div",
  className = "",
  children,
  ...props
}: ContainerProps) {
  return (
    <Tag
      className={[
        "container-page", // max-w-7xl mx-auto px-page-x from globals.css
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </Tag>
  );
}
