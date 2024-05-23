import React from "react";
import { Button } from "./Button";
import {
  ButtonFill,
  ButtonGroupContextBag,
  ButtonGroupRootType,
  ButtonGroupType,
} from "./types";

const ButtonGroupContext = React.createContext<ButtonGroupContextBag>({
  select: () => {},
  isSelected: () => false,
});

const ButtonGroupContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [selectedNode, setSelectedNode] = React.useState<React.ReactNode>();

  const select = (node: React.ReactNode) => {
    setSelectedNode(node);
  };

  const isSelected = (node: React.ReactNode) => {
    return selectedNode === node;
  };

  return (
    <ButtonGroupContext.Provider value={{ select, isSelected }}>
      {children}
    </ButtonGroupContext.Provider>
  );
};

/**
 * Stylized Button element
 */
export const ButtonGroup: ButtonGroupRootType = ({
  type = ButtonGroupType.RADIO,
  children,
}) => {
  return (
    <ButtonGroupContextProvider>
      <div>{children}</div>
    </ButtonGroupContextProvider>
  );
};

ButtonGroup.Button = ({ children }) => {
  const { select, isSelected } = React.useContext(ButtonGroupContext);
  const fill = isSelected(this) ? ButtonFill.FILLED : ButtonFill.NONE;

  const handleClick = () => {
    select(this);
  };

  return (
    <Button fill={fill} onClick={handleClick}>
      {children}
    </Button>
  );
};
