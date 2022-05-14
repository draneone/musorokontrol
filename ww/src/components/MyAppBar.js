import { AppBar, Box, IconButton, Toolbar, Tooltip, Typography } from "@mui/material"

// import VisibilityIcon from '@mui/icons-material/Visibility'
// import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon'
import LanguageIcon from '@mui/icons-material/Language';
import FilterAltIcon from '@mui/icons-material/FilterAlt'

function MyAppBar({ openFilters, openFilter, page }) {
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <LanguageIcon sx={{ mr: 1 }} fontSize='large' />
        <Typography variant="h6" noWrap component="div">
          Мусороконтроль
        </Typography>
        <Box flex={1} />

        <Box display={page === 'map' || page === 'cameras' ? 'none' : 'block'}>
          <Tooltip title="Фильтр Объектов">
            <IconButton
              onClick={openFilter}
              disabled={!openFilters ? false : true}
              color='inherit'
            >
              <FilterAltIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default MyAppBar
