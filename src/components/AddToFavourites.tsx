import React from "react";
import { AddIcon } from "@chakra-ui/icons";

const AddFavourites = () => {
  /* TODO: Change icon to a heart icon*/
  return (
    <>
      <span className="mr-2">Add to Favourites </span>
      <AddIcon w={3} h={3} />
    </>
  );
};

export default AddFavourites;
