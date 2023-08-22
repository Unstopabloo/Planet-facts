import { useState } from 'react'
import Boton from './Button'
import PropTypes from 'prop-types'

const Botones = ({ title }) => {
  // seteo estado en el componente padre para verificar si esta activo
  const [isActive, setActive] = useState('overview')

  // defino funcion que actualizara el estado del boton con el nombre especificado
  const handleButtonClick = (name) => {
    setActive(name)
  }

  return (
    // isActive: le da el nombre del boton al estar activo
    // onClick: ejecuta la funcion en el boton especificado
    <ul className="hidden md:flex flex-col gap-4 md:pt-20 lg:p-0">
      <li>
        <Boton
          number="01"
          name="overview"
          isActive={isActive === 'overview'}
          onClick={() => handleButtonClick('overview')}
          title={title}
        />
      </li>
      <li>
        <Boton
          number="02"
          name="internal structure"
          isActive={isActive === 'internal structure'}
          onClick={() => handleButtonClick('internal structure')}
          title={title}
        />
      </li>
      <li>
        <Boton
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

export default Botones

Botones.propTypes = {
  title: PropTypes.string,
}
