import Header from './components/Header.jsx'
import MainInfo from './components/MainInfo.jsx'
import data from './assets/data.json'
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        {data.map((planetData, index) => (
          <Route
            key={index}
            path={`/${planetData.name.toLowerCase()}`}
            element={
              <MainInfo
                image={planetData.images.planet}
                title={planetData.name}
                info={planetData.overview.content}
                source={planetData.overview.source}
              />
            }
          />
        ))}
        {data.map((planetData, index) => (
          <Route
            key={index}
            path={`/${planetData.name.toLowerCase()}/internal-structure`}
            element={
              <MainInfo
                image={planetData.images.internal}
                title={planetData.name}
                info={planetData.structure.content}
                source={planetData.structure.source}
              />
            }
          />
        ))}
        {data.map((planetData, index) => (
          <Route
            key={index}
            path={`/${planetData.name.toLowerCase()}/surface-geology`}
            element={
              <MainInfo
                image={planetData.images.geology}
                title={planetData.name}
                info={planetData.geology.content}
                source={planetData.geology.source}
              />
            }
          />
        ))}
        <Route
          path="*"
          element={
            <MainInfo
              image={data[2].images.planet}
              title={data[2].name}
              info={data[2].overview.content}
              source={data[2].overview.source}
            />
          }
        />
      </Routes>
    </>
  )
}
