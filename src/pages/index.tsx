import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Header from "~/Conponents/Header";
import Hero from "~/Conponents/Hero";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll 
    z-0 font-inter">
      {/* Hero component */}
      <Header />
      <section id='hero' className='snap-center '>
        <Hero />
      </section>

    </div>
  );
};

export default Home;

