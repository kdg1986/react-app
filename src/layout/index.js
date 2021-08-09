import React from 'react';
import Left from "./left"
import {Page1,Page2} from '@/page';


const Root = () => {
    return (
        <>
            <div><Left/></div>            
            <div>
                content<br/>
                <Page1/>

            </div>
        </>
    )
}


export default Root;