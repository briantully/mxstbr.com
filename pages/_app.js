import React from "react";
import App, { Container } from "next/app";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import reset from "styled-reset";
import { Box } from "rebass";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Head from "../components/Head";

const colors = {
  blue: "#3867d6",
  greys: ["#EEE", "#BBB", "#999", "#666"],
  white: "#FFF",
  black: "#000"
};

const theme = {
  colors: {
    primary: colors.blue,
    text: colors.black,
    secondaryText: colors.greys[4],
    ...colors
  },
  fonts: {
    system: [
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Helvetica",
      "Arial",
      "sans-serif",
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol"
    ],
    serif: ["Georgia", "serif"]
  }
};

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    background-color: rgb(246, 247, 248);
    margin: 0;
  }
`;

const NAV_HEIGHT = 65;

const DEFAULT_TITLE = "Max Stoiber (@mxstbr) - JavaScript Engineer";
const DEFAULT_DESCRIPTION =
  "Creator of styled-components, react-boilerplate, micro-analytics and dozens of other open source projects in the React and Node ecosystems. Probably brewing speciality coffee beverages, travelling around the world or skiing double black diamond ◆◆ slopes right now.";
const DEFAULT_IMAGE = "/static/images/social_media.png";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <ThemeProvider theme={theme}>
          <>
            <Nav />
            <Head
              title={DEFAULT_TITLE}
              description={DEFAULT_DESCRIPTION}
              image={DEFAULT_IMAGE}
            />
            <Layout css={{ paddingTop: `${NAV_HEIGHT}px` }}>
              <GlobalStyle />
              <Component {...pageProps} />
            </Layout>
            <Footer />
          </>
        </ThemeProvider>
      </Container>
    );
  }
}
