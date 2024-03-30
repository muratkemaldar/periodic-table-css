import { useEffect, useState } from "react"

const colorMap = {
  "noble gas": "#FFBC42",
  "alkaline earth metal": "#EC674E",
  "diatomic nonmetal": "#D81159",
  "alkali metal": "#8F2D56",
  "transition metal": "#58586B",
  "post-transition metal": "#218380",
  lanthanide: "#4AABAF",
  metalloid: "#73D2DE",
};

export default function Home() {
  const [elementos, setElementos] = useState([])

  useEffect(() => {
    fetch("/api/elementos")
      .then(res => res.json())
      .then(data => setElementos(data))
  }, [])

  const elementosList = [... new Set(elementos.map((e)=>e.tipo))]

  return (
    <h2>{elementosList.map((elementoNome)=>(
      <div className="periodic-table">
        {elementos.filter(e=>e.tipo == elementoNome).map(element=>(
          <div
          className="element"
          key={element.name}
          style={{
            gridRow: element.ypos,
            gridColumn: element.xpos,
            borderColor: colorMap[element.category],
          }}
        >
          <strong>{element.symbol}</strong>
          <small className="number">{element.number}</small>
          <small className="name">{element.name}</small>
        </div>
        ))}
      </div>
    ))}</h2>
  )
}

