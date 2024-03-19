import Button from "../Button/Button"

import { CounterProps } from "./types"
import { CounterWrapper, ButtonControl, Count } from "./styles"

function Counter({ count, onMinus, onPlus }: CounterProps) {
  return (
    <CounterWrapper>
      <ButtonControl>
        <Button name="-" onClick={onMinus} />
      </ButtonControl>
      <Count>{count}</Count>
      <ButtonControl>
        <Button name="+" onClick={onPlus} />
      </ButtonControl>
    </CounterWrapper>
  )
}

export default Counter
