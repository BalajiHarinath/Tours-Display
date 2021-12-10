import "./styles.css";
import { useState, useEffect } from "react";
import Loading from "./loading";
import Tours from "./tours";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);
  const URL = "https://course-api.com/react-tours-project";

  function getData() {
    setLoading(true);
    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        setTours(json);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function reloadHandler() {
    getData();
  }

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  } else if (tours.length === 0) {
    return (
      <div className="App">
        <header>
          <h2 className="App-h2">No Tours Left</h2>
        </header>
        <button onClick={reloadHandler} className="reload">
          Reload...
        </button>
      </div>
    );
  } else {
    return (
      <div className="App">
        <header>
          <h2 className="App-h2">Our Tours</h2>
        </header>
        <Tours tours={tours} setTours={setTours} />
      </div>
    );
  }
}
