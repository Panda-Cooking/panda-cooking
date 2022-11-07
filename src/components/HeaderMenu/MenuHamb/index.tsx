import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { HambStyle } from './style'
import { motion } from 'framer-motion'
import { useUserContext } from '../../../contexts/AuthContext'

const MenuHamb = () => {
  const [menu, setMenu] = useState<boolean>(false)
  const { logoutFunction } = useUserContext()

  return (
    <HambStyle>
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
          <div className="myProfile">
            <Link to="/profile">Meu perfíl</Link>
          </div>
          <div>
            <span onClick={() => logoutFunction()}>Sair</span>
          </div>
        </motion.section>
      ) : (
        <></>
      )}
    </HambStyle>
  )
}

export default MenuHamb;


