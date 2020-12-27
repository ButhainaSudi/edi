import { useState, useRef, useEffect } from 'react';
import TimelineTable from './TimelineTable'

const LOCAL_STORAGE_KEY = 'slices'
function App() {
  const [slices, setSlices] = useState([])

  const idRef = useRef()
  const startRef = useRef()
  const endRef = useRef()
  const minStartRef = useRef()
  const minEndRef = useRef()

  useEffect(() => {
    const createdSlices = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))

    // check if any slice is created already
    if(createdSlices) setSlices(createdSlices)
  },[]
  )

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(slices))
  },[slices])

  function handleAddSlice(e){
    const id = idRef.current.value
    const start = startRef.current.value
    const end = endRef.current.value
    const minStart = minStartRef.current.value
    const minEnd = minEndRef.current.value

    //check for empty inputs

    // update slice
    setSlices(oldSlices => {
      return [...oldSlices, {id : id, name : 'Slice 01', start : start, end : end, minStart : minStart, minEnd : minEnd }]
    }

    )

    // give them null after entering value
    // idRef.current.value = null
  }
  return (
    <>
      <br/><br/>
      <TimelineTable slices = {slices}/>
      <div>
        ID  <input type = "number" ref = {idRef}/>
        START  <input type = "number" ref = {startRef}/>
        END  <input type = "number" ref = {endRef}/>
        MIN START  <input type = "number" ref = {minStartRef}/>
        MIN END  <input type = "number" ref = {minEndRef}/>
        <button>Delete</button>
      </div>
      <div>
        <button onClick = {handleAddSlice}>+</button>
      </div>     
    </>
  )
}

export default App;
