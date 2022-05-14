import {
  Box,
} from "@mui/material"
import { useState } from "react";
import Cameras from "./components/Cameras";
import MyMap from "./components/Map";
import MyAppBar from "./components/MyAppBar";
import MyDrawer from "./components/MyDrawer";
import Objects from "./components/Objects";
import Filters from "./components/Objects/Filters";

import objects from "./objects";

const drawerWidth = 240

function App() {
  const [width, setWidth] = useState('100%')
  // Переключение страниц
  const [page, setPage] = useState('map')
  const setCurrentPage = (page) => {
    setPage(page)
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
          page === 'map' ? <MyMap width={width} objects={objects} /> : null
        }

        {/* Страница объектов */}
        {
          page === 'objects' ? (
            <Objects
              objects={objects} />
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
