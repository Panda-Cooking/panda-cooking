import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { SiFoodpanda } from "react-icons/si";
import { Heading3 } from "../../styles/typography";
import { HeaderStyle } from "./style";
import MenuHamb from "./MenuHamb";

const HeaderMenu = () => {
    const { user } = useAuthContext();

    return (
        <>
            <HeaderStyle>
                <div className="container">
                    <Link to="/dashboard" className="header-linkHome">
                        <SiFoodpanda size={32}></SiFoodpanda>
                        <Heading3>Panda Cooking</Heading3>
                    </Link>
                    {user ? (
                        <MenuHamb />
                    ) : (
                        <div className="header-buttons">
                            <Link to="/signIn">Login</Link>
                            <Link to="/signUp">Registro</Link>
                        </div>
                    )}
                </div>
            </HeaderStyle>
            <Outlet />
        </>
    );
};

export default HeaderMenu;
