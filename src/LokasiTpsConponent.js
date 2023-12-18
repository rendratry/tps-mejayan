import React from "react";
import Map from "./Maps"; // Pastikan untuk menyesuaikan jalur impor sesuai dengan struktur proyek Anda.

const LokasiTpsComponent = ({ data }) => {
    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            <Map
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDtsbmogFMv_yt57257ekzFSZflhyesxe4&v=3.exp&libraries=geometry,drawing,places`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                markers={data}
            />
        </div>
    );
};

export default LokasiTpsComponent;
