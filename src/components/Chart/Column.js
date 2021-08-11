import { useEffect, useState } from "react";
import { createPortal } from "react-dom";



export default function Column({minY, maxY}) {
  const [arrayY, setArrayY] = useState([]);
  const [useMinMax, setUseMinMax] = useState(false);

  const mapY = (minY, maxY) => {
    console.log(minY);
    for (let i = maxY; i >= minY; i--) {
      setArrayY(arrayY => [...arrayY, i]);
    }
  }
  
  useEffect(() => {
    setArrayY([]);
    mapY(minY, maxY);
  }, [minY, maxY]);

  useEffect(() => {
    console.log(arrayY.length);
    if (arrayY.length > 27) {
      setUseMinMax(true);
    } else {
      setUseMinMax(false);
    }
  }, [arrayY]);

  const columnList = (
    arrayY.map((int) => {
      return (
      <>
      <li className="col-item">
        {int}
      </li>
      </>
      )
    })
  )

  const minMax = (
    <>
    <li className="col-item">
        {maxY}
      </li>
    <li className="col-item">
        {minY}
    </li>
    </>
  )

  return (
  <>
  <div>
  <ul className="min-max">
    {useMinMax ? minMax : columnList}
  </ul>
  </div>
  </>
  )
}