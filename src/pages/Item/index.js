import React from 'react';
import Header from '../../componets/common/Header';
import Footer from '../../componets/common/Footer';
import Sanpham from '../../componets/ui/Sanpham';


const Item = () => {

    return (
        <>
            <Header activeMenu={'/Item/'} />
            <Sanpham />
            <Footer />
        </>
    )
}

export default Item