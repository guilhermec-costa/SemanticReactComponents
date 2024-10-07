import { useState, useEffect } from "react";

interface UseFetchOptions {
  method?: string;
  headers?: Record<string, string>;
  body?: any;
}

const useFetch = <T,>(
  url: string,
  options?: UseFetchOptions
): { data?: T; error?: string; loading: boolean; refetch: () => void } => {
  const [data, setData] = useState<T | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | undefined>(undefined);
  const [triggerFetch, setTriggerFetch] = useState<number>(0);

  const refetch = () => setTriggerFetch(prev => prev + 1);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(undefined);

      try {
        const response = await fetch(url, {
          method: options?.method || "GET",
          headers: {
            "Content-Type": "application/json",
            ...options?.headers,
          },
          body: options?.body ? JSON.stringify(options.body) : null,
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (err: any) {
        setError(err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, triggerFetch]);

  return { data, error, loading, refetch };
};

export default useFetch;