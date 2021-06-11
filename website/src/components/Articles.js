import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import Article from "./Article";

const Articles = () => {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const array = async () => {
      const result = await axios("http://localhost:5000/dashboard/articles");

      setData(result.data);
    };

    array();
  }, []);

  return (
    <div className="container">
      <h1>Tylar Waterman Artworks</h1>
      <ul className="product-grid">
        {data.map((article) => {
          return (
            <Article
              title={article.title}
              filename={article.filename}
              description={article.description}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Articles;
