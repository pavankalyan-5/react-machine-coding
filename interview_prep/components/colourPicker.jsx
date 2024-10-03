
import { useState } from 'react'
import './colourPicker.css'

const ColourPicker = () => {
    const [color, setColor] = useState("#000000")
  return (
    <div className='conatiner'>
        <div className='card'>
            <h2>Colour Picker</h2>
            <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
            <div style={{backgroundColor: color, width: '100px', height: '100px'}}></div>
            <p>Selected color: {color}</p>
        </div>
        
    </div>
  )
}

export default ColourPicker
