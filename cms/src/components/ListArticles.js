import React, { Fragment, useState, useEffect } from "react";
import EditArticles from "./EditArticles";

const ListArticles = () => {
  const [article, setArticle] = useState([]);

  // delete article function
  async function deleteArticle(id) {
    try {
      const res = await fetch(
        `http://localhost:5000/dashboard/articles/${id}`,
        {
          method: "DELETE",
        }
      );
      console.log(res);

      setArticle(article.filter((articlea) => articlea.article_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  }

  async function getArticles() {
    const res = await fetch("http://localhost:5000/dashboard/articles");
    const articleArray = await res.json();
    setArticle(articleArray);
  }

  useEffect(() => {
    getArticles();
  }, []);
  return (
    <Fragment>
      <table className="table mt-5">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {article.map((item) => (
            <tr key={item.article_id}>
              <td>{item.image}</td>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>
                <EditArticles item={item} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteArticle(item.article_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListArticles;
