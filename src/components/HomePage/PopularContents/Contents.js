import React from 'react';
import {Card, CardActionArea, Grid, CardContent, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {useSelector} from "react-redux";
import {selectAllContents} from "../../../features/content/contentSlice";

const useStyles = makeStyles((theme) =>({
    grid : {
        display : 'flex',
        flexWrap: 'wrap',
        alignItems: "center",
        justifyContent: 'space-between',
        width : '100%',
        },
    card: {
        width: "45%",
        margin: "10px",
        [theme.breakpoints.down("sm")]: {
            width: "100%",
        }
    }
}))

const Contents = ( {selectedContent, setSelectedContent}) => {
    const contents = useSelector(selectAllContents)
    const classes = useStyles()
    return (
        <Grid className={classes.grid}>
            {contents.map((content, index) =>(
                <Card key={index} className={classes.card} onClick={() => setSelectedContent(content.content)}>
                    <CardContent  >
                        <Typography variant="body2" component="div" sx={{fontSize: "14px"}}>
                            {content.content.length > 80 ? `${content.content.substring(0, 70)}...` : content.content}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
                </Grid>
    );
};

export default Contents;
