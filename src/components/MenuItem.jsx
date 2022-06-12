import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Grid } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import veg from "../../public/veg.svg";
import nonVeg from "../../public/non-veg.jpg";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/action/cart";
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const MenuItem = ({ menu }) => {
  const [expanded, setExpanded] = React.useState(false);
  const dispatch = useDispatch();
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleAddToCart = (item) => {
    dispatch(addToCart({ item, qty: 1 }));
  };
  return (
    <Card sx={{ maxWidth: 345 }} key={menu._id}>
      <CardMedia
        component="img"
        height="194"
        image={menu?.image[0]}
        alt={menu?.name}
      />
      <CardContent>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item flexDirection="row" display="flex" alignItems="center">
            <Typography variant="h6" marginRight={1}>
              {menu.name}
            </Typography>
            {menu.isVeg ? (
              <img src={veg.src} width={20} />
            ) : (
              <img src={nonVeg.src} width={18} />
            )}
          </Grid>
          <Grid item>
            <Typography variant="body1">₹{menu.price}</Typography>
          </Grid>
        </Grid>
        <Typography variant="caption">
          {menu.description.split(" ").slice(0, 9).join(" ")}...
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton
          aria-label="share"
          onClick={(e) => {
            handleAddToCart(menu);
          }}
        >
          <AddShoppingCartIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent></CardContent>
      </Collapse>
    </Card>
  );
};
export default MenuItem;
