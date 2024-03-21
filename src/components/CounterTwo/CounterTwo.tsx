import { useState } from "react"
import { CounterWrapper, ValueContainer, Value, ButtonControl } from "./styles"

function CounterTwo() {
  const [count, setCount] = useState<number>(0)

  const Increment = () => {
    setCount(prevValue => prevValue + 1)
  }
  const Descriment = () => {
    setCount(prevValue => prevValue - 1)
  }
  const Multiply = () => {
    setCount(prevValue => prevValue * 2)
  }

  const Divide = () => {
    if (count !== 0) {
      setCount(prevValue => parseFloat((prevValue / 2).toFixed(2)))
    }
  }

  return (
    <CounterWrapper>
      <ButtonControl onClick={Divide}>/2</ButtonControl>
      <ButtonControl onClick={Descriment}>-</ButtonControl>
      <ValueContainer>
        <Value>{count}</Value>
      </ValueContainer>
      <ButtonControl onClick={Increment}>+</ButtonControl>
      <ButtonControl onClick={Multiply}>x2</ButtonControl>
    </CounterWrapper>
  )
}

export default CounterTwo
