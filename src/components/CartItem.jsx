import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useSelector, useDispatch } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { updateQuantityToCart } from "../redux/action/cart";
const CartItem = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);

  const handleQuantityChange = (item, qty) => {
    dispatch(updateQuantityToCart({ item, qty }));
  };
  return cartState.map((cartItem) => {
    if (!cartItem) return null;
    const { item } = cartItem;
    return (
      <Card sx={{ display: "flex", my: 2 }} key={item._id}>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <img height="100em" src={item.image[0]} />
          </CardContent>
          <Box sx={{ display: "flex", pl: 1, pb: 1, flexDirection: "column" }}>
            <Typography variant="h6" fontSize={18}>
              {item.name}
            </Typography>
            <Typography variant="h6" fontSize={15}>
              {" "}
              ₹ {cartItem.qty * item.price}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
              <IconButton
                aria-label="Remove"
                onClick={() => handleQuantityChange(item, -1)}
              >
                <RemoveIcon />
              </IconButton>
              <Typography>{cartItem.qty}</Typography>
              <IconButton
                aria-label="Add"
                onClick={() => handleQuantityChange(item, 1)}
              >
                <AddIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Card>
    );
  });
};

export default CartItem;
