import React,{useContext} from 'react'
import { MyContexts } from './myContext'
function Payment() {
    const {totalAmount}=useContext(MyContexts)
  return (
    <div className='paymentPage'>
        <h5> Gross Total = {totalAmount} </h5>

        <p>Payment Method</p>
       <div className='btns'>< button> UPI</button>
       < button> CREDIT OR DEBIT CARD</button>
       <button> NET BANKING </button></div>
       <br/>
        <br/>

       <form>

        <label>Address</label>
      
        <input placeholder='Enter Your Address'/>
       </form>

    </div>
  )
}

export default Payment