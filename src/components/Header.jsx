import data from '../assets/data.json'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  const [isResponsive, setIsResponsive] = useState(window.innerWidth <= 768)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleResize = () => {
      setIsResponsive(window.innerWidth <= 768)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Darle el color al link segun planeta correspondiente
  const activeLink = (planetName) => {
    if (planetName === 'Mercury') {
      return '#419EBB'
    } else if (planetName === 'Venus') {
      return '#EDA249'
    } else if (planetName === 'Earth') {
      return '#6D2ED5'
    } else if (planetName === 'Mars') {
      return '#D14C32'
    } else if (planetName === 'Jupiter') {
      return '#D83A34'
    } else if (planetName === 'Saturn') {
      return '#CD5120'
    } else if (planetName === 'Uranus') {
      return '#1EC1A2'
    } else if (planetName === 'Neptune') {
      return '#2D68F0'
    }
  }

  const planets = data.map((planet) => planet.name)
  const planetList = planets.map((planetName) => (
    <li key={planetName} className="flex justify-evenly">
      <NavLink
        style={({ isActive }) => {
          return {
            color: isActive ? activeLink(planetName) : '',
            pointerEvents: isActive ? 'none' : undefined,
          }
        }}
        className={`text-[14px] text-[#838391] hover:text-white font-spartan uppercase font-bold tracking-[1px] leading-[25px] ${
          isResponsive ? 'text-[20px] text-white' : ''
        }`}
        to={planetName.toLowerCase()}
      >
        {planetName}
      </NavLink>
    </li>
  ))

  return (
    <header className="border-b-[1px] relative border-[#fff] border-opacity-[0.2]">
      <div className="container md:mx-auto py-6 px-8 flex justify-between items-center md:flex-col lg:flex-row flex-wrap">
        <h2 className="text-[28px] text-center font-antonio font-normal uppercase md:w-full lg:w-2/12 my-4">
          The planets
        </h2>
        <img
          className={`h-4 cursor-pointer ${
            isResponsive ? 'block z-10 opacity-25' : 'hidden'
          }`}
          src="./src/assets/icon-hamburger.svg"
          alt="Icono hamburguesa"
          onClick={handleMenuClick}
        />
        <nav className="md:justify-center lg:justify-end flex items-center w-full md:w-full lg:w-10/12">
          <ul
            className={`flex md:static md:top-50 md:bg-transparent md:flex-row md:h-auto align-middle justify-center gap-12 ${
              isResponsive && !isMenuOpen
                ? 'flex-col absolute top-0 left-0 w-full h-screen bg-[#070724]'
                : 'hidden'
            } md:flex`}
          >
            {planetList}
          </ul>
        </nav>
      </div>
    </header>
  )
}
