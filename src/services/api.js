const base_url = process.env.REACT_APP_BASE_URL;
export const ApiCallTodos = async (path, method, todo) => {
  const response = await fetch(base_url + "/todos/" + path, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: todo ? JSON.stringify(todo) : null,
  });
  if (method === "DELETE" || method === "PUT") return response;
  const data = await response.json();
  return data;
};
