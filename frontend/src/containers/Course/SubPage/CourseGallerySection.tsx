const CourseGallerySection = () => {
  return (
    <div className="photos">
      {Array(20)
        .fill(0)
        .map((_, index) => (
          <div
            className={`photo-item ${index % 2 === 0 ? "big" : "small"}`}
            key={index}
          >
            <img
              src={
                index % 2 === 0
                  ? "https://images.unsplash.com/photo-1485470733090-0aae1788d5af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2FsbHBhcGVyJTIwNGt8ZW58MHx8MHx8fDA%3D"
                  : "https://images.unsplash.com/photo-1579550752291-74213f625700?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHdhbGxwYXBlciUyMDRrfGVufDB8MXwwfHx8MA%3D%3D"
              }
              alt="Gallery Image"
              loading="lazy"
            />
          </div>
        ))}
    </div>
  );
};

export default CourseGallerySection;
