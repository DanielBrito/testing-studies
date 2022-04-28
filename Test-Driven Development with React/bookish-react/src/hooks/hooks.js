import { useState, useEffect } from "react";
import axios from "axios";

export const useRemoteService = (initial) => {
  const [data, setData] = useState(initial);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      setError(false);
      setLoading(true);

      try {
        const res = await axios.get("http://localhost:8080/books");
        const sorted = res.data.sort((a, b) => a.id - b.id);

        setData(sorted);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return { data, loading, error };
};
