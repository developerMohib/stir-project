import { useEffect, useState } from "react";

const useDataFetch = ({blog}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

      // fetching data
  useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await fetch(`/${blog}.json`); // Replace with your API endpoint
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
  }, [blog]);

//   const fetchData = async () => {
//     try {
//       const response = await fetch(`/${blog}.json`); // Replace with your API endpoint
//       if (!response.ok) {
//         throw new Error("Network response was not ok.");
//       }
//       const data = await response.json();
//       setData(data);
//       setLoading(false);
//     } catch (error) {
//       console.log(error);
//       setLoading(false);
//     }
//   };
  if (loading) {
    return <div>Loading...</div>;
  }
console.log('fetch data hooks', data)
    return {data} ;
};

export default useDataFetch;