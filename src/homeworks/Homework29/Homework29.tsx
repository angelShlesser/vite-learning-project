import { useState } from "react"
import Counter from "../../components/Counter/Counter"
import { Homework29Wrapper } from "./styles"

function Homework29() {
  const [count, setCount] = useState<number>(0) // Инициализация состояния счетчика

  // Функции для увеличения и уменьшения счетчика
  const onMinus = () => {
    setCount(prevCount => prevCount - 1)
  }

  const onPlus = () => {
    setCount(prevCount => prevCount + 1)
  }

  return (
    <Homework29Wrapper>
      {/* Рендер компонента Counter с прокинутыми пропсами */}
      <Counter count={count} onMinus={onMinus} onPlus={onPlus} />
    </Homework29Wrapper>
  )
}

export default Homework29
