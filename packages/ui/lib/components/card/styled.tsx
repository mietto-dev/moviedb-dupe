import { compose } from "tailwind-compose";

export const Article = compose.article((conditional) => [
  "relative",
  "min-w-36",
  "w-36",
  "min-h-52",
  "h-auto",
  "overflow-hidden",
  "border",
  "rounded-md",
  "border-gray-300",
  "bg-white",
  "shadow",
  conditional("cursor-pointer", ({ $clickable }) => $clickable),
]);

export const FullWrapper = compose.div(() => ["absolute", "w-full", "h-full"]);

export const Layout = compose.div((conditional) => [
  "grid",
  "grid-flow-col",
  "w-full",
  "h-full",
  "max-h-full",
  conditional("bg-black", ({ $overlayContent }) => $overlayContent),
  conditional("bg-opacity-20", ({ $overlayContent }) => $overlayContent),
  conditional("text-white", ({ $overlayContent }) => $overlayContent),
  conditional("font-semibold", ({ $overlayContent }) => $overlayContent),
]);

export const Body = compose.div(() => ["px-3", "py-3", "text-sm"]);

export const Header = compose.div((conditional) => [
  "h-fit",
  "max-h-fit",
  "w-full",
  "self-start",
  "px-3",
  "py-2",
  "font-semibold",
  conditional("bg-black", ({ $negative }) => $negative),
  conditional("text-white", ({ $negative }) => $negative),
  conditional("bg-white", ({ $negative }) => $negative === false),
  conditional("text-black", ({ $negative }) => $negative === false),
  conditional("cursor-pointer", ({ $clickable }) => $clickable),
]);

export const Footer = compose.div((conditional) => [
  "h-fit",
  "max-h-fit",
  "w-full",
  "self-end",
  "px-3",
  "py-2",
  conditional("bg-black", ({ $negative }) => $negative),
  conditional("text-white", ({ $negative }) => $negative),
  conditional("bg-white", ({ $negative }) => $negative === false),
  conditional("text-black", ({ $negative }) => $negative === false),
  conditional("cursor-pointer", ({ $clickable }) => $clickable),
]);
