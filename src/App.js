import React, { useState } from "react"
import ColorData from "./data/color-data.json"
import ColorList from "./components/ColorList"

export default function App() {
  const [colors, setColors] = useState(ColorData)
  return (
    <ColorList
      colors={colors}
      onRateColor={(id, rating) => {
        const newColors = colors.map(color =>
          color.id === id ? { ...color, rating } : color
        )
        setColors(newColors)
      }}
      onRemoveColor={id => {
        const newColors = colors.filter(color => color.id !== id)
        setColors(newColors)
      }}
    />
  )
}
