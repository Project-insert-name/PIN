import Head from "next/head";
import Header from "../components/header";
import Hero from "../components/hero";
import Info from "../components/info";
import Tilbud from "../components/tilbud";
import FAQ from "../components/faq";

const MainRoot = () => {
  
  return (
    <>
      <Head>
        <style>{`
          * {
            font-family: "Inter", sans-serif !important;
          }
         `}</style>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Montserrat:ital,wght@0,400;0,600;0,700;1,700&family=Poppins:wght@400;600;700&display=swap" />
        <title>{"<PIN/>"}</title>
       </Head>
      <Header/>
      <Hero />
      <Info/>
      <Tilbud/>
      <FAQ/>
    </>
  );
};

export default MainRoot;
