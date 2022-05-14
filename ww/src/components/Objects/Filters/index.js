import { Checkbox, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material";

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Filters({ openFilters, closeFilter, checked, handleFilterToggle, page }) {
  return <Drawer
    open={openFilters}
    anchor="right"
    variant="persistent"
    sx={{
      display: page === 'cameras' ? 'none' : 'block',
      width: !openFilters ? 0 : 240,
      flexShrink: 0,
      [`& .MuiDrawer-paper`]: { width: !openFilters ? 0 : 240, boxSizing: 'border-box' },
    }}>
    <Toolbar />

    <List>
      <ListItem disablePadding>
        <ListItemButton onClick={closeFilter}>
          <ListItemIcon>
            <ArrowForwardIcon />
          </ListItemIcon>
          <ListItemText primary='Свернуть' />
        </ListItemButton>
      </ListItem>
    </List>

    <Divider />

    {/* Кнопки фильтров */}
    <List>
      <ListItemButton
        onClick={() => handleFilterToggle(0)}
        dense
      >
        <ListItemIcon>
          <Checkbox
            checked={checked.indexOf(0) !== -1}
            tabIndex={-1}
            disableRipple
          />
        </ListItemIcon>

        <ListItemText>Пустые</ListItemText>
      </ListItemButton>

      <ListItemButton
        onClick={() => handleFilterToggle(1)}
        dense
      >
        <ListItemIcon>
          <Checkbox
            checked={checked.indexOf(1) !== -1}
            tabIndex={-1}
            disableRipple
          />
        </ListItemIcon>

        <ListItemText>Полные</ListItemText>
      </ListItemButton>

      <ListItemButton
        onClick={() => handleFilterToggle(2)}
        dense
      >
        <ListItemIcon>
          <Checkbox
            checked={checked.indexOf(2) !== -1}
            tabIndex={-1}
            disableRipple
          />
        </ListItemIcon>
        <ListItemText>Не габарит</ListItemText>
      </ListItemButton>
    </List>
  </Drawer>
}

export default Filters
