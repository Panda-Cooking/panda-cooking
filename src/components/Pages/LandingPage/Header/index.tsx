import { useState } from "react";

import { TiThMenuOutline } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { MenuMobile } from "../MenuMobile";

import { Heading3 } from "../../../../styles/typography";
import { HeaderStyled } from "./styles";

export const Header = () => {
  const [menuOn, setMenuOn] = useState(false);

  return (
    <HeaderStyled>
      <div className="container">
        <Heading3>Panda Cooking</Heading3>

        <div className="buttons-desktop">
          <Link to="/signIn">Login</Link>
          <Link to="/signUp">Registro</Link>
        </div>

        <button
          className="menu-hamburguer"
          onClick={() => setMenuOn((prevState) => !prevState)}
        >
          {menuOn ? <IoClose /> : <TiThMenuOutline />}
        </button>
        <AnimatePresence>{menuOn && <MenuMobile />}</AnimatePresence>
      </div>
    </HeaderStyled>
  );
};
