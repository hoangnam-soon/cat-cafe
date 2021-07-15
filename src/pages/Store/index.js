import React from 'react';
import Header from '../../componets/common/Header';
import Footer from '../../componets/common/Footer';
import Storescreen from '../../componets/ui/Storescreen';


const Store = () => {

    return (
        <>
            <Header activeMenu={'/Store/'}  />
            <Storescreen />
            <Footer />
        </>
    )
}

export default Store