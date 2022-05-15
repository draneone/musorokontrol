import { YMaps, Map, Placemark, ZoomControl } from 'react-yandex-maps'

import getSeverityPlacemark from '../../utils/getSeverityPlacemark'
import isSeverityType from '../../utils/isSeverityType'

function MyMap({ width, objects, mapState, handleObjectHistory }) {
  const onPlacemarkClick = i => () => {
    handleObjectHistory(i)
  };
  return (
    <YMaps >
      <Map width={width} height='100%' defaultState={mapState}>
        {objects.map(({ type, adress, img, geometry, status }, i) => (
          <Placemark geometry={geometry}
            onClick={onPlacemarkClick(i)}
            properties={{
              balloonContent: `
                <p style='margin: 0' onClick="handleObjectHistory(i)"><b>${type}</b></p>
                <img width='180' height='120' src=${img} />
                <p style='margin: 0'>${adress}</p>
              `,
            }}
            options={{
              openEmptyBalloon: true,
              iconColor: getSeverityPlacemark(isSeverityType(status))
            }}
            modules={["geoObject.addon.balloon"]}
          />
        ))}

        <ZoomControl options={{ float: 'right' }} />
      </Map>
    </YMaps>
  )
}

export default MyMap
