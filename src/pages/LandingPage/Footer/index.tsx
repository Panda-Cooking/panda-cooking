import { Heading2, Heading3 } from "../../../styles/typography";
import { FooterStyled } from "./styles";
import { BsGithub } from "react-icons/bs";
import { TfiLinkedin } from "react-icons/tfi";
import avatarImg from "../../../assets/img/avatar.png";
import { HorizontalScroll } from "../../../components/HorizontalScroll";
import { SwiperSlide } from "swiper/react";

export const Footer = () => {
    const imageOnError = (
        e: React.BaseSyntheticEvent<Event, HTMLImageElement, HTMLImageElement>
    ) => {
        e.target.src = avatarImg;
    };

    return (
        <FooterStyled>
            <div className="container">
                <Heading2 color="white">Sobre nos</Heading2>
                <Heading3 color="white">Grupo 4</Heading3>

                <HorizontalScroll>
                    <SwiperSlide>
                        <img
                            src="https://media.licdn.com/dms/image/D4D35AQHVadSSiiUENg/profile-framedphoto-shrink_400_400/0/1666099076734?e=1674828000&v=beta&t=JZ4dfd4t7r9KIJYI_Vd1TdRRJi5lhDMtHepCrDT-T0I"
                            alt=""
                            onError={imageOnError}
                        />
                        <Heading3>Carlos Jr.</Heading3>
                        <div>
                            <a
                                href="https://www.linkedin.com/in/carlos-junio-b02165240/"
                                target="blank"
                            >
                                <TfiLinkedin />
                            </a>
                            <a
                                href="https://github.com/CarlosX26"
                                target="blank"
                            >
                                <BsGithub />
                            </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="https://media.licdn.com/dms/image/D4D35AQHR_vlvxTuAKg/profile-framedphoto-shrink_400_400/0/1669213353498?e=1674828000&v=beta&t=r0Ff0pwI0ejTRrBE0OWibCYv2hQJzmwoKaJ4lePr85o"
                            alt=""
                            onError={imageOnError}
                        />
                        <Heading3>Felipe Bulhões</Heading3>
                        <div>
                            <a
                                href="https://www.linkedin.com/in/felipe-bulhões-b48152240/"
                                target="blank"
                            >
                                <TfiLinkedin />
                            </a>
                            <a
                                href="https://github.com/FelipeBulhoes"
                                target="blank"
                            >
                                <BsGithub />
                            </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="https://media.licdn.com/dms/image/D4D35AQFLGEC7GrjNzA/profile-framedphoto-shrink_400_400/0/1673537744382?e=1674828000&v=beta&t=yecmPYuKDdxLsrNlygs7PCd-7dG7cehIfHE3yhsS3q8"
                            alt=""
                            onError={imageOnError}
                        />
                        <Heading3>Victor Henrique</Heading3>
                        <div>
                            <a
                                href="https://www.linkedin.com/in/victor-henrique-6b0163240/"
                                target="blank"
                            >
                                <TfiLinkedin />
                            </a>
                            <a
                                href="https://github.com/Victor-Novakoski"
                                target="blank"
                            >
                                <BsGithub />
                            </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={avatarImg} alt="" />
                        <Heading3>Matheus Ferreira</Heading3>
                        <div>
                            <a
                                href="https://www.linkedin.com/in/matheussoares2410/"
                                target="blank"
                            >
                                <TfiLinkedin />
                            </a>
                            <a
                                href="https://github.com/theussoares"
                                target="blank"
                            >
                                <BsGithub />
                            </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="https://media.licdn.com/dms/image/D4D35AQGpRl8Ox4k1Nw/profile-framedphoto-shrink_400_400/0/1674172307009?e=1674828000&v=beta&t=EUwWz_iSles1VUoA3s20aa-av_zDVQCigw861j3zU6U"
                            alt=""
                            onError={imageOnError}
                        />
                        <Heading3>Eduardo Perondi</Heading3>
                        <div>
                            <a
                                href="https://www.linkedin.com/in/eduardo-perondi-de-almeida-bab5a2236/"
                                target="blank"
                            >
                                <TfiLinkedin />
                            </a>
                            <a
                                href="https://github.com/EduardoPerondidev"
                                target="blank"
                            >
                                <BsGithub />
                            </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="https://media.licdn.com/dms/image/C4E03AQGqrY7gsg5Swg/profile-displayphoto-shrink_400_400/0/1648225170721?e=1679529600&v=beta&t=srDQ6wj_HCzgn_qtHJqacQbrSjewYnoHm2H7y02iGtQ"
                            alt=""
                            onError={imageOnError}
                        />
                        <Heading3>Mateo Gaboardi</Heading3>
                        <div>
                            <a
                                href="https://www.linkedin.com/in/mateogpz/"
                                target="blank"
                            >
                                <TfiLinkedin />
                            </a>
                            <a
                                href="https://github.com/mateogaboardidev"
                                target="blank"
                            >
                                <BsGithub />
                            </a>
                        </div>
                    </SwiperSlide>
                </HorizontalScroll>
            </div>
        </FooterStyled>
    );
};
