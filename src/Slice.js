import React from 'react'

export default function Slice({ slice }) {
    return (
        <div>
            {slice.id}
            {slice.name}
            {slice.start}
            {slice.end}
            {slice.minStart}
            {slice.minEnd}
        </div>
    )
}
