import { useState, useEffect } from "react";
import { client } from "../../client/client";

const useFetchData = (url: string) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async function fetchData() {
      const query = `*[_type == "${url}"]`;
      try {
        setLoading(true);
        const fetchedData = await client.fetch(query); 
        console.log(fetchedData, "ddd111");
        setData(fetchedData[0]);
      } catch (err: any) {
        console.error(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return { data, loading, error };
};

export default useFetchData;
