import data from './/data.json';
import './App.css';
import LokasiTpsComponent from "./LokasiTpsConponent";
import NavbarComponent from "./navbar";

function App() {
  return (
      <div>
          <NavbarComponent/>
          <LokasiTpsComponent data={data} />
      </div>
  );
}

export default App;
