import { useEffect, useState } from "react";

const useDataFetch = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetching data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  if (loading) {
    return <div>Loading...</div>;
  }
  return { data };
};

export default useDataFetch;