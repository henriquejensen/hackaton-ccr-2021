import React from "react";

import TopHeader from "./header";
import BottomHeader from "./bottom-header";

export default function Header() {
  const [innerWidth, setInnerWidth] = React.useState(window.innerWidth);

  const handleInnerWidth = React.useCallback((_) => {
    setInnerWidth(window.innerWidth);
  }, []);

  React.useEffect(() => {
    window.addEventListener("resize", handleInnerWidth);

    return () => {
      window.removeEventListener("resize", handleInnerWidth);
    };
  }, [handleInnerWidth]);

  if (innerWidth < 720) {
    return <BottomHeader />;
  }
  return <TopHeader />;
}
