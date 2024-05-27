export type TypographyProps = React.PropsWithChildren & {
  size?: TypographySize;
};

export enum TypographySize {
  SMALL,
  MEDIUM,
  LARGE,
  LARGEST,
}
