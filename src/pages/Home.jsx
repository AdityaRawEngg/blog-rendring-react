import { Component } from "react";
import { data } from "../helper/data";
import BlogTiles from "../components/BlogTiles";
import "../styles/home.css";

class Home extends Component {
  state = {
    blogList: [],
  };
  async componentDidMount() {
    const blogData = await data()
      .then((data) => data)
      .catch((err) => err);
    this.setState({ blogList: blogData.data[0] });
  }
  render() {
    return (
      <div className="blogs">
        {this.state.blogList.map((blog) => {
          return <BlogTiles key={blog.id} {...blog} />;
        })}
      </div>
    );
  }
}

export default Home;
