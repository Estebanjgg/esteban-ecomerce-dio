import React from "react";
import { Paper, Grid, Typography, Button, makeStyles } from "@material-ui/core/";
import { useSelector } from 'react-redux';
 
const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
    },
}));
const Card = ({name, price,  image, children}) => {
    const cart = useSelector(state => state.cart.value ) 
    const classes = useStyles();

    let qtd = cart
    const Add = () => {
        qtd = qtd + 1
        console.log(qtd)
    }

    return (
        <Grid item xs={3}>
            <Paper className={classes.paper}>
                <Grid container direction="column">
                    <Grid item>
                        <img width="140px" src={image}alt={name}/>
                        <Typography variant="h6">{children}</Typography>
                        <Typography variant="subtitle1">R${price}</Typography>
                    </Grid>
                    <Button 
                    variant="contained"
                    onClick={Add}
                    >
                        Adicionar
                        </Button>
                </Grid>
            </Paper>
        </Grid>
    );
};

export default Card;
