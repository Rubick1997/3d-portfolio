import { useEffect, useState } from "react";
import Globe from "react-globe.gl";

function LocationGlobe() {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark"),
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributeFilter: ["class"],
      attributes: true,
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Globe
      key={isDark ? "dark-globe" : "light-globe"}
      height={326}
      width={326}
      backgroundColor="rgba(0,0,0,0)"
      showAtmosphere
      showGraticules
      showGlobe
      atmosphereColor={isDark ? "#d6d9e9" : "#2563eb"}
      globeImageUrl={
        isDark
          ? "//unpkg.com/three-globe/example/img/earth-night.jpg"
          : "//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
      }
      bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
      labelsData={[
        {
          lat: 47.6,
          lng: -122.3,
          color: isDark ? "white" : "#0f172a",
          size: 20,
        },
      ]}
    />
  );
}

export default LocationGlobe;
