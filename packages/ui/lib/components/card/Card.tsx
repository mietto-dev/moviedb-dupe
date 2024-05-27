import * as React from "react";
import {
  Article,
  Body,
  Footer,
  Header,
  ImageWrapper,
  Layout,
  LayoutWrapper,
} from "./styled";
import {
  CardBarType,
  CardBodyType,
  CardLooseContentType,
  CardType,
} from "./types";

/**
 * Flexible Card element
 */
export const Card: CardType = ({ children, onClick, coverImage }) => {
  // assign any element not inside a Body, Header or Footer to a default Body
  const { losen, header, footer, body } = React.Children.toArray(
    children
  ).reduce(
    (prev, curr) => {
      const element = curr as CardLooseContentType;
      const {
        losen: currLosen,
        header: currHeader,
        footer: currFooter,
        body: currBody,
      } = prev;
      const elName = (element.type && element.type.name) || "";

      switch (elName) {
        case "CardBody":
          currBody.push(curr);
          break;
        case "CardFooter":
          currFooter.push(curr);
          break;
        case "CardHeader":
          currHeader.push(curr);
          break;
        default:
          currLosen.push(curr);
          break;
      }

      return {
        losen: currLosen,
        header: currHeader,
        footer: currFooter,
        body: currBody,
      };
    },
    {
      losen: new Array<React.ReactNode>(),
      header: new Array<React.ReactNode>(),
      footer: new Array<React.ReactNode>(),
      body: new Array<React.ReactNode>(),
    }
  );

  const clickHandler: React.MouseEventHandler<HTMLDivElement> = (ev) => {
    ev.preventDefault();
    ev.stopPropagation();
    console.log("CARD CLICKED");
    !!onClick && onClick(ev);
  };

  return (
    <Article $clickable={!!onClick} onClick={clickHandler}>
      {coverImage && (
        <ImageWrapper>
          <img src={coverImage} className="object-contain" />
        </ImageWrapper>
      )}
      <LayoutWrapper>
        <Layout $overlayContent={Boolean(coverImage)}>
          {header}
          {losen.length > 0 ? <Card.Body>{losen}</Card.Body> : body}
          {footer}
        </Layout>
      </LayoutWrapper>
    </Article>
  );
};

const CardBody: CardBodyType = ({ children }) => {
  return <Body>{children}</Body>;
};

const CardFooter: CardBarType = ({ children, onClick, negative = false }) => {
  const clickHandler: React.MouseEventHandler<HTMLDivElement> = (ev) => {
    ev.preventDefault();
    ev.stopPropagation();
    console.log("FOOTER CLICKED");
    !!onClick && onClick(ev);
  };

  return (
    <Footer $negative={negative} $clickable={!!onClick} onClick={clickHandler}>
      {children}
    </Footer>
  );
};

const CardHeader: CardBarType = ({ children, onClick, negative = true }) => {
  const clickHandler: React.MouseEventHandler<HTMLDivElement> = (ev) => {
    ev.preventDefault();
    ev.stopPropagation();
    console.log("HEADER CLICKED");
    !!onClick && onClick(ev);
  };

  return (
    <Header $negative={negative} $clickable={!!onClick} onClick={clickHandler}>
      {children}
    </Header>
  );
};

Card.Body = CardBody;
Card.Footer = CardFooter;
Card.Header = CardHeader;
