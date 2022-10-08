import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, reset } from "../store/actions/counter"

const Counter = () => {
    const counter = useSelector(state => state.counterReducer)
    const dispatch = useDispatch()
     
    const increase = () => {
        dispatch(increment())
    }

    const decrease = () => {
        dispatch(decrement())
    }

    const resets = () => {
        dispatch(reset())
    }

    return (
        <>
            <h1>Counter:{ counter }</h1>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <button onClick={resets}>Reset</button>
        </>
    )
}

export default Counter