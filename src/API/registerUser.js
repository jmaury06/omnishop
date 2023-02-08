const registerUser = async (register, callback = () => {}) => {
  
  const rawPost = (url, opts = { headers: {} }) => {
    return fetch(url, {
      method: "POST",
      ...opts,
    });
  };

  const { firstName, lastName, email, password } = register;
  const response = await rawPost("https://fakestoreapi.com/users", {
    body: JSON.stringify({
      email,
      username: email,
      password,
      name: {
        firstName,
        lastName,
      },
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw error;
  } else if (response.ok) {
    callback();
  }
};

export default registerUser;
