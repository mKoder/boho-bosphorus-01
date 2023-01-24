import * as React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./all.sass";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";

const h1Class = "has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen";

const TemplateWrapper = ({ children, pageTitle }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/og-image.jpg`}
        />
      </Helmet>
      <h1
        className={h1Class}
        style={{
          backgroundColor: "rgb(28, 27, 26, 0.9)",
          color: "#dedede",
          lineHeight: "1",
          padding: "0.25em 1.25em 0.25em 1.25em",
          // transform: `${h1Transform}`,
          zIndex: "31",
          transform: "rotate(-90deg) translate(-100%, 0)",
          transformOrigin: "left top",
          position: "absolute",
          whiteSpace: "nowrap"
        }}
      >
        {pageTitle}
      </h1>
      <Navbar />
      <div>{children}</div>
    </div>
  );
};

export default TemplateWrapper;
