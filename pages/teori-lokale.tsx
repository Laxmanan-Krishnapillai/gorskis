import { NextPage } from "next";
import { motion } from "framer-motion";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import Spinner from "../public/icons/spinner.svg";
const mainAni = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.2,
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
const position = { lat: 55.9557, lng: 12.51625 };
const TeoriLokale: NextPage = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });
  return (
    <motion.main
      variants={mainAni}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="min-h-[calc(100vh_-_10rem)] flex flex-col items-center"
    >
      {isLoaded ? (
        <GoogleMap
          zoom={10}
          center={position}
          mapContainerClassName="w-full h-80 -z-10"
        >
          <Marker position={position} />
        </GoogleMap>
      ) : (
        <Loading />
      )}
      <motion.h1
        variants={headingAni}
        transition={{ type: "tween" }}
        className="text-4xl font-black text-center mt-10 mb-4"
      >
        Teori lokale
      </motion.h1>
      <motion.p
        variants={headingAni}
        className="text-center max-w-[60ch] mb-20"
      >
        Undervisningen foregår på Strandgårdsvej 48, 3050 Humlebæk. Kør ned for
        enden af Teglgårdsvej, drej til højre og følg nummerskiltene. På cykel
        kører man forbi Baunebjergskolen og drejer til højre mellem 2 bomme op.
      </motion.p>
    </motion.main>
  );
};

const Loading = ({}) => {
  return (
    <div className="w-full h-80 animate-pulse bg-slate-700 flex justify-center items-center text-2xl text-white">
      <Spinner className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
      Google maps is loading...
    </div>
  );
};
export default TeoriLokale;
