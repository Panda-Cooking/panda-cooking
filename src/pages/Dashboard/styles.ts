import styled from "styled-components";

export const Container = styled.div`
    background-color: var(--Color-gray-0);
    a {
        text-decoration: none;
    }

    main {
        padding: 32px 16px;
        .filterSection {
            #fs1 {
                background: rgb(255, 119, 135);
                background: linear-gradient(
                    180deg,
                    rgba(255, 119, 135, 1) 0%,
                    rgba(255, 208, 208, 1) 100%
                );
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 6px;
                margin-bottom: 14px;
                border-radius: 14px;

                #miniLogo {
                    display: none;
                    color: var(--Color-gray-3);
                }
            }

            #fs2 a {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin: 0 30px;

                svg {
                    color: var(--Color-gray-3);
                }

                p {
                    font-weight: 600;
                    font-size: 16px;
                }
            }

            #fs3 {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;

                input {
                    width: 100%;
                    height: 40px;
                    border-radius: 30px;
                    border: none;
                    padding-left: 16px;
                    margin-right: 10px;
                }

                button {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    color: white;
                    border: none;
                    background-color: var(--Color-brand-1);
                }
            }

            #fs4 {
                width: 100%;
                display: flex;
                justify-content: space-between;

                img {
                    display: none;
                }
            }

            .swiper-slide {
                background-color: var(--Color-brand-1);
                height: 32px;
                border-radius: 16px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-weight: 700;
                font-size: 12px;
                color: white;
                /* cursor: pointer; */
            }

            .filterAll {
                background-color: var(--Color-gray-3);
            }
        }
    }

    @media screen and (min-width: 768px) {
        main {
            width: 100%;
            min-height: 100vh;

            .filterSection {
                #fs1 {
                    height: 152px;
                    position: relative;
                    z-index: 0;
                    #miniLogo {
                        display: block;
                        margin-top: 8px;
                    }

                    #fs2 {
                        display: flex;
                        justify-content: center;
                        margin: 0 0 0 16px;

                        #fs2 a {
                            width: 100px;
                            height: 64px;
                            display: flex;
                            margin: 10px 30px;
                        }
                    }
                }

                #fs2:hover {
                    transition: 500ms;
                    background: rgb(255, 119, 135);
                    background: radial-gradient(
                        circle,
                        rgba(255, 119, 135, 1) 0%,
                        rgba(255, 215, 215, 1) 100%
                    );
                    border-radius: 12px;
                    padding: 6px 0;
                }

                #fs3 {
                    width: 90%;
                    justify-content: space-around;
                    align-items: center;
                    margin-left: 20px;

                    input {
                        border: 2px solid var(--Color-brand-1);
                    }
                }

                #fs3 button:hover {
                    background-color: var(--Color-brand-2);
                    transition: 500ms;

                    .searchIcon {
                        color: var(--Color-gray-3);
                    }
                }

                #fs4 {
                    background-color: white;
                    padding: 0 20px;
                    width: 97%;
                    height: 80px;
                    border-radius: 18px;
                    position: absolute;
                    bottom: 16px;
                    align-items: center;
                    justify-content: flex-start;

                    img {
                        display: block;
                        width: 42px;
                    }
                }
            }
        }

        ul {
            li:hover {
                transition: 500ms;
                transform: scale(1.1);
                cursor: pointer;
            }

            li:not(:hover) {
                transition: 500ms;
            }
        }
    }
    @media (min-width: 1024px) {
        main {
            padding: 32px 0;
            max-width: 1024px;
            margin: 0 auto;
        }
    }
`;
