import React, { useEffect, useState } from "react";

const useFetchData = (url) => {
  console.log(url);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async (url) => {
    try {
      setLoading(true);
      const result = await fetch(url);
      const res = await result.json();
      setData(res.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  console.log(data);

  return { data, loading };
};

export default useFetchData;
