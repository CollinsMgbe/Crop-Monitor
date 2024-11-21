import React from "react";
import { MapContainer, TileLayer, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapView = () => {
  // Coordinates for a polygon outlining Babban Gona's maize farm (approximate)
  const maizeFarmArea = [
    [10.8000, 7.4000], // Top-left
    [10.8000, 7.8000], // Top-right
    [10.4000, 7.8000], // Bottom-right
    [10.4000, 7.4000], // Bottom-left
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Farm Map - Nigeria</h2>
      <MapContainer center={[10.6000, 7.6000]} zoom={9} className="h-96 w-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {/* Red Polygon to Outline the Farm Area */}
        <Polygon
          positions={maizeFarmArea}
          pathOptions={{ color: "red", weight: 2 }}
        />
      </MapContainer>
    </div>
  );
};

export default MapView;