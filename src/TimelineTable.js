import React from 'react'
import Slice from './Slice'

export default function TimelineTable({ slices }) {
    return (
        slices.map(slice =>{
            return <Slice key = {slice.id} slice={slice} />
        })
    )
}
