import Link from "next/link";
import React, { useState, useRef, LegacyRef } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
const listItems = [
  ["Forside", "/"],
  ["Priser", "/priser"],
  ["Teorilokale", "/teori-lokale"],
];

const DesktopNav = () => {
  const router = useRouter();
  const ulRef = useRef() as LegacyRef<HTMLUListElement>;
  return (
    <ul
      ref={ulRef}
      className="md:flex items-center justify-between w-1/5 hidden relative"
    >
      <div></div>
      {listItems.map(([title, href]) => (
        <li className="" key={title}>
          <Link href={href}>
            <a>{title}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};
const divDisappear = {
  normal: {
    x: 0,
    opacity: 1,
  },
  hidden: {
    x: -40,
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};
const divRotate = {
  normal: {
    rotate: 0,
    y: 0,
  },
  animate: (n: number) => ({
    rotate: n * 45,
    y: n * 16,
  }),
};
const ulAni = {
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
    transitionEnd: {
      display: "none",
    },
  },
  visible: {
    display: "flex",
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};
const liAni = {
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {},
  }),
  hidden: (i: number) => ({
    opacity: 0,
    y: -80,
    transition: {},
  }),
};
interface MobileProps {
  show: boolean;
  setShow: (arg0: boolean) => void;
}
const MobileNav = ({ show, setShow }: MobileProps) => {
  return (
    <div className="w-10 h-10 md:hidden m-4" onClick={() => setShow(!show)}>
      <div className="w-10 h-10 flex flex-col justify-between items-center relative z-10">
        <motion.div
          variants={divRotate}
          initial="normal"
          animate={show ? "animate" : "normal"}
          className="w-full h-2 bg-black"
          custom={1}
        ></motion.div>
        <motion.div
          variants={divDisappear}
          initial="normal"
          animate={show ? "hidden" : "normal"}
          className="w-full h-2 bg-black"
        ></motion.div>
        <motion.div
          variants={divRotate}
          initial="normal"
          animate={show ? "animate" : "normal"}
          className="w-full h-2 bg-black"
          custom={-1}
        ></motion.div>
      </div>
      <motion.ul
        variants={ulAni}
        initial="hidden"
        animate={show ? "visible" : "hidden"}
        className={`bg-white flex h-full flex-col fixed top-0 left-0 right-0 items-center justify-center gap-10`}
      >
        {listItems.map(([title, href], i) => (
          <motion.li
            variants={liAni}
            custom={i}
            key={title}
            transition={{ type: "tween" }}
          >
            <Link href={href}>
              <a className="text-4xl">{title}</a>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};
type NavbarProps = {};
export const Navbar = ({}: NavbarProps) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <nav className="flex items-center w-screen h-20 justify-between md:px-20 shadow-md bg-white sticky top-0 right-0 left-0">
        <Link href="/">
          <div className="md:w-1/4 cursor-pointer">Logo</div>
        </Link>
        <DesktopNav />
        <MobileNav show={show} setShow={setShow} />
      </nav>
    </>
  );
};
