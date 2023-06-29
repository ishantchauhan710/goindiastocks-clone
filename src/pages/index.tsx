import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import NavBar from "@/components/NavBar";
import PopularStocksBar from "@/components/PopularStocksBar";
import FeaturedCompanies from "@/components/FeaturedCompanies";
import MainBody from "@/components/MainBody";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Go India Stocks</title>
        <meta name="description" content="Created by Ishant" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavBar />
        <PopularStocksBar />
        <FeaturedCompanies />
        <MainBody />
      </main>
    </>
  );
}
