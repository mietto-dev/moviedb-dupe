export type CardProps = React.PropsWithChildren & {
  // TODO stop propagation to child elements
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  coverImage?: string;
  headerText?: string;
  footerText?: string;
};

export type CardImageProps = {
  src: string;
  alt?: string;
};

export type CardBarProps = React.PropsWithChildren & {
  // TODO stop propagation to parent
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  negative?: boolean;
};

export type CardType = React.FC<CardProps> & {
  Header: CardBarType;
  Body: React.FC<React.PropsWithChildren>;
  Footer: CardBarType;
};

// All elements that are not Card.Body, Card.Header, Card.Footer
export type CardLooseContentType =
  | React.ReactElement<CardBarProps, CardBodyType>
  | React.ReactElement<React.PropsWithChildren, CardBodyType>;

export type CardBarType = React.FC<CardBarProps>;

export type CardBodyType = React.FC<React.PropsWithChildren>;
