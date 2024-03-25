// import { useState } from "react"
// Импортируем useAppDispatch- чтобы создать dispatch ф-ю
// Импортируем useAppSelector- чтобы достать данные из redux стора
import { useAppDispatch, useAppSelector } from "store/hooks"
// Импортиуем экшены counterSliceActions, чтобы сделать dispatch(action)
// Импортируем counterSliceSelectors, чтобы забрать selectors
import {
  counterSliceActions,
  counterSliceSelectors,
} from "store/redux/counter/counterSlice"
import Button from "components/Button/Button"

import { CounterWrapper, ButtonControl, Count } from "./styles"

function Counter() {
  //////////////////////////////////////////////////////////////
  // Контроль компонта через useState()
  // Локальное хранилище для count
  // const [count, setCount] = useState<number>(0)

  // const onMinus = () => {
  //   setCount(prevValue => prevValue - 1)
  // }

  // const onPlus = () => {
  //   setCount(prevValue => prevValue + 1)
  // }

  // const onMultiply = () => {
  //   setCount(prevValue => Number((prevValue * 2).toFixed(2)))
  // }

  // const onDivide = () => {
  //   setCount(prevValue => Number((prevValue / 2).toFixed(2)))
  // }
  /////////////////////////////////////////////////////////////////

  // Создаем функцию dispatch, котрая будет диспатчить action
  const dispatch = useAppDispatch()
  // Заюираем значение count из стора
  const count = useAppSelector(counterSliceSelectors.count)

  const onPlus = () => {
    dispatch(counterSliceActions.add())
  }

  const onMinus = () => {
    dispatch(counterSliceActions.minus())
  }

  const onMultiply = () => {
    dispatch(counterSliceActions.multiply(5))
  }

  const onDivide = () => {
    dispatch(counterSliceActions.divide(4))
  }

  return (
    <CounterWrapper>
      <ButtonControl>
        <Button name="/" onClick={onDivide} />
      </ButtonControl>
      <ButtonControl>
        <Button name="-" onClick={onMinus} />
      </ButtonControl>
      <Count>{count}</Count>
      <ButtonControl>
        <Button name="+" onClick={onPlus} />
      </ButtonControl>
      <ButtonControl>
        <Button name="*" onClick={onMultiply} />
      </ButtonControl>
    </CounterWrapper>
  )
}

export default Counter
