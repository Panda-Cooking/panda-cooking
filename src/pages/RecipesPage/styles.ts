import styled from "styled-components";

interface iMainProps {
    disabled: Boolean;
}

export const Container = styled.div`
    max-width: 100vw;
    color: var(--Color-gray-3);
`;

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    gap: 20px;
    max-width: 1024px;
    padding: 32px 1rem;

    @media (min-width: 1024px) {
        padding: 32px 0;
    }

    .firstRecipeSection {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;

        img {
            border-radius: 4px;
            height: 296px;
            object-fit: cover;
            width: 100%;
            object-position: 10% 66%;
        }

        .recipeOwner {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;

            div {
                display: flex;
                align-items: center;
                gap: 8px;
            }
            div > div > img {
                width: 48px;
                height: 48px;
                border-radius: 50%;
                object-fit: cover;
                object-position: center;
            }
        }

        .recipeText {
            width: 100%;
            p {
                font-weight: 400;
                font-size: 0.9rem;
            }
        }

        @media screen and (min-width: 443px) {
            .recipeText {
                width: 80%;
            }
        }
    }
    .secondRecipeSection {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding-top: 20px;

        ul > li {
            list-style: initial;
        }

        ol > li {
            counter-increment: li;
        }

        ol li::before {
            content: counter(li);
            color: black;
            text-align: center;
            background-color: var(--Color-brand-2);
            border-radius: 50%;
            display: inline-flex;
            width: 1.5rem;
            height: 1.5rem;
            margin-left: -1.5em;
            margin-right: 0.5em;
            box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);
            font-weight: 700;
            align-items: center;
            justify-content: center;
        }

        ol {
            list-style: none;
            counter-reset: li;
            gap: 1rem;
            display: flex;
            flex-direction: column;
            padding-left: 20px;
        }

        ul {
            gap: 0.2rem;
            display: flex;
            flex-direction: column;
            padding-left: 20px;
        }

        ul > li:nth-child(1),
        ol > li:nth-child(1) {
            padding-top: 10px;
        }

        h2 {
            font-weight: 700;
            font-size: 1.5rem;
        }

        li {
            font-weight: 400;
            font-size: 1rem;
        }

        @media (min-width: 443px) {
            ol {
                width: 100%;
            }
            ul {
                width: 100%;
            }
        }
    }

    .thirdRecipeSection {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding-top: 20px;

        .comentsContainer {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 30px;

            .coment {
                width: 100%;

                .description {
                    width: 90%;
                    max-height: 10rem;
                    overflow: auto;

                    ::-webkit-scrollbar {
                        width: 10px;
                        border-radius: 5px;
                    }

                    ::-webkit-scrollbar-track {
                        background: transparent;
                        border-radius: 5px;
                    }

                    ::-webkit-scrollbar-thumb {
                        background: var(--Color-brand-1);
                        border-radius: 5px;
                    }
                }
                p {
                    font-weight: 400;
                }

                ul {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }
            }
            ul > li {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                background-color: var(--Color-brand-2);
                padding: 1rem;
                gap: 1rem;
                border-radius: 4px;
            }

            ul > li > div {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 1rem;
                width: 85%;
                word-break: break-all;
            }

            .userComment {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 0.4rem;
                width: 3rem;
                position: static;
            }

            .userComment > img {
                width: 48px;
                height: 48px;
                border-radius: 50%;
                object-fit: cover;
                object-position: center;
            }

            .btnComment {
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
            .btnComment div {
                display: flex;
                gap: 1rem;
            }
        }
        @media (min-width: 600px) {
            .coment {
                ul > li {
                    flex-direction: row;
                }
                ul > li > div {
                    flex-direction: row;
                }
                .btnComment {
                    width: 15%;
                }
            }
        }
    }

    .addComentContainer {
        background-color: var(
            ${({ disabled }: iMainProps) =>
                disabled ? "--Color-gray-1" : "--Color-brand-2"}
        );
        border-radius: 4px;

        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 1rem;

        cursor: ${({ disabled }: iMainProps) =>
            disabled ? "not-allowed" : "text"};

        textarea {
            border: none;
            outline: none;
            resize: none;
            background: none;
            width: 95%;
            padding-top: 1rem;
            color: var(--Color-gray-3);
            font-family: "Inter", sans-serif;
            cursor: ${({ disabled }: iMainProps) =>
                disabled ? "not-allowed" : "text"};
        }
        button {
            border: none;
            background: none;
            cursor: ${({ disabled }: iMainProps) =>
                disabled ? "not-allowed" : "pointer"};
        }

        button > svg {
            color: var(--Color-gray-3);
            width: 24px;
            height: 24px;
        }
    }

    h2 {
        font-weight: 700;
        font-size: 1.5rem;
    }
`;
