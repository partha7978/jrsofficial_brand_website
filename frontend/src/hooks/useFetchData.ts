import { useState, useEffect } from "react";
import { client } from "../../client/client";
import { useDispatch } from "react-redux";
import { setLoadingValue } from "../store/loaderSlice";

const useFetchData = (
  url: string,
  parameter?: string,
  singleItemFetchQuery?: string,
  order?: string
) => {
  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async function fetchData() {
      const query = parameter
        ? `*[_type == "${url}"${
            singleItemFetchQuery ? ` && ${singleItemFetchQuery}` : ""
          }]${order ? `| order(${order})` : ""}{${parameter}}`
        : `*[_type == "${url}"${
            singleItemFetchQuery ? ` && ${singleItemFetchQuery}` : ""
          }] ${order ? `| order(${order})` : ""}`;

      try {
        dispatch(setLoadingValue(40));
        setLoading(true);
        const fetchedData = await client.fetch(query);
        dispatch(setLoadingValue(70));
        console.log(fetchedData, url, "---------------");
        setData(fetchedData.length > 1 ? fetchedData : fetchedData[0]);
        dispatch(setLoadingValue(99));
      } catch (err: any) {
        console.error("Error : ", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return { data, loading, error };
};

export default useFetchData;
