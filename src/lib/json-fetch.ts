interface Request {
  url: string;
  body?: string;
  options: {
    method: "GET" | "POST" | "DELETE" | "PATCH" | "PUT";
  };
}

export async function jsonFetch<T>({
  url,
  body,
  options,
}: Request): Promise<T> {
  return fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    ...options,
  })
    .then((res) => {
      if (res.ok) return res.json();
      return Promise.reject(res);
    })
    .catch((res) => {
      console.log(res);
      return res.status;
    });
}
