import Botones from './Botones'
import BotonesResponsive from './BotonesResponsive'
import Data from './Data'
import PropTypes from 'prop-types'
import facts from '../assets/data.json'
import { useEffect, useState } from 'react'

export default function MainInfo({ image, title, info, source }) {
  const [currentPlanet, setCurrentPlanet] = useState('Earth')

  useEffect(() => {
    // Cada vez que se renderize el componente ejecutar lo siguiente.
    // Guardo en planetData el nombre del planeta que coincida con el titulo del componente actual
    const planetData = facts.find((planet) => planet.name === title)
    if (planetData) {
      // Si se encuentra dentro del arreglo un planeta con el mismo nombre de la variable actualiza el "currentPlanet"
      setCurrentPlanet(planetData.name)
    }
  }, [title])

  return (
    <main className="container mx-auto pt-0 md:pt-20 lg:pt-20 md:p-8 flex flex-col min-h-[90vh]">
      <BotonesResponsive title={title} />
      <div className="w-full flex-col md:flex-row lg:flex pt-20 md:p-0">
        <section className="grid place-items-center w-full md:w-full lg:w-7/12">
          <img src={image} alt={`Planet ${title}`} />
        </section>
        <section className="w-full md:w-full lg:w-5/12 flex flex-col md:flex-row lg:flex-col md:pt-14 justify-center content-center gap-10">
          <article className="flex flex-col items-center md:items-start justify-center md:justify-start gap-6 pt-36 md:p-0">
            <h1
              id="title"
              className="font-antonio text-[80px] leading-[103px] uppercase"
            >
              {title}
            </h1>
            <p className="font-spartan text-center md:text-left lg:text-left text-[17px] leading-[25px] font-light w-[350px]">
              {info}
            </p>
            <span className="opacity-[0.5]">
              Source:{' '}
              <a
                className="ps-1 underline decoration-solid font-bold"
                rel="noreferrer"
                target="_blank"
                href={source}
              >
                Wikipedia{' '}
                <img
                  className="inline ps-1"
                  src="./icon-source.svg"
                  alt="Source Icon"
                />
              </a>
            </span>
          </article>
          <Botones title={title} />
        </section>
      </div>
      {facts.map(
        (planet) =>
          planet.name === currentPlanet && (
            // Añadir dinamicamente las cuatro tarjetas con sus respectivos datos.
            // Un map() a los datos y si el nombre del planeta coincide con el planeta actual muestra los datos.
            <section
              className="flex flex-col md:flex-row lg:flex-row justify-evenly md:justify-between lg:justify-evenly w-5/6 mx-auto md:min-w-full pt-[4.5rem]"
              key={planet.name}
            >
              <Data dataTitle="Rotation time" dataFact={planet.rotation} />
              <Data dataTitle="Revolution time" dataFact={planet.revolution} />
              <Data dataTitle="Radius" dataFact={planet.radius} />
              <Data dataTitle="Average temp." dataFact={planet.temperature} />
            </section>
          )
      )}
    </main>
  )
}

MainInfo.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
}
