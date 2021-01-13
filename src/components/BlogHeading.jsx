function BlogHeading({ title, author, className, imageUrl }) {
  return (
    <div className={className}>
      <h1>{title}</h1>
      <p>{author}</p>
    </div>
  );
}

export default BlogHeading;
