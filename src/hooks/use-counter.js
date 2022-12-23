import { useEffect, useState } from "react"


// const useCounter = () => {

//   const [counterF, setCounterF] = useState(0)
//   const [counterB, setCounterB] = useState(0)

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCounterB((prevCounter) => prevCounter - 1)
//     }, 1000)

//     return () => clearInterval(interval);
//   }, [])

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCounterF((prevCounter) => prevCounter + 1)
//     }, 1000)

//     return () => clearInterval(interval);
//   }, [])

//   return [counterF, counterB];
// }

const useCounter = (forwards = true) => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + (forwards ? 1 : -1))
    }, 1000)

    return () => clearInterval(interval);
  }, [forwards])

  return counter;
}

export default useCounter