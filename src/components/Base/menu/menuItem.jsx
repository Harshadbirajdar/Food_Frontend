import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Link from "next/link";

const MenuItem = ({ text, Icon, href }) => {
  return (
    <Link href={href} passHref>
      <ListItem key={text} disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <Icon />
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default MenuItem;
