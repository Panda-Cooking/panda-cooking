import React from "react";
import { SiFoodpanda } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsUpload } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/Ai";
import { Heading2, Heading3, Text2 } from "../../../styles/typography";

import { Container } from "./styles";
import RecipesList from "./RecipesList";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <Container>
      <header>
        <div>
          <SiFoodpanda size={45} className="mainPandaLogo"></SiFoodpanda>
          <Heading2>Panda Cooking</Heading2>
        </div>
        <GiHamburgerMenu size={30}></GiHamburgerMenu>
        {/*Renderização condicional se o usuario estiver logado ou não*/}
      </header>
      <main>
        <section className="filterSection">
          <div id="fs1">
            <SiFoodpanda size={30} id="miniLogo"></SiFoodpanda>
            <div id="fs4">
              <div id="fs2">
                <Link to="/recipesSignUp">
                  <BsUpload size={22}></BsUpload>
                  <Text2>Enviar</Text2>
                </Link>
              </div>
              <div className="searchBar" id="fs3">
                <input type="text" placeholder="Pesquisar..." />
                <button>
                  <AiOutlineSearch
                    size={23}
                    className="searchIcon"
                  ></AiOutlineSearch>
                </button>
              </div>
            </div>
          </div>
          <ul>
            <li>Bolos</li>
            <li>Carnes</li>
            <li>Aves</li>
            <li>Peixes</li>
            <li>Sobremesas</li>
            <li>Massas</li>
            <li>Saladas</li>
            <li>Lanches</li>
            <li>Sopas</li>
            <li>Bebidas</li>
          </ul>
        </section>
        <RecipesList></RecipesList>
      </main>
    </Container>
  );
};

export default Dashboard;
