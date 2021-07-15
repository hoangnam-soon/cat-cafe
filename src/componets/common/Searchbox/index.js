import React from 'react'
import {TextField, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    MyRootButon: {
        backgroundColor: '#f26a19',
        color : 'white',
    },
    searchbox: {
        position: "absolute",
        top: "60px",
        zIndex: 1300,
        right: "210px"
    },
    colorinput : {
        color : 'white'
    }
  }));

const SearchBox = ({classesProps}) => {
    const classes = useStyles();
    return (
        <div className={classes.searchbox}>
            <TextField id="outlined-basic" className={classes.colorinput} placeholder="Nhập tên sản phẩm"/>
            <Button variant="contained" classes={{
                root: classes.MyRootButon,
            }}>Tìm kiếm</Button>
        </div>
    )
}

export default SearchBox