import HeaderMenu from "../../HeaderMenu";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { SectionEmphasis } from "./SectionEmphasis";
import { SectionOnHigh } from "./SectionOnHigh";
import { SectionPresentations } from "./SectionPresentations";
import { LandingPageStyled } from "./styles";

const LandingPage = () => {
  return (
    <LandingPageStyled>
      <HeaderMenu />
      <SectionPresentations />
      <SectionOnHigh />
      <SectionEmphasis />
      <Footer />
    </LandingPageStyled>
  );
};

export default LandingPage;
