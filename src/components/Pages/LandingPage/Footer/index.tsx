import { Heading2, Heading3 } from '../../../../styles/typography'
import { FooterStyled } from './styles'
import { BsGithub } from 'react-icons/bs'
import { TfiLinkedin } from 'react-icons/tfi'
import avatarImg from '../../../../assets/img/avatar.png'
import { HorizontalScroll } from '../../../HorizontalScroll'
import { SwiperSlide } from 'swiper/react'

export const Footer = () => {
  return (
    <FooterStyled>
      <div className="container">
        <Heading2 color="white">Sobre nos</Heading2>
        <Heading3 color="white">Grupo 4</Heading3>

        <HorizontalScroll>
          <SwiperSlide>
            <img src="https://media-exp1.licdn.com/dms/image/D4D35AQHVadSSiiUENg/profile-framedphoto-shrink_800_800/0/1666099076734?e=1668607200&v=beta&t=zRxx7NAgopFsFxzzxaft75hZwakblaOUGQsY9fX_DEs" alt="" />
            <Heading3>Carlos Jr.</Heading3>
            <div>
              <a href="https://www.linkedin.com/in/carlos-junio-b02165240/" target="blank">
                <TfiLinkedin />
              </a>
              <a href="https://github.com/CarlosX26" target="blank">
                <BsGithub />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://media-exp1.licdn.com/dms/image/C4E03AQErZ_S84K-T9A/profile-displayphoto-shrink_800_800/0/1664067694464?e=1673481600&v=beta&t=zofoC6-IZ2QGksysYH3yDgm4C6an_P7k9wBTsLLkCY0" alt="" />
            <Heading3>Felipe Bulhões</Heading3>
            <div>
              <a href="https://www.linkedin.com/in/felipe-bulhões-b48152240/" target="blank">
                <TfiLinkedin />
              </a>
              <a href="https://github.com/FelipeBulhoes" target="blank">
                <BsGithub />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={avatarImg} alt="" />
            <Heading3>Victor Henrique</Heading3>
            <div>
              <a
                href="https://www.linkedin.com/in/victor-henrique-6b0163240/"
                target="blank"
              >
                <TfiLinkedin />
              </a>
              <a href="https://github.com/Victor-Novakoski" target="blank">
                <BsGithub />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://media-exp1.licdn.com/dms/image/D4D03AQGrAjl_BC2nbQ/profile-displayphoto-shrink_800_800/0/1665678287795?e=1673481600&v=beta&t=_MIUU9DUnheR-l0bgRvGLncw3TzJAe2HXJil7WD7Cjc" alt="" />
            <Heading3>Matheus Ferreira</Heading3>
            <div>
              <a href="https://www.linkedin.com/in/matheussoares2410/" target="blank">
                <TfiLinkedin />
              </a>
              <a href="https://github.com/theussoares" target="blank">
                <BsGithub />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://media-exp1.licdn.com/dms/image/C4D03AQF9idpSXXGFWQ/profile-displayphoto-shrink_800_800/0/1648877593900?e=1673481600&v=beta&t=ypZh47glqEbmlttW8FDdzcD2rxZdnnBXErqQZDY-nEE" alt="" />
            <Heading3>Eduardo Perondi</Heading3>
            <div>
              <a href="https://www.linkedin.com/in/eduardo-perondi-de-almeida-bab5a2236/" target="blank">
                <TfiLinkedin />
              </a>
              <a href="https://github.com/EduardoPerondidev" target="blank">
                <BsGithub />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://media-exp1.licdn.com/dms/image/C4E03AQGqrY7gsg5Swg/profile-displayphoto-shrink_800_800/0/1648225170721?e=1673481600&v=beta&t=VNfjqKYj9-a0p9IUcsKe5ax_PkxvCehV6DyMqf3uDDg" alt="" />
            <Heading3>Mateo Gaboardi</Heading3>
            <div>
              <a href="https://www.linkedin.com/in/mateogpz/" target="blank">
                <TfiLinkedin />
              </a>
              <a href="https://github.com/mateogaboardidev" target="blank">
                <BsGithub />
              </a>
            </div>
          </SwiperSlide>
        </HorizontalScroll>
      </div>
    </FooterStyled>
  )
}
