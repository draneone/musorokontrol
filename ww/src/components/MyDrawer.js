import {
  Box, Drawer,
  List, ListItem,
  ListItemButton, ListItemIcon, ListItemText, Toolbar
} from "@mui/material"
import MapIcon from '@mui/icons-material/Map'
import TakeoutDiningIcon from '@mui/icons-material/TakeoutDining';
import VideocamIcon from '@mui/icons-material/Videocam'

function MyDrawer({ drawerWidth, setCurrentPage }) {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => { setCurrentPage('map') }}>
              <ListItemIcon>
                <MapIcon />
              </ListItemIcon>
              <ListItemText primary='Карта' />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={() => { setCurrentPage('objects') }}>
              <ListItemIcon>
                <TakeoutDiningIcon />
              </ListItemIcon>
              <ListItemText primary='Объекты' />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={() => { setCurrentPage('cameras') }}>
              <ListItemIcon>
                <VideocamIcon />
              </ListItemIcon>
              <ListItemText primary='Камеры' />
            </ListItemButton>
          </ListItem>

        </List>
      </Box>
    </Drawer>
  )
}

export default MyDrawer
