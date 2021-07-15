import React from 'react';
import Header from '../../componets/common/Header';
import Footer from '../../componets/common/Footer';
import Phukien from '../../componets/ui/Phukien';


const Petitem = () => {

    return (
        <>
            <Header activeMenu={'/Pet-item/'} />
            <Phukien />
            <Footer />
        </>
    )
}

export default Petitem