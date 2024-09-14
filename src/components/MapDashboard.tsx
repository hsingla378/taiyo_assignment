import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { Icon, LeafletEvent } from "leaflet";
import { fetchCountryData } from "../utils/api";
import { CountryData } from "../utils/api";

// Define a custom marker icon for country flags
const createIcon = (flagUrl: string, size: number): Icon => {
  return L.icon({
    iconUrl: flagUrl,
    iconSize: [size, size],
    iconAnchor: [size / 2, size],
    popupAnchor: [0, -size],
  });
};

const MapDashboard: React.FC = () => {
  const [iconSize, setIconSize] = useState<number>(40);

  // Adjust icon size based on window width
  useEffect(() => {
    const handleResize = () => {
      setIconSize(window.innerWidth < 600 ? 30 : 40);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { data, isLoading, error } = useQuery<CountryData[]>(
    "countryData",
    fetchCountryData
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>Error loading data</div>;
  }

  return (
    <div className="p-4 bg-white rounded shadow-lg">
      <h2 className="text-xl font-bold mb-4">COVID-19 Map</h2>
      <MapContainer
        center={[20, 0]}
        zoom={2}
        className="w-full h-[500px] md:h-[800px] px-4"
      >
        <TileLayer url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=NLe8DG6CVIhkI4PpAXR1" />
        {data?.map((country) => {
          const icon = createIcon(country.countryInfo.flag, iconSize);

          return (
            <Marker
              key={country.countryInfo._id}
              position={[country.countryInfo.lat, country.countryInfo.long]}
              icon={icon}
              eventHandlers={{
                mouseover: (e: LeafletEvent) => {
                  const marker = e.target;
                  marker.openPopup();
                },
                mouseout: (e: LeafletEvent) => {
                  const marker = e.target;
                  marker.closePopup();
                },
              }}
            >
              <Popup>
                <div className="text-sm">
                  <h3>{country.country}</h3>
                  <p>Active cases: {country.active}</p>
                  <p>Recovered: {country.recovered}</p>
                  <p>Deaths: {country.deaths}</p>
                  <p>Population: {country.population}</p>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default MapDashboard;
