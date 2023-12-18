import React, {useState} from "react";
import {GoogleMap, MarkerF, LoadScript, InfoWindowF} from "@react-google-maps/api";

const Map = ({ markers }) => {
    const [selectedMarker, setSelectedMarker] = useState(null);
    const mapStyles = {
        height: "100vh",
        width: "100%",
    };
    const handleMarkerClick = (marker) => {
        setSelectedMarker(marker);
    };

    return (
        <LoadScript
            googleMapsApiKey="AIzaSyDtsbmogFMv_yt57257ekzFSZflhyesxe4"
        >
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={12}
                center={{ lat: -7.54139, lng: 111.656434 }}
            >
                {markers.map((marker) => (
                    <MarkerF
                        key={marker.id}
                        position={{ lat: marker.latitude, lng: marker.longitude }}
                        label={marker.desa_kelurahan + " " + marker.tps}
                        onClick={() => handleMarkerClick(marker)}
                    >
                        {selectedMarker === marker && (
                            <InfoWindowF onCloseClick={() => setSelectedMarker(null)}>
                                <div>
                                    <h3>{marker.desa_kelurahan}</h3>
                                    <h4>TPS : {marker.tps}</h4>
                                    <h4>Jumlah Pemilih : {marker.julmah_pemilih}</h4>
                                    <p>{marker.alamat}</p>
                                    {/* Tambahan informasi lainnya sesuai kebutuhan */}
                                </div>
                            </InfoWindowF>
                        )}
                    </MarkerF>
                ))}
            </GoogleMap>
        </LoadScript>
    );
};

export default Map;
