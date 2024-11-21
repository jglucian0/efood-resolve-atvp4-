import { useParams } from 'react-router-dom'
import Loader from '../Loader'

import { useGetFeatureEfoodQuery } from '../../services/api'

import { ImgBanner, ApresentacaoCategoria, ApresentacaoPrato } from './styles'

type Params = {
  id: string
}

const Banner = () => {
  const { id } = useParams<Params>()
  const { data: catalogoServico, isLoading } = useGetFeatureEfoodQuery(id || '')

  if (isLoading) {
    return <Loader />
  }

  if (!catalogoServico) {
    return (
      <div className="container">
        <h3>Serviço não encontrado</h3>
      </div>
    )
  }

  return (
    <ImgBanner style={{ backgroundImage: `url(${catalogoServico.capa})` }}>
      <div className="container">
        <ApresentacaoCategoria>{catalogoServico.tipo}</ApresentacaoCategoria>
        <ApresentacaoPrato>{catalogoServico.titulo}</ApresentacaoPrato>
      </div>
    </ImgBanner>
  )
}

export default Banner
