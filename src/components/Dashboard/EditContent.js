import React, {useEffect, useState} from 'react';
import {Button, Grid, TextareaAutosize} from "@mui/material";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    imgHolder: {
        marginTop: '10px',
        width: '500px',
        height: '300px',
        objectFit: 'cover',
        textAlign: 'center',
        border: '1px solid black',
        },
   button: {
       width: '200px',
       backgroudColor: 'white',
       border: '1px solid black',
       marginTop: '30px',
       padding: '10px 250px'
   },
    btn: {
        width: '100px',
        backgroudColor: 'white',
        border: '1px solid black',
        marginTop: '30px',
        // padding: '10px 250px'
        }

}));

const EditContent = ({setSelectedContent, selectedContent}) => {
    const classes = useStyles();

   //  const [profileImg, setProfileImage] = useState('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png');
   //
   // const imageHandler = (e) => {
   //      const reader = new FileReader();
   //      reader.onload = () =>{
   //          if(reader.readyState === 2){
   //              setProfileImage({profileImg: reader.result})
   //          }
   //      }
   //      reader.readAsDataURL(e.target.files[0])
   //  };

    const [state, setState] = useState({file: '', imagePreviewUrl: ''})
   const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("handle uploading", state.file)
    }

   const handleImageChange = (e) => {
       e.preventDefault();
       let reader = new FileReader();
       let file = e.target.files[0];

       reader.onloadend = () => {
           setState({
                   file: file,
               imagePreviewUrl: reader.result
               })
       }
       reader.readAsDataURL(file)
   }

    let {imagePreviewUrl} = state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
        $imagePreview = (<img src={imagePreviewUrl}  alt={""} className={classes.imgHolder}/>)
    }else {
        $imagePreview = (<div className={classes.imgHolder}>Please select an image</div>)
    }
    return (
            <Grid container sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 0}}>
                <Grid item >
                    <div >
                        {$imagePreview}
                    </div>
                    {/*<img src={profileImg} alt="" id="img"  className={classes.imgHolder} />*/}
                    <form onSubmit={(e)=> handleSubmit(e)}>
                        <input type={"file"} onChange={(e) => handleImageChange(e)} />
                        <button className={classes.btn} type={"submit"} onClick={(e) => handleSubmit(e)}>
                            Upload Image
                        </button>
                    </form>
                </Grid>
                <Grid item>
                    <TextareaAutosize
                        maxRows={4}
                        aria-label="maximum height"
                        placeholder="Maximum 4 rows"
                        value={selectedContent}
                        style={{ width: 500, height: 150 }}
                        onChange={e => setSelectedContent(e.target.value)}
                    />
                </Grid>

                <Button variant="outlined" className={classes.button} sx={{
                    border: '1px solid black',
                    marginTop: '30px',
                    padding: '10px 250px'}}
                    >Schedule</Button>
                <Button variant="outlined" className={classes.button} sx={{
                    border: '1px solid black',
                    marginTop: '30px',
                    padding: '10px 250px'}}>Publish</Button>
            </Grid>
    );
};

export default EditContent;