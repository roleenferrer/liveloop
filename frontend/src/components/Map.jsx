import React from 'react'
import GoogleMapReact from 'google-map-react'
import './style/map.css'

import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

const Map = ({ location, zoomLevel }) => (
    <div className="map">
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyASTDssYDFH7WAYmpavSLgcBqFopJVf87w' }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
          options={{disableDefaultUI: true}}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
          <LocationPin
            lat={36.9777223039389}
            lng={-122.0536747707009}
            text={"Main Entrance"}
          />
          <LocationPin
              lat={36.981451629614874}
              lng={-122.05195574654519}
              text={"Lower Campus"}
          />
          <LocationPin
              lat={36.98612000074854}
              lng={-122.05347527298636}
              text={"The Farm"}
          />
          <LocationPin
              lat={36.99145429283725}
              lng={-122.05464479513023}
              text={"East Remote Parking"}
          />
          <LocationPin
              lat={36.994304362434605}
              lng={-122.05551753750245}
              text={"East Field House"}
          />
          <LocationPin
              lat={36.997539844191074}
              lng={-122.05506544030388}
              text={"Bookstore"}
          />
          <LocationPin
              lat={36.99904725113633}
              lng={-122.05514548284367}
              text={"Crown/Merrill"}
          />
          <LocationPin
              lat={36.99999651351248}
              lng={-122.0583279747162}
              text={"C9/10"}
          />
          <LocationPin
              lat={37.00002893600196}
              lng={-122.062329159318}
              text={"Science Hill"}
          />
          <LocationPin
              lat={36.99938734456224}
              lng={-122.06454996723684}
              text={"Kresge"}
          />
          <LocationPin
              lat={36.99313410613227}
              lng={-122.06514372032822}
              text={"RCC/Kresge"}
          />
          <LocationPin
              lat={36.99191322700488}
              lng={-122.06679155373752}
              text={"FSH"}
          />
          <LocationPin
              lat={36.99004580052091}
              lng={-122.06718599652353}
              text={"Oakes"}
          />
          <LocationPin
              lat={36.98289406053649}
              lng={-122.06269942075527}
              text={"Empire Grade"}
          />
          <LocationPin
              lat={36.9788656482405}
              lng={-122.05773923019366}
              text={"High & Western"}
          />

        </GoogleMapReact>
      </div>
    </div>
  )

const LocationPin = ({ text }) => (
<div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
    <p className="pin-text">{text}</p>
</div>
)

export default Map