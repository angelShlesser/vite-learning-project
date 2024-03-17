import { useState } from "react"
import Counter from "../../components/Counter/Counter"
import { CounterProps } from "../../components/Counter/types"

function Homework29() {
  const [count, setCount] = useState(0) // Инициализация состояния счетчика

  // Функции для увеличения и уменьшения счетчика
  const onMinus = () => {
    setCount(prevCount => prevCount - 1)
  }

  const onPlus = () => {
    setCount(prevCount => prevCount + 1)
  }

  // Пропсы для компонента Counter
  const counterProps: CounterProps = {
    count: count, // Текущее значение счетчика
    onMinus: onMinus, // Функция уменьшения счетчика
    onPlus: onPlus, // Функция увеличения счетчика
  }

  return (
    <div>
      {/* Рендер компонента Counter с прокинутыми пропсами */}
      <Counter {...counterProps} />
    </div>
  )
}

export default Homework29
