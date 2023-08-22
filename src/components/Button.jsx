import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom'

export default function Button({ number, name, isActive, onClick, title }) {
  const location = useLocation()

  let buttonClassName = `flex gap-16 border-2 border-[#838391] w-full md:w-full lg:w-3/4 p-2 hover:bg-[#38384F] hover:border-[#38384F]`

  const isOverviewActive =
    location.pathname === `/${title.toLowerCase()}` && name === 'overview'

  // Desactivar boton si location.pathname === `/${title.toLowerCase()}` y name !== 'overview'
  const isButtonInactive =
    location.pathname === `/${title.toLowerCase()}` && name !== 'overview'

  if ((isActive || isOverviewActive) && !isButtonInactive) {
    if (title === 'Mercury') {
      buttonClassName += ' bg-[#419EBB] border-2 border-transparent'
    } else if (title === 'Venus') {
      buttonClassName += ' bg-[#EDA249] border-2 border-transparent'
    } else if (title === 'Earth') {
      buttonClassName += ' bg-[#6D2ED5] border-2 border-transparent'
    } else if (title === 'Mars') {
      buttonClassName += ' bg-[#D14C32] border-2 border-transparent'
    } else if (title === 'Jupiter') {
      buttonClassName += ' bg-[#D83A34] border-2 border-transparent'
    } else if (title === 'Saturn') {
      buttonClassName += ' bg-[#CD5120] border-2 border-transparent'
    } else if (title === 'Uranus') {
      buttonClassName += ' bg-[#1EC1A2] border-2 border-transparent'
    } else if (title === 'Neptune') {
      buttonClassName += ' bg-[#2D68F0] border-2 border-transparent'
    }
  }

  let nameToUrl = name.replace(' ', '-')

  if (nameToUrl === 'overview') {
    nameToUrl = `/${title.toLowerCase()}`
  } else {
    nameToUrl = `/${title.toLowerCase()}/${nameToUrl}`
  }

  return (
    <Link to={nameToUrl} onClick={onClick} className={buttonClassName}>
      <span
        className={`${
          isOverviewActive || isActive || isButtonInactive
            ? 'text-white'
            : 'text-[#838391]'
        }`}
      >
        {number}
      </span>
      <h3
        className={`inline-flex uppercase font-spartan leading-1 mt-1 font-bold tracking-widest`}
      >
        {name}
      </h3>
    </Link>
  )
}

// Define los tipos de propiedades esperadas
Button.propTypes = {
  number: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
}
