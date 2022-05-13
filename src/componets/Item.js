import React from "react";
import { ListItem, ListItemText} from "@material-ui/core/";
const Item = (props) => {
    return (
        <ListItem>
            <ListItemText 
            primary={props.ItemNAme}
            secondary={props.ItemDetails}
             />
        </ListItem>
    )
}

export default Item;
