import Counter from "components/Counter/Counter"

import { Homework29Wrapper } from "./styles"

function Homework29() {
  // const [name, setName] = useState<string>("Andrei")
  // setName("Pavel")
  // const [animals, setAnimals] = useState<string[]>(["Cat", "Dog"])
  // console.log(animals)
  // setAnimals(prevValue => {
  //   return [...prevValue, "Rat"]
  // })

  // console.log("Parse float", parseFloat("3.14"))
  // console.log("Parse int", parseInt("3.14"))
  // console.log("Number", Number("3.14"))

  return (
    <Homework29Wrapper>
      <Counter />
    </Homework29Wrapper>
  )
}

export default Homework29
