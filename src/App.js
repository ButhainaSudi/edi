import { useState, useRef, useEffect } from 'react';
import TimelineTable from './TimelineTable';
import './App.css';
import Timeline from './Timeline';

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
    idRef.current.value = null
    startRef.current.value = null
    endRef.current.value = null
    minStartRef.current.value = null
    minEndRef.current.value = null
  }
  return (
    <>
      <br/><br/>
      <div>
        <Timeline>
        </Timeline>
      </div>
      <br/><br/>
      <div>
      <TimelineTable slices = {slices}/>
      <div className = "row block">
        <div className = "column big">
          ID  <input type = "number" ref = {idRef}/>
        </div>

        <div className = "column small">
          START  <input type = "number" ref = {startRef}/>
        </div>

        <div className = "column small">
          END  <input type = "number" ref = {endRef}/>
        </div>

        <div className = "column small">
          MIN START  <input type = "number" ref = {minStartRef}/>
        </div>

        <div className = "column small">
          MIN END  <input type = "number" ref = {minEndRef}/>
        </div>

      </div>   
      <div>
        <br/>
        <button onClick = {handleAddSlice} className = "block">+</button>
      </div>
      </div>   
    </>
  )
}

export default App;
