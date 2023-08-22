import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom'

export default function ButtonResponsive({
  number,
  name,
  isActive,
  onClick,
  title,
}) {
  const location = useLocation()

  let buttonClassName = `flex gap-16 w-full md:w-full lg:w-3/4 p-2 hover:border-b-[#38384F] hover:border-b-4 py-4 text-[12px]`

  const isOverviewActive =
    location.pathname === `/${title.toLowerCase()}` && name === 'overview'

  // Desactivar boton si location.pathname === `/${title.toLowerCase()}` y name !== 'overview'
  const isButtonInactive =
    location.pathname === `/${title.toLowerCase()}` && name !== 'overview'

  if ((isActive || isOverviewActive) && !isButtonInactive) {
    if (title === 'Mercury') {
      buttonClassName += ' border-b-4 border-[#419EBB]'
    } else if (title === 'Venus') {
      buttonClassName += ' border-b-4 border-[#EDA249]'
    } else if (title === 'Earth') {
      buttonClassName += ' border-b-4 border-[#6D2ED5]'
    } else if (title === 'Mars') {
      buttonClassName += ' border-b-4 border-[#D14C32]'
    } else if (title === 'Jupiter') {
      buttonClassName += ' border-b-4 border-[#D83A34]'
    } else if (title === 'Saturn') {
      buttonClassName += ' border-b-4 border-[#CD5120]'
    } else if (title === 'Uranus') {
      buttonClassName += ' border-b-4 border-[#1EC1A2]'
    } else if (title === 'Neptune') {
      buttonClassName += ' border-b-4 border-[#2D68F0]'
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
        className={`hidden md:block${
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
ButtonResponsive.propTypes = {
  number: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
}
