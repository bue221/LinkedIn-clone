import React from "react";

import Button from "@material-ui/core/Button";

const ButtonOptions = ({ icon: Icon, title, color, ...props }) => {
  return (
    <>
      <Button {...props} startIcon={<Icon style={{ color }} />}>
        {title}
      </Button>
    </>
  );
};

export default ButtonOptions;
