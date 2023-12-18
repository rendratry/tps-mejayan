import data from './/data.json';
import './App.css';
import LokasiTpsComponent from "./LokasiTpsConponent";
import {useEffect, useState} from "react";

function App() {
  // const [data, setData] = useState([]);
  //
  // useEffect(() => {
  //   // Fungsi untuk membaca file JSON
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('src/data.json'); // Gantilah dengan path sesuai dengan struktur proyek Anda
  //       const jsonData = await response.json();
  //       console.log(jsonData)
  //       setData(jsonData); // Sesuaikan dengan struktur data JSON yang diinginkan
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };
  //
  //   // Panggil fungsi fetchData pada saat komponen dimuat
  //   fetchData();
  // }, []);
  return (
      <div>
        <LokasiTpsComponent data={data} />
      </div>
  );
}

export default App;
