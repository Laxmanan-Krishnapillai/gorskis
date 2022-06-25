import { NextPage } from "next";
import { motion } from "framer-motion";
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
const formAni = {
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
const Kontakt: NextPage = () => {
  return (
    <motion.main
      variants={mainAni}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="h-[calc(100vh_-_10rem)] flex flex-col justify-center gap-10"
    >
      {" "}
      <motion.h1 variants={formAni} className="text-4xl font-black text-center">
        Kom med på næste hold
      </motion.h1>
      <motion.form
        variants={formAni}
        className="flex flex-col w-full max-w-md mx-auto px-4 py-8 h-1/2 md:h-auto md:px-10 md:py-20 bg-primary-50  rounded-lg"
      >
        <label className="mb-2" htmlFor="name">
          Navn
        </label>
        <input
          className="rounded-lg py-2 px-4 mb-4 md:mb-8 focus:border-2 outline-none focus:border-primary-700"
          id="name"
          type="text"
          placeholder="Jens Jensen"
        />
        <label className="mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="rounded-lg py-2 px-4 mb-4 md:mb-8 focus:border-2 outline-none focus:border-primary-700"
          id="email"
          type="email"
          placeholder="jens@jensensfirma.dk"
        />
        <button className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900 cursor-pointer">
          Send afsted!
        </button>{" "}
      </motion.form>
    </motion.main>
  );
};
export default Kontakt;
