import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main style={{ marginTop: "16px", minHeight: "calc(100vh - 72px)" }}>
        {children}
      </main>
      <Footer />
    </>
  );
}
