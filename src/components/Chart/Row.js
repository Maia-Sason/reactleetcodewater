import { useEffect, useState } from "react";

export default function Row({maxX, array, maxY, maxResult, minResult}) {
  const [arrayX, setArrayX] = useState([])

  const mapX = (maxX) => {
    for (let i = 0; i <= maxX; i++) {
      setArrayX(arrayX => [...arrayX, i]);
    }
  }
  
  useEffect(() => {
    setArrayX([]);
    mapX(maxX);
  }, [maxX]);

  const rowList = (
    arrayX.map((int) => {
      const heightItem = (array[int]/maxY) * 500;
      return ( 
      <>
      <li>
        <span className="row-item">
        {(int === maxResult || int === minResult) ? 
          <div data-height={array[int]} style={{height: `${heightItem}px`, backgroundColor: "red"}}>{array[int]}</div> :
          <div data-height={array[int]} style={{height: `${heightItem}px`}}>{array[int]}</div>
        }

        {int}
        </span>
      </li>
      </>
      )
    })
  )

  return (
    <>
    <div>
    <ul className="row">
      {rowList}
    </ul>
    </div>
    </>
  )
}