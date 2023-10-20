import React, { useEffect } from "react";
import Head from 'next/head'
import '@/styles/globals.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/styles.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "@/components/header/Header";

export default function App({Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
    AOS.init({ duration : 1000});
    }, []);
  return (
    <>
        <Head>
        <title>BAE</title>
        <meta name="description" content="bae" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.png" /> */}
      </Head>
      <Header />
      <ToastContainer position="bottom-right" autoClose={2000} />
      <Component {...pageProps} />
    </>
  );
}
