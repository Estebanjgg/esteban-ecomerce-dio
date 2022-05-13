import React from "react";
import { connect } from "react-redux";
import { Paper, Grid, Typography, List, makeStyles } from "@material-ui/core/";
import Item from "../componets/Item";
import Card from "../componets/Card";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: "5px",
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
    },
}));
const HomePage = ({ products }) => {
    console.log(products);

    const classes = useStyles();
    return (
        <Grid container spacing={3} className={classes.root}>
            <Grid item xs={3}>
                <Paper className={classes.paper}>
                    <Typography variant="h5">Categorias</Typography>
                    <List>
                        <Item name="Times Nacionais" details="3" />
                        <Item name="Times Internacionais" details="4" />
                        <Item name="Times Historicos" details="5" />
                    </List>
                </Paper>
            </Grid>
            <Grid container xs={9} spacing={3} className={classes.root}>
                {products.map((item) => {
                    return (
                        <Card
                            key={item.id_product}
                            name={item.name_product}
                            price={item.price}
                            image={item.image}
                        >
                            {item.name_product}
                        </Card>
                    )
                })}
            </Grid>
        </Grid>
    )
}

const mapStateToProps = (state) => ({
    products: state.products,
});

export default connect(mapStateToProps)(HomePage);
