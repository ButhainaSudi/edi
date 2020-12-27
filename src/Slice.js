import React from 'react'

export default function Slice({ slice }) {
    return (
        <>
            <div className = "row block">
                <div className = "column big">
                    ID  <input type = "number" value = {slice.id}/>
                </div>

                <div className = "column small">
                    START  <input type = "number" value = {slice.start}/>
                </div>

                <div className = "column small">
                    END  <input type = "number" value = {slice.end}/>
                </div>

                <div className = "column small">
                    MIN START  <input type = "number" value = {slice.minStart}/>
                </div>

                <div className = "column medium">
                    MIN END  <input type = "number" value = {slice.minEnd}/>
                    <button className = "delete">x</button>
                </div>

            </div>
            <br/>
        </>
    )
}
