import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import { MAP_STYLE, INITIAL_VIEW } from "@/lib/map";

export default function MapView() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const map = new maplibregl.Map({
      container: containerRef.current,
      style: MAP_STYLE,
      center: INITIAL_VIEW.center,
      zoom: INITIAL_VIEW.zoom,
    });

    map.addControl(new maplibregl.NavigationControl(), "top-right");

    return () => map.remove();
  }, []);

  return <div ref={containerRef} className="h-full w-full" />;
}
