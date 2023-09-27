//import { useState } from "react";
import React from 'react';

const RenderInfo = function({info}){
    console.log("Rendering Contact Information Now")
    return(
        <div id="ContactSection">
            <h1>{info.userName}</h1>
            <div id="info_details">
                <div>{info.phone}</div>
                <div>{info.email}</div>
                <div>{info.address}</div>
            </div>
        </div>
    )
  }

export default RenderInfo