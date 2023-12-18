import data from './/data.json';
import './App.css';
import LokasiTpsComponent from "./LokasiTpsConponent";

function App() {
  return (
      <div>
        <LokasiTpsComponent data={data} />
      </div>
  );
}

export default App;
