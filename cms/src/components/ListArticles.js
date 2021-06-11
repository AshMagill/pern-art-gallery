import React, { Fragment, useState, useEffect } from "react";

const ListArticles = () => {
  const [article, setArticle] = useState([]);

  // delete article function
  async function deleteArticle(id) {
    try {
      const res = await fetch(
        `http://localhost:5000/dashboard/articles/${id}`,
        {
          method: "DELETE",
          headers: { token: localStorage.token },
        }
      );

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
      <h2 className="text-center">Images</h2>
      <table className="table-striped w-100 mt-5">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {article.map((item) => (
            <tr key={item.article_id}>
              <td className="pl-2">{item.title}</td>
              <td>{item.description}</td>
              <img
                className="p-1"
                height="80rem"
                width="80rem"
                src={`http://localhost:5000/dashboard/image/${item.filename}`}
                alt={item.title}
              />
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() =>
                    deleteArticle(item.id) && window.location.reload()
                  }
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
