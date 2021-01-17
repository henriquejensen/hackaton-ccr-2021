import React from "react";
import MaterialButton from "@material-ui/core/Button";

function Button({
  title,
  onClick,
}: {
  title: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <MaterialButton
      variant="contained"
      style={{ color: "white", borderRadius: 20, backgroundColor: "black" }}
      onClick={onClick}
    >
      {title}
    </MaterialButton>
  );
}

export default Button;
