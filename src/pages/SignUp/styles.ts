import styled from "styled-components";

export const Main = styled.main`
    width: 100%;
    min-height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    background: rgb(255, 255, 255);
    background: linear-gradient(
        142deg,
        rgba(255, 255, 255, 1) 5%,
        rgba(255, 201, 201, 1) 75%
    );
`;

export const Container = styled.div`
    width: 85%;

    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

export const StyledImg = styled.img`
    height: 504px;

    @media screen and (max-width: 1300px) {
        display: none;
    }
`;

export const StyledForm = styled.form`
    width: 37.625rem;
    height: 50.875rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: 16px;

    background-color: var(--Color-gray-0);

    h1 {
        padding-top: 1rem;
        text-align: center;
    }

    h3 {
        padding-top: 1.5rem;
        padding-bottom: 1rem;
    }

    p {
        padding-bottom: 1rem;
    }
`;

export const StyledInput = styled.input`
    width: 31.25rem;
    height: 3.375rem;
    padding-left: 1rem;

    border: 1px solid var(--Color-brand-1);
    border-radius: 10px;

    background-color: var(--Color-brand-3);

    font-size: 18px;
    font-weight: 500;

    transition: 0.1s;

    &:hover {
        border: 3px solid var(--Color-brand-1);
    }

    @media screen and (max-width: 700px) {
        width: 30.25rem;
    }

    @media screen and (max-width: 610px) {
        width: 25.25rem;
    }

    @media screen and (max-width: 510px) {
        width: 20.25rem;
    }

    @media screen and (max-width: 410px) {
        width: 15.25rem;
    }
`;

export const StyledBtn = styled.button`
    width: 31.25rem;
    height: 4rem;

    border: 2px solid var(--Color-brand-1);
    border-radius: 10px;
    background-color: var(--Color-brand-1);

    font-size: 40px;
    font-weight: 700;
    color: var(--Color-gray-0);

    transition: 0.4s;

    &:hover {
        background-color: var(--Color-brand-3);
        color: var(--Color-brand-1);
    }

    @media screen and (max-width: 700px) {
        width: 30.25rem;
    }

    @media screen and (max-width: 610px) {
        width: 25.25rem;
    }

    @media screen and (max-width: 510px) {
        width: 20.25rem;
    }

    @media screen and (max-width: 410px) {
        width: 15.25rem;
    }
`;

export const StyledP = styled.p`
    font-size: 20px;
    font-weight: 400;
    color: var(--Color-gray-3);

    transition: 0.3s;

    &:hover {
        color: var(--Color-brand-1);
    }

    @media screen and (max-width: 510px) {
        font-size: 16px;
        text-align: center;
    }
`;

export const Error = styled.p`
    height: 1rem;
    margin-bottom: 1.5rem;

    font-weight: 400;
    font-size: 12.182px;
    line-height: 22px;
    color: var(--color-negative);

    @media screen and (max-width: 345px) {
        margin-bottom: 0.8rem;
    }
`;
