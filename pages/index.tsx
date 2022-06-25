import { motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
const mainAni = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};
const headingAni = {
  hidden: {
    scale: 0.8,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
  },
  exit: {
    x: -50,
    opacity: 0,
  },
};
const buttonAni = {
  hidden: {
    scale: 0.8,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
  },
  exit: {
    x: -50,
    opacity: 0,
  },
};

const Home: NextPage = () => {
  return (
    <motion.div
      className={`flex h-screen w-screen overflow-hidden`}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={mainAni}
    >
      <Head>
        <title>Gorskis køreskole</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col md:w-2/3 gap-5 md:h-full justify-center md:px-20">
        <motion.h1
          className="text-black text-4xl uppercase font-black text-center md:text-left"
          variants={headingAni}
          transition={{
            type: "tween",
          }}
        >
          Gorskis køreskole - siden 1996
        </motion.h1>
        <div className="flex flex-col md:flex-row justify-center md:justify-start md:gap-4 items-center ">
          <Link href="/kontakt">
            <motion.a
              variants={buttonAni}
              transition={{
                type: "tween",
                delay: 0.3,
              }}
              className="text-white 
              bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900 cursor-pointer"
            >
              Kom i gang
            </motion.a>
          </Link>
          <Link href="/priser">
            <motion.a
              variants={buttonAni}
              transition={{
                type: "tween",
                delay: 0.3,
              }}
              className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900 cursor-pointer"
            >
              Se pakker
            </motion.a>
          </Link>
        </div>
      </div>
      {/* <Script
        src={`https://maps.googleapis.com/maps/api/js?key${process.env.YOUR_API_KEY}&libraries=geometry&callback=initMap`}
        strategy="lazyOnload"
      /> */}
    </motion.div>
  );
};

export default Home;
