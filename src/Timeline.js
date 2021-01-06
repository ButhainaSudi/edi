import React from 'react'

export default function Timeline() {
    return (
        
        <div className = "row bigblock">
            Selected Channels
            <br/><br/><br/>
            <div className = "grid">
                <div className = "bar" style = {{width: (100/60 * 6) + '%'}}></div>
                <div className = "space" style = {{width: (100/60 * 6) + '%'}}></div>
                <div className = "bar" style = {{width: (100/60 * 6) + '%'}}></div>
                <div className = "space" style = {{width: (100/60 * 2) + '%'}}></div>
                <div className = "bar" style = {{width: (100/60 * 6) + '%'}}></div>
                <div className = "space" style = {{width: (100/60 * 3) + '%'}}></div>
                <div className = "bar" style = {{width: (100/60 * 6) + '%'}}></div>
                <div className = "space" style = {{width: (100/60 * 2) + '%'}}></div>
                <div className = "bar" style = {{width: (100/60 * 6) + '%'}}></div>
                <div className = "space" style = {{width: (100/60 * 4) + '%'}}></div>
                <div className = "bar" style = {{width: (100/60 * 6) + '%'}}></div>
            </div>
            <div className = "row">
                <div className = "column xlabel">10:00</div>
                <div className = "column xlabel">10:05</div>
                <div className = "column xlabel">10:10</div>
                <div className = "column xlabel">10:15</div>
                <div className = "column xlabel">10:20</div>
                <div className = "column xlabel">10:25</div>
                <div className = "column xlabel">10:30</div>
                <div className = "column xlabel">10:35</div>
                <div className = "column xlabel">10:40</div>
                <div className = "column xlabel">10:45</div>
                <div className = "column xlabel">10:50</div>
                <div className = "column xlabel">10:55</div>
                <div className = "column xlabel">11:00</div>
            </div>
            <div className = "row">
                <h6 align = "center">TIME</h6>
            </div>
        </div>
    )
}
