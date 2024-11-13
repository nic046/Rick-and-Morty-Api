import { useState, useEffect, useRef } from "react";
import "./App.css";
import useFetch from "./hooks/useFetch";
import CardInfo from "./components/CardInfo";
import ResidentsList from "./components/ResidentsList";
import Search from "./components/Search";
import usePage from "./hooks/usePage.jsx";
import Buttons from "./components/Buttons.jsx";
import Particles from "./components/Particles.jsx";
import Loader from "./components/Loader.jsx"

const urlBase = "https://rickandmortyapi.com/api/location/";

function App() {
  const [location, setLocation, loading, error] = useFetch();
  const [locationId, setLocationId] = useState(1);
  const [page, setPage, maxPage, itemsPerPage] = usePage({
    data: location,
  });
  console.log(error);
  useEffect(() => {
    setLocation(urlBase + locationId);
  }, [locationId]);

  useEffect(() => {
    scrollUp();
  }, [page]);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentPageItem = location?.residents?.length
    ? location?.residents?.slice((page - 1) * itemsPerPage, page * itemsPerPage)
    : [];

  return (
    <>
      {loading && <Loader />}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <>
          <Particles />
          <div className="hero" />
          <div className="center">
            <div className="container">
              <Search setLocationId={setLocationId} setPage={setPage} />
              <CardInfo location={location} />
              <ResidentsList residents={currentPageItem} />
            </div>
            <div className="pagination">
              <Buttons page={page} maxPage={maxPage} setPage={setPage} />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
