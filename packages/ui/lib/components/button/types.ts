export enum ButtonSize {
  SMALL,
  MEDIUM,
  LARGE,
}

export enum ButtonFill {
  OUTLINED,
  FILLED,
  NONE,
}

export enum ButtonGroupType {
  RADIO,
}

export type ButtonProps = React.PropsWithChildren &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    size?: ButtonSize;
    fill?: ButtonFill;
  };

export type ButtonGroupProps = React.PropsWithChildren & {
  type?: ButtonGroupType;
};

export type ButtonGroupRootType = React.FC<ButtonGroupProps> & {
  Button: React.ElementType;
};

export type ButtonGroupContextBag = {
  select: (node: React.ReactNode) => void;
  isSelected: (node: React.ReactNode) => boolean;
};
