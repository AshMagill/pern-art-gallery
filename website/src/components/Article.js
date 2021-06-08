const Article = ({ title, description, filename }) => {
  return (
    <li className="product-grid-item">
      <h3>{title}</h3>
      <img
        src={`http://localhost:5000/dashboard/image/${filename}`}
        alt={filename}
      />
      <p>{description}</p>
    </li>
  );
};

export default Article;
