import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Products from "./Products";
import SingleProduct from "./SingleProduct";
import Cart from "./Cart";
import ErrorPage from "./ErrorPage";
import { GlobalStyle } from "./GlobalStyle"
import { ThemeProvider } from "styled-components"
import Header from "./Components/Header"
import Footer from "./Components/Footer";
const App = () => {

  const theme = {

    colors: {
      heading: "",
      text: "rgba(29 29 29 0.8)",
      white: "#fff",
      black: "#212259",
      helper: "#8490ff",
      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgba(98 84 243)",
      border: "rgba(98 84 243 0.5)",
      hr: "#ffffff",
      gradient: "linear-gradient(0deg rgba(132 144 255)0%,rgba(98 198 252) 100%)",

    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };


  return (
    <>
      <ThemeProvider theme={theme}>

        <Router>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/singleproduct/:id" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<ErrorPage />} />

          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>

    </>



  )

};

export default App;
