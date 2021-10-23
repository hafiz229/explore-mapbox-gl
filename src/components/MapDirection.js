import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";

mapboxgl.accessToken =
  "pk.eyJ1IjoiaGFmaXoyMjkiLCJhIjoiY2t2NGQ1dGxzOHExNDJvbzhtZmM3NG1pZyJ9.h6w4Ga06EIJcuSjSiBErbQ";

const MapDirection = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [91.78318, 22.356852],
      zoom: 13,
    });

    map.addControl(
      new MapboxDirections({
        accessToken: mapboxgl.accessToken,
      }),
      "top-left"
    );
  });
  return (
    <div>
      <div id="map"></div>
    </div>
  );
};

export default MapDirection;
