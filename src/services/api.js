const BASE_URL =
  "https://crudcrud.com/api/e723ab3502d74db18d02a98c5c5dbea1/todos";

export const fetchTodoList = async () => {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  return data;
};

export const createTodo = async (todo) => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const data = await response.json();
  return data;
};

export const updateTodo = async (todo) => {
  const response = await fetch(`${BASE_URL}/${todo._id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: todo.title, completed: todo.completed }),
  });
  return response;
};

export const deleteTodo = async (todo) => {
  const response = await fetch(`${BASE_URL}/${todo._id}`, {
    method: "DELETE",
  });
  return response;
};
