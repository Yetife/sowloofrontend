import React from 'react';
import {
    Avatar,
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Grid, makeStyles,
    Typography
} from "@material-ui/core";
import {TextsmsSharp, Timer} from "@mui/icons-material";
import {categories} from "../../../data";
//

const useStyles = makeStyles((theme) => ({
    stackrow: {
        marginBottom: theme.spacing(5),
        marginTop: theme.spacing(5),
    },
    post: {
        outline: "0 solid transparent",
        fontFamily: "Sora",
    },
    button: {
        color: "#160647",
        fontSize: 11,
        size: 'small',
    },

    pageLinkClassName: {
        color: "#160647",

    },

    content : {
        display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '10px 0px',
        width: '100%',
    },
    icon: {
        maxHeight: "249px"
        //background: '#EEF2F6',
        //borderRadius: '80px',
        //padding: '15px',
        //right: '20px',
        // '&:hover': {
        //     background: '#6440FB'
        // }
    },
    camphead: {
        textAlign: "left",
        fontSize: "16px",
        fontWeight: '500',
        lineHeight: '28px',
        color: "#140342",
    },
    campsub: {
        textAlign: "left",
        fontSize: "13px",
        color: "#4F547B",
    },
    avatar: {
        width: '20px',
        height: '20px',
    },
    days: {
        fontSize: '12px',
    },
    avatartext: {
        fontSize: '10px',
    },
    amount: {
        fontSize: '16px',
        fontWeight: '500',
        alignItems: 'right',
        justifyContent: 'center',
        position: 'relative',
        left: '40px',
        color: '#140342',
        // [theme.breakpoints.down("sm")]: {
        //     position: 'relative',
        //     left: '10px',
        // },
    },

}));


const Campaigns = () => {
    // const categories = useSelector(selectAllContents)
    const classes = useStyles();
    return (
        <Grid container spacing={2} className={classes.stackrow}>

            {
                categories.map(category =>
                    (
                        <Grid item xs={12} md={3} key={category.id}>

                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        style={{height: '250px'}}
                                        alt="green iguana"
                                        // height="140"
                                        //src={category.icon}
                                        image={category.icon}
                                        className={classes.icon}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" className={classes.camphead}>
                                            {category.name.length > 50 ? `${category.name.substring(0, 50)}...` : category.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" className={classes.campsub}>
                                            {category.content}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Timer sx={{ fontSize: 16 }}/>
                                    <Button className={classes.days} >30 Days</Button>
                                    <TextsmsSharp sx={{ fontSize: 16 }}/>
                                    <Button className={classes.days}>24 contents</Button>
                                </CardActions>
                                <div style={{borderTop: '0.5px solid #bfbfbf', width: '80%', alignItems: 'center', margin: '0 auto'}}></div>
                                <CardActions >
                                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" className={classes.avatar} />
                                    <Button className={classes.avatartext}>Solomon Archibong</Button>
                                    <Typography align="right" className={classes.amount}>₦ 15,000</Typography>
                                </CardActions>
                            </Card>

                        </Grid>
                    ))
            }
        </Grid>
    );
};

export default Campaigns;