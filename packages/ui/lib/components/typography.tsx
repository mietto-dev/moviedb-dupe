import * as React from "react";

type TypographyProps = React.PropsWithChildren & {
  size?: TypographySize;
};

enum TypographySize {
  SMALL,
  MEDIUM,
  LARGE,
  LARGEST,
}

/**
 * Stylized Heading element
 */
export const Heading: React.FC<TypographyProps> = ({
  size = TypographySize.MEDIUM,
  children,
}) => {
  const HeadingElement: React.ElementType =
    size === TypographySize.SMALL
      ? "h4"
      : size === TypographySize.MEDIUM
        ? "h3"
        : size === TypographySize.LARGE
          ? "h2"
          : size === TypographySize.LARGEST
            ? "h1"
            : "h3";

  return <HeadingElement>{children}</HeadingElement>;
};

/**
 * Stylized Label element
 */
export const Label: React.FC<TypographyProps> = ({
  size = TypographySize.MEDIUM,
  children,
}) => {
  return <label>{children}</label>;
};

/**
 * Stylized Paragraph element
 */
export const Text: React.FC<TypographyProps> = ({
  size = TypographySize.MEDIUM,
  children,
}) => {
  return <p>{children}</p>;
};
