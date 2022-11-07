import { Link } from "react-router-dom";
import styled from "styled-components";


export const Header = styled.header`
    background: var(--Color-brand-1);
    box-shadow: #343a40 0px 4px 10px -2px;

    width: 100%;
    height: 64px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 0px 20px 0px 20px;
    
    .desktopTitle, .btnMenuDesktop{
        display: none;
    }

    .btnMenuMobile{
        border: none;
        background-color: transparent;
    }

    @media screen and (min-width: 443px) {
        box-shadow: #343a40 0px 2px 10px 3px;

        .btnMenuMobile{
            display: none;
        }

        .logoAndTitleContainer{
            display: flex;
            align-items: center;
            gap: 30px;
        }

        .btnMenuDesktop{
            display: flex;
            border-radius: 50%;
            border: none;
            img{
                width: 60px;
                border-radius: 50%;
                border: none;
            }
        }

        .desktopTitle{
            display: inline;
            color: var(--Color-gray-0);

            font-weight: 700;
            font-size: 2rem;
        }
    }
    @media screen and (min-width: 2200px) {
        justify-content: space-evenly;
    }
`

export const Menu = styled.aside`
   
    font-weight: 700;
    font-size: 1rem;
    color: #343a40;
    border-bottom: 1px solid #343a40;

    .off{
        display: none;
    }

    .on{
        width: 100%;
        height: 60px;
        background: var(--Color-brand-1);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;

        div{
            display: flex;
            justify-content: center;
            width: 100%;
            padding-bottom: 5px;
            box-shadow: #343a40 0px 4px 10px -3px;
        }

        button{
            border: none;
            background-color: transparent;
            font-weight: 700;
            font-size: 1rem;
            color: #343a40;
        }
    }
`

export const StyledLink = styled(Link)`
    color: var(--Color-gray-3);
`