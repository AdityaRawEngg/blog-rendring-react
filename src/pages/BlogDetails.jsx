import { Component } from "react";
import { data } from "../helper/data";
import BlogHeading from "../components/BlogHeading";
import BlogImage from "../components/BlogImage";
import BlogContent from "../components/BlogContent";
import Aside from "../components/Aside";
import styles from "../styles/blogDetails.module.css";

class BlogDetails extends Component {
  state = {
    blog: {},
  };
  async componentDidMount() {
    const blogData = await data(this.props.match.params.id)
      .then((data) => data)
      .catch((err) => err);
    this.setState({ blog: blogData.data[0] });
  }

  async componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      this.setState({ blog: {} });
      const blogData = await data(nextProps.match.params.id)
        .then((data) => data)
        .catch((err) => err);
      this.setState({ blog: blogData.data[0] });
    }
  }

  render() {
    const { blog } = this.state;
    return (
      <div className={styles["blog"]}>
        <div className={styles["blog-details"]}>
          <BlogImage
            className={styles["blog-image"]}
            imageUrl={blog.imageUrl}
          />
          <BlogHeading
            className={styles["blog-heading"]}
            title={blog.title}
            author={blog.author}
            imageUrl={blog.imageUrl}
          />
          <BlogContent
            className={styles["blog-content"]}
            content={blog.content}
          />
        </div>
        <div className={styles["related-links"]}>
          <h2>Related Links</h2>
          {blog.links &&
            blog.links.map((link) => <Aside id={link.id} title={link.title} />)}
        </div>
      </div>
    );
  }
}
export default BlogDetails;
