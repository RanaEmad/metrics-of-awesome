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
  signIn(email, password) {
    return fetch(process.env.REACT_APP_ENDPOINT_BASEURL + "api/users/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
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

  getDashboard() {
    return fetch(
      process.env.REACT_APP_ENDPOINT_BASEURL + "api/users/dashboard",
      {
        method: "GET",
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  signedIn() {
    const token = localStorage.getItem("token");
    if (token) {
      return true;
    }
    return false;
  }

  signOut() {
    localStorage.removeItem("token");
  }
}

export default new Auth();
