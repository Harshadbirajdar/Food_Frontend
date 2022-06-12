import React, { useEffect } from "react";

import { Paper } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../redux/action/category";
const HomeCareousel = () => {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getAllCategories());
    console.log(list);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        overflowX: "auto",
        justifyContent: "space-evenly",
      }}
    >
      {list.map((item) => (
        <Paper
          style={{
            padding: "0.2em 1em",
            margin: "0.2em ",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
            minWidth: "8em",
            maxWidth: "8em",
          }}
        >
          <img width="38px" src={item.image} alt="" />
          <p style={{ margin: 0 }}>{item.name}</p>
        </Paper>
      ))}
    </div>
  );
};

export default HomeCareousel;
