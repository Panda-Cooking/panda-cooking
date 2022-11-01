import { Header, Menu } from "./style"
import { SiFoodpanda } from 'react-icons/si'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from "react"

const HeaderMenu = () =>{
    const [view, setView] = useState<string>('off')

    const chageMenuVisibility = () =>{
        view == 'off' ? setView('on') : setView('off')
    }

    // const logOut = () =>{

    // }

    // const goToEditProfile = () => {

    // }

    return (
        <>
            <Header>
                <div className="logoAndTitleContainer">
                <SiFoodpanda size={50} />
                <h1 className="desktopTitle">Panda Cooking</h1>
                </div>
                <button onClick={chageMenuVisibility} className="btnMenuDesktop"><img src="data:image/jpeg;base64,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" alt="Profile image" /></button>
                <button onClick={chageMenuVisibility} className="btnMenuMobile"><GiHamburgerMenu size={40} /></button>
            </Header>
            <Menu>
                <div className={view}>
                    <div>
                        <p>Editar Perfil</p>
                    </div>
                    <button>Sair</button>
                </div>
            </Menu>
      </>
    )
}

export default HeaderMenu