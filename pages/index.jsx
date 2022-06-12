import { Button, Grid } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import Base from "../src/components/Base";
import HomeCarousel from "../src/components/HomeCarousel";
import MenuItem from "../src/components/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { getAllMenu } from "../src/redux/action/menu";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const menuState = useSelector((state) => state.menu);
  useEffect(() => {
    dispatch(getAllMenu(20, 0));
  }, []);
  useEffect(() => {
    const { table } = router.query;
    if (table !== undefined) {
      sessionStorage.setItem("table", table);
    }
  }, []);
  return (
    <Base title="Home">
      <HomeCarousel />
      <Grid container spacing={3} marginY={3}>
        {menuState.menu.map((item) => {
          return (
            <Grid item key={item._id}>
              <MenuItem menu={item} />
            </Grid>
          );
        })}
      </Grid>
    </Base>
  );
};

export default Home;
