import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { MenuHamburguerContainer } from './style';
import { motion } from 'framer-motion';

interface iMenuHamburguerProps {
  logoutFunction(): void;
}

const MenuHamburguer = ({ logoutFunction }: iMenuHamburguerProps) => {
  const [menu, setMenu] = useState<boolean>(false);

  return (
    <MenuHamburguerContainer>
      <div>
        {menu ? (
          <IoMdClose size={30} onClick={() => setMenu(!menu)}></IoMdClose>
        ) : (
          <GiHamburgerMenu
            size={30}
            onClick={() => setMenu(!menu)}
          ></GiHamburgerMenu>
        )}
      </div>
      {menu ? (
        <motion.section
          animate={{ translateY: [-40, 0], opacity: [0, 1] }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <Link to='/'>Meu perfíl</Link>
          </div>
          <div>
            <span onClick={() => logoutFunction()}>Sair</span>
          </div>
        </motion.section>
      ) : (
        <></>
      )}
    </MenuHamburguerContainer>
  );
};

export default MenuHamburguer;
