import React from 'react'
import { Link } from 'react-router-dom'
import { useUserContext } from '../../contexts/AuthContext'
import { SiFoodpanda } from 'react-icons/si'
import { Heading2 } from '../../styles/typography'
import { HeaderStyle } from './style'
import MenuHamb from './MenuHamb'

const HeaderMenu = () => {
  const { user } = useUserContext()

  return (
    <HeaderStyle>
      <Link to="/dashboard" className='linkHome'>
        <SiFoodpanda size={45} className="mainPandaLogo"></SiFoodpanda>
        <Heading2>Panda Cooking</Heading2>
      </Link>
      {user ? (
        <MenuHamb/>
      ) : (
        <Link to="/signIn" id="goToLogin">
          Login
        </Link>
      )}
    </HeaderStyle>
  )
}

export default HeaderMenu
