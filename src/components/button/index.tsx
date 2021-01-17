import React from "react";
import MaterialButton from "@material-ui/core/Button";

function Button({ title }: { title: string }) {
  return (
    <MaterialButton
      variant="contained"
      style={{ color: "white", borderRadius: 20, backgroundColor: "black" }}
    >
      {title}
    </MaterialButton>
  );
}

export default Button;
