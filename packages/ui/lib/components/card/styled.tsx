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

export const ImageWrapper = compose.div(() => ["absolute"]);
export const LayoutWrapper = compose.div(() => [
  "absolute",
  "flex",
  "w-full",
  "h-full",
]);

export const Layout = compose.div((conditional) => [
  "flex",
  "flex-col",
  "w-full",
  "h-full",
  conditional("bg-black", ({ $overlayContent }) => $overlayContent),
  conditional("bg-opacity-20", ({ $overlayContent }) => $overlayContent),
  conditional("text-white", ({ $overlayContent }) => $overlayContent),
  conditional("font-semibold", ({ $overlayContent }) => $overlayContent),
]);

export const Body = compose.div(() => [
  "order-2",
  "grow",
  "px-2",
  "py-2",
  "sm:px-6",
]);

export const Header = compose.div((conditional) => [
  "order-1",
  "self-start",
  "w-full",
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
  "order-3",
  "self-end",
  "w-full",
  "px-3",
  "py-2",
  conditional("bg-black", ({ $negative }) => $negative),
  conditional("text-white", ({ $negative }) => $negative),
  conditional("bg-white", ({ $negative }) => $negative === false),
  conditional("text-black", ({ $negative }) => $negative === false),
  conditional("cursor-pointer", ({ $clickable }) => $clickable),
]);
