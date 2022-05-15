import {
  Box,
} from "@mui/material"
import { useState } from "react";
import Cameras from "./components/Cameras";
import MyMap from "./components/Map";
import MyAppBar from "./components/MyAppBar";
import MyDrawer from "./components/MyDrawer";
import ObjectHistory from "./components/ObjectHistory";
import Objects from "./components/Objects";
import Filters from "./components/Objects/Filters";

import objects from "./objects";
import {
  objectHistory1,
  objectHistory2,
  objectHistory3,
  objectHistory4
} from './objectHistory'

const objectHistory = [
  objectHistory1,
  objectHistory2,
  objectHistory3,
  objectHistory4
]

const drawerWidth = 240

function App() {
  const [width, setWidth] = useState('100%')
  // Переключение страниц
  const [page, setPage] = useState('map')
  const setCurrentPage = (page) => {
    setPage(page)
  }
  const [ikey, setIkey] = useState(0)
  // История объекта
  const handleObjectHistory = (i) => {
    setIkey(i)
    setCurrentPage('objectHistory')
  }

  // Открытие закрытие фильтра объектов
  const [openFilters, setOpenFilters] = useState(false)
  const openFilter = () => {
    setOpenFilters(true)
    setWidth('100%')
  }
  const closeFilter = () => {
    setOpenFilters(false)
    setWidth('99.9%')
  }
  // checked на фильтрах
  const [checked, setChecked] = useState([])
  const handleFilterToggle = (value, tag = null) => {
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(value)
      // checkedAddTag(tag)
    } else {
      newChecked.splice(currentIndex, 1)
      // checkedDeleteTag(tag)
    }

    setChecked(newChecked)
  }

  // ya state
  const [mapState, setMapState] = useState({
    center: [44.89427, 37.31689],
    zoom: 15
  })
  const handleOpenMap = (center) => {
    setMapState({
      center,
      zoom: 18
    })
    setCurrentPage('map')
  }

  return (
    <Box display='flex' height='100vh'>
      <MyAppBar
        openFilters={openFilters}
        openFilter={openFilter}
        page={page}
      />

      <MyDrawer drawerWidth={drawerWidth} setCurrentPage={setCurrentPage} />


      <Box component="main"
        sx={{ flexGrow: 1, pl: 3, pr: 3, pb: 3, pt: 11 }}
      >
        {/* Страница Карты */}
        {
          page === 'map' ? (
            <MyMap
              width={width}
              objects={objects}
              mapState={mapState}
              handleObjectHistory={handleObjectHistory}
            />
          ) : null
        }

        {/* Страница объектов */}
        {
          page === 'objects' ? (
            <Objects
              objects={objects}
              handleOpenMap={handleOpenMap}
              handleObjectHistory={handleObjectHistory}
            />
          ) : null
        }
        {/* Страница истории объекта */}
        {
          page === 'objectHistory' ? (
            <ObjectHistory
              objectHistory={objectHistory[ikey]}
              handleOpenMap={handleOpenMap}
              handleObjectHistory={handleObjectHistory}
            />
          ) : null
        }

        {/* Страница камер */}
        {
          page === 'cameras' ? <Cameras /> : null
        }
      </Box>

      {/* Фильтр объектов */}
      <Filters
        openFilters={openFilters}
        closeFilter={closeFilter}
        checked={checked}
        handleFilterToggle={handleFilterToggle}
        page={page}
      />
    </Box>
  )
}

export default App
