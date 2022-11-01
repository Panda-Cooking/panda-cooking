import { Heading2, Heading3 } from "../../../../styles/typography";
import { FooterStyled } from "./styles";
import { BsGithub } from "react-icons/bs";
import { TfiLinkedin } from "react-icons/tfi";
import { Link } from "react-router-dom";
import avatarImg from "../../../../assets/img/avatar.png";

export const Footer = () => {
  return (
    <FooterStyled>
      <div className="container">
        <Heading2 color="white">Sobre nos</Heading2>
        <Heading3 color="white">Grupo 4</Heading3>

        <ul className="list-founders">
          <li className="founder-card">
            <img src={avatarImg} alt="" />
            <Heading3>Carlos Jr.</Heading3>
            <div>
              <Link to="/">
                <TfiLinkedin />
              </Link>
              <Link to="/">
                <BsGithub />
              </Link>
            </div>
          </li>
          <li className="founder-card">
            <img src={avatarImg} alt="" />
            <Heading3>Carlos Jr.</Heading3>
            <div>
              <Link to="/">
                <TfiLinkedin />
              </Link>
              <Link to="/">
                <BsGithub />
              </Link>
            </div>
          </li>
          <li className="founder-card">
            <img src={avatarImg} alt="" />
            <Heading3>Carlos Jr.</Heading3>
            <div>
              <Link to="/">
                <TfiLinkedin />
              </Link>
              <Link to="/">
                <BsGithub />
              </Link>
            </div>
          </li>
          <li className="founder-card">
            <img src={avatarImg} alt="" />
            <Heading3>Carlos Jr.</Heading3>
            <div>
              <Link to="/">
                <TfiLinkedin />
              </Link>
              <Link to="/">
                <BsGithub />
              </Link>
            </div>
          </li>
          <li className="founder-card">
            <img src={avatarImg} alt="" />
            <Heading3>Carlos Jr.</Heading3>
            <div>
              <Link to="/">
                <TfiLinkedin />
              </Link>
              <Link to="/">
                <BsGithub />
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </FooterStyled>
  );
};
