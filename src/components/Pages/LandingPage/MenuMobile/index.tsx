import { Link } from "react-router-dom";

import { MenuMobileStyled } from "./styles";

export const MenuMobile = () => {
  return (
    <MenuMobileStyled
      animate={{ translateY: [-50, 0], opacity: [0, 1], zIndex: [-10, 20] }}
      exit={{ translateY: [0, -50], opacity: [1, 0], zIndex: [20, -20] }}
      transition={{ ease: "easeInOut", duration: 0.3 }}
    >
      <Link to="/signIn">Login</Link>
      <Link to="/signUp">Registro</Link>
    </MenuMobileStyled>
  );
};
