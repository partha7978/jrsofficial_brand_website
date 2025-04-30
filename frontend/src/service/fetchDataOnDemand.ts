import { client } from "../../client/client";

export const fetchDataOnDemand = async (
  url: string,
  parameter?: string,
  singleItemFetchQuery?: string,
  order?: string
) => {
  const query = parameter
    ? `*[_type == "${url}"${
        singleItemFetchQuery ? ` && ${singleItemFetchQuery}` : ""
      }]${order ? `| order(${order})` : ""}{${parameter}}`
    : `*[_type == "${url}"${
        singleItemFetchQuery ? ` && ${singleItemFetchQuery}` : ""
      }] ${order ? `| order(${order})` : ""}`;

  try {
    const data = await client.fetch(query);
    return data.length > 1 ? data : data[0];
  } catch (err) {
    console.error("Manual fetch error:", err);
    throw err;
  }
};
