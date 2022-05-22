import React from "react";
import { CloseIcon } from "@chakra-ui/icons";

const RemoveFavourites = () => {
  return (
    <>
      <span className="mr-2">Remove from favourites</span>
      <CloseIcon w={3} h={3} color="red.500" />
    </>
  );
};

export default RemoveFavourites;
