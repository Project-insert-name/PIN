import Head from "next/head";
import Header from "../components/header";
import Hero from "../components/hero";
import Info from "../components/info";
import Tilbud from "../components/tilbud";
import FAQ from "../components/faq";
import Contact from "../components/contact";


const MainRoot = () => {
  
  return (
    <>
      <Head>
        <title>{"<PIN/>"}</title>
      </Head>
      <Header/>
      <Hero />
      <Info/>
      <Tilbud/>
      <FAQ/>
      <Contact/>
    </>
  );
};

export default MainRoot;
