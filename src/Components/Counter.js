import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../Redux/slices/CounterSlice';

const Counter = () => {

    const count = useSelector( (state) => state.Counter.value)
    const dispatch = useDispatch();
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'> 
         <button onClick={ () => dispatch(increment())}
         >
            Increment
         </button>
         <br/>
         <br/>

         <div>{count}</div>

         <br/>
         <br/>

         <button onClick={() => dispatch(decrement())}>
            Decrement
         </button>
    </div>
  )
}

export default Counter