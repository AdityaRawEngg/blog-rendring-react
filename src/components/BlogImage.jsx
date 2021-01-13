function BlogImage({ imageUrl, className }) {
  return (
    <div className={className}>
      <img src={imageUrl} alt="Blog Banner" />
    </div>
  );
}

export default BlogImage;
