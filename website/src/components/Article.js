const Article = ({ image, title, description }) => {
  return (
    <li className="product-grid-item">
      <h3>{title}</h3>
      <h3>{image}</h3>
      <p>{description}</p>
    </li>
  );
};

export default Article;
