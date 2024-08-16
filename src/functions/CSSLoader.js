import { useEffect } from "react";

const CSSLoader = (url) => {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = url;
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, [url]);
};

export default CSSLoader;
