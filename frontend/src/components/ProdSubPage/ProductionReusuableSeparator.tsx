const ProductionReusuableSeparator = ({ color }: { color: string }) => {
  const style = {
    backgroundColor: color || "#ffffff",
  };
  const largeStyle = {
    border: ` 2px solid ${color || "#ffffff"}`,
  };
  return (
    <div className="separator">
      <div className="separator-large" style={largeStyle}></div>
      <div className="separator-small" style={style}></div>
    </div>
  );
};

export default ProductionReusuableSeparator;
