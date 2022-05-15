import { YMaps, Map, Placemark } from 'react-yandex-maps'

import getSeverityPlacemark from '../../utils/getSeverityPlacemark'
import isSeverityType from '../../utils/isSeverityType'

function MyMap({ width, objects, mapState, handleObjectHistory }) {

  return (
    <YMaps >
      <Map width={width} height='100%' defaultState={mapState}>
        {objects.map(({ type, adress, img, geometry, status }, i) => (
          <Placemark geometry={geometry}
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

        {/* <Placemark geometry={[44.89427, 37.31689]}
          options={{

            iconColor: '#ff0000'
          }}
        />

        <Placemark geometry={[44.89927, 37.31689]}
          properties={{
            balloonContent: '<img src="http://img-fotki.yandex.ru/get/6114/82599242.2d6/0_88b97_ec425cf5_M" />',
          }}
          options={{
            openEmptyBalloon: true
          }}
          modules={["geoObject.addon.balloon"]}
        // instanceRef={ref => {
        //   ref && ref.balloon.open();
        // }}
        /> */}

        {/* <Placemark geometry={[44.79427, 37.31689]}
          properties={{
            balloonContent: '<img src="http://img-fotki.yandex.ru/get/6114/82599242.2d6/0_88b97_ec425cf5_M" />',
            iconContent: "Azerbaijan",
            balloon: true,
          }}
          options={{
            balloon: true,
            // iconLayout: "default#image",
            // iconImageHref: 'http://img-fotki.yandex.ru/get/6114/82599242.2d6/0_88b97_ec425cf5_M',
            // iconImageSize: [128, 128],
            // iconColor: '#ff0000'
          }}
        /> */}
      </Map>
    </YMaps>
  )
}

export default MyMap
