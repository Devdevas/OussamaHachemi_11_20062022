import { createContext } from "react";
import { useState, useEffect } from "react";

export const DataContext = createContext();

function DataProvider({ children }) {
  const [lodgings, setLodgings] = useState([]);
  const [isDataLoading, setDataLoading] = useState(false);

  const getData = async () => {
    setDataLoading(true);
    const response = await fetch("/lodgings.json");
    const data = await response.json();
    setLodgings(data);
    setDataLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);


  return (
    <DataContext.Provider value={{ lodgings, isDataLoading }}>
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
