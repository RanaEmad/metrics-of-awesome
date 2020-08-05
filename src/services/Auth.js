class Auth {
  signUp(name, email, password) {
    return fetch(process.env.REACT_APP_ENDPOINT_BASEURL + "api/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.auth) {
          localStorage.setItem("token", data.token);
        }
        return data;
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

export default new Auth();
