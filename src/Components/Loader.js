import React from "react";
import "./styles/Loader.css"

export default function Loader(props) {
    // if(props.showLoader){
    return (
        <div className="loaderCont" style={{top:`${props.top}px`}}>
            <div className="subCont">
                <div class="block"></div>
                <div class="block"></div>
                <div class="block"></div>
                <div class="block"></div>
                <div class="block"></div>
                <div class="block"></div>
                <div class="block"></div>
                <div class="block"></div>
                <div class="block"></div>
                <div class="block"></div>
                <div class="block"></div>
                <div class="block"></div>
                <div class="block"></div>
                <div class="block"></div>
                <div class="block"></div>
                <div class="block"></div>
            </div>
        </div>
    );
}
