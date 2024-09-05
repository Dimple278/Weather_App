import axios from "axios";
import { useEffect, useState } from "react";
import { IError } from "../Interface/IError";

function useApi(url: string | null) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<IError | null>(null);

  const fetchData = async () => {
    if (!url) {
      url = "";
    }
    try {
      setError(null);
      const response = await axios(url);
      setData(response.data);
    } catch (error: any) {
      setError(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useApi;
