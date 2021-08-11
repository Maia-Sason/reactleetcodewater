const Explain = ({minResult, maxResult, array, total, distance}) => {
  return (
    <>
    <div>
      <h1>Answer</h1>
      <div>
      {minResult > -1 ? 
      <div><p>The two walls are a[{minResult}]({array[minResult]}), and a[{maxResult}]({array[maxResult]}),
        the reason being is that the product of the lowest
        wall with the distance ({distance}) between the two walls outputs
      a total of {total}.</p>
      <h4> {array[minResult]} x {distance} = {total}</h4>
      </div> :
      <p>There is no answer because there aren't enough walls!</p>
      }
      </div>
    </div>
    </>
  )
}

export default Explain;