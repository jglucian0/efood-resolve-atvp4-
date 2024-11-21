import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const CardRestaurant = styled.div`
  width: 472px;
  height: 398px;
  position: relative;
  /* Estilo para tablet */
  @media (max-width: ${breakpoints.tablet}) {
    max-width: 100%;
    height: auto;
  }

  /* Estilo para mobile */
  @media (max-width: ${breakpoints.mobile}) {
    max-width: 100%;
    height: auto;
  }
`
export const CardConteiner = styled.div`
  /* Estilo para tablet */
  @media (max-width: ${breakpoints.tablet}) {
    max-width: 100%;
  }

  /* Estilo para mobile */
  @media (max-width: ${breakpoints.mobile}) {
    max-width: 100%;
  }
`

export const Imagem = styled.div`
  background-repeat: no-repeat;
  width: 472px;
  height: 217px;
  object-fit: cover;
  background-size: 100%; /* Aqui estou garantindo que a imagem ocupe todo o espaço disponível */

  /* Estilo para tablet */
  @media (max-width: ${breakpoints.tablet}) {
    max-width: 100%;
  }

  /* Estilo para mobile */
  @media (max-width: ${breakpoints.mobile}) {
    max-width: 100%;
  }
`

export const ContainerDescritivo = styled.div`
  width: 472px;
  height: 181px;
  border: 1px solid ${colors.LightSalmon};
  border-top: 0;

  h3 {
    font-size: 18px;
    font-weight: 700;
    text-align: left;

    /* Estilo para mobile*/
    @media (max-width: ${breakpoints.mobile}) {
      font-size: 16px;
    }
  }

  p {
    width: 456px;
    height: 88px;
    font-size: 14px;
    font-weight: 400;
    margin: 16px 8px;
    line-height: 19.09px;

    /* Estilo para mobile */
    @media (max-width: ${breakpoints.mobile}) {
      padding-right: 8px;
    }
  }

  /* Estilo para mobile */
  @media (max-width: ${breakpoints.mobile}) {
    position: relative;
    max-width: 100%;
    max-height: 100%;
  }

  ${TagContainer} {
    margin: 0px 0px 8px 8px;

    /* Estilo para mobile */
    @media (max-width: ${breakpoints.mobile}) {
      margin: 0;
    }
  }

  /* Estilo para tablet */
  /* @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    height: auto;
  } */

  /* Estilo para mobile */
  /* @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    height: auto;
  } */
`
export const RatingStar = styled.div`
  width: 21px;
  height: 21px;
  padding: 0.5px 0px 0.5px 0px;
  gap: 0px;
  opacity: 0px;
`
export const LineSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 8px 0 7px;

  /* Estilo para mobile */
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 14px;
    height: auto;
  }

  .tituloCard {
    height: 21px;
  }
  .nota {
    width: 26px;
    height: 21px;

    /* Ajuste para mobile */
    @media (max-width: ${breakpoints.mobile}) {
      max-width: 100%;
      height: 20px;
    }
  }

  .Rating {
    width: 51px;
    height: 21px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;

  ${TagContainer} {
    margin: 0 0 0 8px;
  }
`
