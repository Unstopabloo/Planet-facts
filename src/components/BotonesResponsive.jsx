import { useState } from 'react'
import BotonResponsive from './ButtonResponsive'
import PropTypes from 'prop-types'

const BotonesResponsive = ({ title }) => {
  // seteo estado en el componente padre para verificar si esta activo
  const [isActive, setActive] = useState('overview')

  // defino funcion que actualizara el estado del boton con el nombre especificado
  const handleButtonClick = (name) => {
    setActive(name)
  }

  return (
    // isActive: le da el nombre del boton al estar activo
    // onClick: ejecuta la funcion en el boton especificado
    <ul className="md:hidden flex justify-center gap-4 w-full border-b-[1px] border-white border-opacity-20">
      <li>
        <BotonResponsive
          number="01"
          name="overview"
          isActive={isActive === 'overview'}
          onClick={() => handleButtonClick('overview')}
          title={title}
        />
      </li>
      <li>
        <BotonResponsive
          number="02"
          name="internal structure"
          isActive={isActive === 'internal structure'}
          onClick={() => handleButtonClick('internal structure')}
          title={title}
        />
      </li>
      <li>
        <BotonResponsive
          number="03"
          name="surface geology"
          isActive={isActive === 'surface geology'}
          onClick={() => handleButtonClick('surface geology')}
          title={title}
        />
      </li>
    </ul>
  )
}

export default BotonesResponsive

BotonesResponsive.propTypes = {
  title: PropTypes.string,
}
