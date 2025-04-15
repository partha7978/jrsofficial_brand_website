import ReactDOM from "react-dom";

const Portal = <P extends object>(Component: React.FC<P>) => {
  const HOC = (props: P) => {
    const portalRoot = document.getElementById("portal-root");

    if (!portalRoot) {
      console.error("Portal root not found!");
      return null;
    }

    return ReactDOM.createPortal(<Component {...props} />, portalRoot);
  };

  return HOC;
};

export default Portal;
