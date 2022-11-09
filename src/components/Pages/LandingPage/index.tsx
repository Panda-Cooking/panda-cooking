import { motion } from "framer-motion";
import { Footer } from "./Footer";

import { SectionEmphasis } from "./SectionEmphasis";
import { SectionLastAdded } from "./SectionLastAdded";
import { SectionPresentations } from "./SectionPresentations";
import { LandingPageStyled } from "./styles";

const LandingPage = () => {
  return (
    <motion.div
      animate={{ opacity: [0, 1] }}
      exit={{ opacity: [1, 0] }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <LandingPageStyled>
        <SectionPresentations />
        <SectionLastAdded />
        <SectionEmphasis />
        <Footer />
      </LandingPageStyled>
    </motion.div>
  );
};

export default LandingPage;
