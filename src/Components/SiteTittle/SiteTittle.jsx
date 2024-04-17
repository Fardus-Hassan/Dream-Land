import React from "react";
import {Helmet} from "react-helmet";

const SiteTittle = ({title}) => {
    return (
        <Helmet><title>Dream Land | {title}</title></Helmet>
    );
};

export default SiteTittle;