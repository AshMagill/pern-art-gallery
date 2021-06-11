const Article = ({ title, description, filename }) => {
  return (
    <li className="product-grid-item image-wrapper">
      <a href={`http://localhost:5000/dashboard/image/${filename}`}>
        <img
          src={`http://localhost:5000/dashboard/image/${filename}`}
          alt={filename}
        />
        <div className="text-wrapper">
          <h3 className="title">{title}</h3>
          <p className="description">{description}</p>
          <div class="download-icon"></div>
        </div>
      </a>
    </li>
  );
};

export default Article;
