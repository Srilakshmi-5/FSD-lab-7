import { useState } from 'react'
import 'aframe'

function ARScene() {
  return (
    <a-scene xr-mode="ar" embedded>
      <a-box id="box" position="0 0 -0.8" color="#4CC3D9"></a-box>
      <a-entity camera look-controls></a-entity>
    </a-scene>
  )
}

export default function App() {
  const [clr, setClr] = useState('#4CC3D9')

  const toggle = () => {
    setClr(c => (c === '#4CC3D9' ? '#EF2D5E' : '#4CC3D9'))
  }

  // Update A-Frame element
  setTimeout(() => {
    const box = document.querySelector('#box')
    if (box) box.setAttribute('color', clr)
  }, 100)

  return (
    <>
      <button onClick={toggle}>Toggle color</button>
      <ARScene />
    </>
  )
}