import { NextPage } from "next";
import Check from "../public/icons/check.svg";
import { motion } from "framer-motion";
const Priser: NextPage = () => {
  return <Pricing />;
};
const card1 = {
  title: "Lovpakken",
  sub: `Denne pakke inkluderer de timer du skal have taget, før du kan tage prøven`,
  price: "14.000 KR",
  list: [
    "Alle teorilektioner",
    "16 køretimer",
    "Glatbanekørsel",
    "Natkørsel",
    "Motorvejskørsel",
  ],
};
const card2 = {
  title: "Standard pakken",
  sub: "Best option for personal use & your next project",
  price: "18.000 KR",
  list: [
    "Alt i lovpakken inkl...",
    <span key={1}>
      Adgang til{" "}
      <a className="underline underline-offset-2" href="#">
        online teori kursus
      </a>
    </span>,
    "5 ekstra køretimer",
    "Some random text here",
  ],
};
const card3 = {
  title: "Afbetaling",
  sub: "Rentefri månedlig afbetaling - valgfri pakke",
  price: "2.000 KR",
  list: [
    "Some random text here",
    "Some random text here",
    "Some random text here",
    "Some random text here",
    "Some random text here",
  ],
};
export default Priser;

type CardProps = {
  title: string;
  sub: string;
  price: string;
  list: any[];
};
const cardAni = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    x: -100,
  },
};
const Card = (card: CardProps) => {
  return (
    <motion.div
      transition={{ type: "tween" }}
      variants={cardAni}
      className="flex h-full flex-col justify-start p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
    >
      <h3 className="mb-4 text-2xl font-semibold">{card.title}</h3>
      <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
        {card.sub}
      </p>
      <div className="flex justify-center items-baseline my-8">
        <span className="mr-2 text-5xl font-extrabold">{card.price}</span>
        <span className="text-gray-500 dark:text-gray-400">
          {card.price === "2.000 KR" ? "/month" : ""}
        </span>
      </div>

      <ul role="list" className="mb-8 space-y-4 text-left">
        {card.list.map((text, i) => (
          <li key={i} className="flex items-center space-x-3">
            <Check className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" />
            <span>{text}</span>
          </li>
        ))}
      </ul>
      <a
        href="#"
        className="text-white justify-self-end bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
      >
        Kom i gang
      </a>
    </motion.div>
  );
};
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
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    y: -40,
  },
};
const Pricing = () => {
  return (
    <motion.section
      variants={mainAni}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="bg-white dark:bg-gray-900"
    >
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <motion.h2
            variants={headingAni}
            className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
          >
            Priser og pakker
          </motion.h2>
          <motion.p
            variants={headingAni}
            className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400"
          >
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </motion.p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          <Card {...card1} />
          <Card {...card2} />
          <Card {...card3} />
        </div>
      </div>
    </motion.section>
  );
};
