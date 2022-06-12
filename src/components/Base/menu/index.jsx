import { List, Divider } from "@mui/material";
import { Home } from "@mui/icons-material";
import MenuItem from "./menuItem";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Menu = () => {
  return (
    <>
      <List>
        <MenuItem href="/" text="Home" Icon={Home} />
        <MenuItem href="/cart" text="Cart" Icon={ShoppingCartIcon} />
      </List>
      <Divider />
    </>
  );
};

export default Menu;
