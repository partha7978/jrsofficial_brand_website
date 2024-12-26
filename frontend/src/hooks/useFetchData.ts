import { useState, useEffect } from "react";
import { client } from "../../client/client";
import { useDispatch } from "react-redux";
import { setLoadingValue } from "../store/loaderSlice";

const useFetchData = (url: string) => {
  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async function fetchData() {
      const query = `*[_type == "${url}"]`;
      try {
        dispatch(setLoadingValue(40));
        setLoading(true);
        const fetchedData = await client.fetch(query); 
        dispatch(setLoadingValue(70));
        console.log(fetchedData, url);
        setData(fetchedData[0]);
        dispatch(setLoadingValue(99));
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
