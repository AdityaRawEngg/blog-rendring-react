import { Link } from "react-router-dom";
import styles from "../styles/blogTiles.module.css";

function BlogTiles(blog) {
  return (
    <div className={styles["blog-tile"]}>
      <img src={blog.imageUrl} alt="Blog Banner" />
      <p>
        <Link to={`blog/${blog.id}`}> {blog.title}</Link>
      </p>
      <p>By: {blog.author}</p>
    </div>
  );
}

export default BlogTiles;
