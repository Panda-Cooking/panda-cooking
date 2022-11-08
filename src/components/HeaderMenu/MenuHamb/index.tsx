import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { HambStyle } from "./style";
import { motion, AnimatePresence } from "framer-motion";
import { useUserContext } from "../../../contexts/AuthContext";

const MenuHamb = () => {
  const [menu, setMenu] = useState<boolean>(false);
  const { logoutFunction } = useUserContext();

  return (
    <HambStyle>
      <div>
        {menu ? (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 0.3, ease: "easeIn" }}
          >
            <IoMdClose size={32} onClick={() => setMenu(!menu)}></IoMdClose>
          </motion.div>
        ) : (
          <motion.div>
            <GiHamburgerMenu
              size={32}
              onClick={() => setMenu(!menu)}
            ></GiHamburgerMenu>
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {menu && (
          <motion.div
            animate={{ opacity: [0, 1], translateY: [-50, -35] }}
            exit={{ opacity: [1, 0], translateY: [-35, -50] }}
            transition={{ duration: 0.3, ease: "linear" }}
          >
            <div className="menu-body">
              <Link to="/profile" onClick={() => setMenu(!menu)}>
                meu perfil
              </Link>

              <button onClick={() => logoutFunction()}>sair</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </HambStyle>
  );
};

export default MenuHamb;
