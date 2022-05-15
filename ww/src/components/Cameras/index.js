import {
  Box, IconButton,
  ImageList, ImageListItem,
  ImageListItemBar, Tooltip
} from "@mui/material"
import CachedIcon from '@mui/icons-material/Cached';

import camera1 from './images/1.jpg'
import camera2 from './images/2.jpg'
import camera3 from './images/3.jpg'
import camera4 from './images/4.jpg'

function Cameras() {
  return (
    <Box display="flex" justifyContent='center'>
      <ImageList sx={{ width: 600, height: 500 }}>

        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              actionIcon={
                <Tooltip title='Обновит объект'>
                  <IconButton
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    aria-label={`info about ${item.title}`}
                  >
                    
                     
                    <CachedIcon />
                  </IconButton>
                </Tooltip>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  )
}

export default Cameras

const itemData = [
  {
    img: camera1,
    title: 'Camera1',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: camera2,
    title: 'Camera2',
  },
  {
    img: camera3,
    title: 'Camera3',
  },
  {
    img: camera4,
    title: 'Camera4',
    cols: 2,
  }
];
