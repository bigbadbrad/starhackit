import React, { createElement as h } from "react";
import { observer } from "mobx-react";
import navBar from "components/navbar";
import footer from "components/footer";
import MainView from "components/MainView";
import authBar from "components/authBar"

export default context => {
  const {
    alertStack: { View: AlertStack },
  } = context;

  const NavBar = navBar(context);
  const Footer = footer(context);
  const AuthBar = authBar(context);

  const Layout = ({ children }) => (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        minWidth: "100vw",
        flexDirection: "column"
      }}
    >
      <NavBar right={AuthBar}/>
      <MainView>{children}</MainView>
      <Footer />
      <AlertStack />
    </div>
  );

  return ({ children }) =>
    h(observer(Layout), {
      children
    });
};
