import React, { Fragment, useState, useEffect } from "react";

// article components
import InputArticle from "../components/InputArticle";
import ListArticles from "../components/ListArticles";

const Articles = () => {
  return (
    <div>
      <InputArticle />
      <ListArticles />
    </div>
  );
};

const Dashboard = ({ setAuth }) => {
  const [name, setName] = useState("");

  async function getName() {
    try {
      const response = await fetch("http://localhost:5000/dashboard/", {
        method: "GET",
        headers: { token: localStorage.token },
      });

      const parseRes = await response.json();

      setName(parseRes.user_name);
    } catch (err) {
      console.error(err.message);
    }
  }
  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    setAuth(false);
  };
  useEffect(() => {
    getName();
  }, []);
  return (
    <Fragment>
      <div className="container">
        <h1 className="text-center mt-4">Dashboard</h1>
        <Articles />
      </div>
      <button
        className="btn btn-primary mt-4 mb-4 ml-3 "
        onClick={(e) => logout(e)}
      >
        Logout
      </button>
    </Fragment>
  );
};

export default Dashboard;
