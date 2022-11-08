import { Footer } from "./Footer";

import { SectionEmphasis } from "./SectionEmphasis";
import { SectionOnHigh } from "./SectionOnHigh";
import { SectionPresentations } from "./SectionPresentations";
import { LandingPageStyled } from "./styles";

const LandingPage = () => {
  return (
    <LandingPageStyled>
      <SectionPresentations />
      <SectionOnHigh />
      <SectionEmphasis />
      <Footer />
    </LandingPageStyled>
  );
};

export default LandingPage;
