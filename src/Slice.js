import React from 'react'

export default function Slice({ slice }) {

    return (
        <>
            
            <div className = "row block">
                
                <div className = "column big">
                    ID  <input type = "number" value = {slice.id}/>
                </div>

                <div className = "column small">
                    START  <input type = "time" value = {slice.start}/>
                </div>

                <div className = "column small">
                    END  <input type = "time" value = {slice.end}/>
                </div>

                <div className = "column small">
                    MIN START  <input type = "text" value = {(slice.minStart * 100) + '%'}/>
                </div>

                <div className = "column medium">
                    MIN END  <input type = "text" value = {(slice.minEnd * 100) + '%'}/>
                    <button className = "delete">x</button>
                </div>


            </div>
            <br/>
        </>
    )
}
