import React, { useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = React.useState(JSON.parse(sessionStorage.getItem('users')));
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  useEffect(() => {
    if (!url) {
      return;
    }
    if (!data) {
      setLoading(true);
      fetch(url)
        .then((data) => data.json())
        .then((data) => {
          sessionStorage.setItem('users', JSON.stringify(data, null, 2));
          setData(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.toString());
          setLoading(false);
        });
    }
  }, [url, data]);

  return [loading, error, data, setData];
};

export default useFetch;
