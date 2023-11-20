import React from "react";
import "../styles/globals.css";
import { Layout } from "../components";
import Head from "next/head";
import { StateContext } from "../context/StateContext";
import { Toaster } from "react-hot-toast";

const MyApp = ({ Component, pageProps }) => {
  return (
    <StateContext>
      <Layout>
        <Head>
          <title>Ecommerce Store</title>
          <link rel='icon' href='/favicon.ico' sizes='any' />
        </Head>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
};

export default MyApp;
