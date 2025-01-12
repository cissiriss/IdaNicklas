import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

export const MapComponent = () => {
  const latitude = 57.74806503952224;
  const longitude = 12.175686427624894;

  const location = { lat: latitude, lng: longitude };

  return (
    <>
      <div className="h-[400px] mt-4">
        <APIProvider apiKey="AIzaSyAFPt2am2wUzJ3TyQEcwcLvkqPUSS_PcOg">
          <Map defaultZoom={14} defaultCenter={location}>
            <Marker position={location} />
          </Map>
        </APIProvider>
      </div>
    </>
  );
};
