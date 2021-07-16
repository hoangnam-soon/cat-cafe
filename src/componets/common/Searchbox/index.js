import React,{useRef} from 'react'
import {TextField, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useOnClickOutside from '../../../hook/useOnClickOutside'



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

        '& input':{
            
            padding : 8,
            margin : '1px 0px',
            borderRadius : 4,
            backgroundColor : 'white'
        }
        
    }
  }));


  

const SearchBox = ({classesProps,closeSearch}) => {

    const refInputSearch = useRef();
    const classes = useStyles();


    useOnClickOutside(refInputSearch, (e) => closeSearch(e));
    return (
        <div ref={refInputSearch} className={classes.searchbox}>
            <TextField id="outlined-basic" classes={{root:classes.colorinput}} placeholder="Nhập tên sản phẩm"/>
            <Button variant="contained" classes={{
                root: classes.MyRootButon,
            }}>Tìm kiếm</Button>
        </div>
    )
}

export default SearchBox