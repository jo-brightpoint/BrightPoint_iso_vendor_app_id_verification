import React from "react";

const Footer =() =>{
    return(
        <div className="py-12 flex flex-col justify-center items-center ">
            <p className="text-bpc-navy">2020 © BrightPoint Capital, Inc.</p>
            <div className="w-48 py-10 flex justify-between items-center">
                <img src={require("../images/group-87.svg")} alt="group87"/>
                <img src={require("../images/group-88.svg")} alt="group88"/>
            </div>
        </div>
    )
}

export default Footer;