// TODO: SHOULD MOVE TO NEXT APP

import React from "react";
import { compose } from "tailwind-compose";
import { ButtonFill, ButtonProps, ButtonSize } from "./types";

/**
 * Displays a movie's card, including:
 * - Full picture on card's body
 * - Title and release date outside the card
 * - Popularity gauge
 * */
export const MovieCard: React.FC<ButtonProps> = ({
  size = ButtonSize.MEDIUM,
  fill = ButtonFill.FILLED,
  children,
  ...props
}) => {
  const textSize =
    size === ButtonSize.SMALL
      ? "text-xs"
      : size === ButtonSize.MEDIUM
        ? "text-sm"
        : size === ButtonSize.LARGE
          ? "text-lg"
          : "text-sm";

  const StyledButton = compose.button(() => [
    "flex-none",
    "rounded-full",
    "px-4",
    "py-1.5",
    textSize,
    "font-semibold",
    "text-white",
    "shadow-sm",
    "bg-gray-900",
    "hover:bg-gray-700",
    "focus-visible:outline",
    "focus-visible:outline-2",
    "focus-visible:outline-offset-2",
    "focus-visible:outline-gray-900",
  ]);

  return (
    <StyledButton type="button" {...props}>
      {children}
    </StyledButton>
  );
};
