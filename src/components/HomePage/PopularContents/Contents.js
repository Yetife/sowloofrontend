import React from 'react';
import {Card, CardActionArea, CardActions, CardContent, Typography} from "@mui/material";
import Divider from "@mui/material/Divider";
import {makeStyles} from "@mui/styles";
import Button from "@mui/material/Button";

const useStyles = makeStyles(() =>({
    card: {
        width: '25%',
        height: "150px",
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        // flexWrap: 'wrap',
        margin: '15px',
    },
    content : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'left',
        fontSize: '14px',
        padding: '5px 15px',
        width: '100%',
    },
}))

const Contents = ({content}) => {
    const classes = useStyles()
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardContent >
                    <Typography variant="body2" component="div" sx={{fontSize: "16px"}}>
                        {content.content.substr(0, 80) + '...'}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{display: 'flex', justifyContent: 'space-between', textAlign: 'left'}}>
                {/*<div >*/}
                <Button size="small" sx={{fontSize: '16px', color: '#140342', fontWeight: '700', textTransform: 'capitalize'}}>
                  Goal: {content.marketingGoals}
                </Button>
                <Button size="small" sx={{fontSize: '16px', color: '#140342', fontWeight: '700', textTransform: 'capitalize'}}>
                   Industry: {content.industry}
                </Button>
                <Button size="small" sx={{fontSize: '16px', color: '#140342', fontWeight: '700', textTransform: 'capitalize'}}>
                    Words: {content.wordCount}
                </Button>
                {/*</div>*/}
            </CardActions>
        </Card>
    );
};

export default Contents;