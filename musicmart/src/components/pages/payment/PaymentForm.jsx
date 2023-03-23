import React, { useState } from 'react'
// import { handlePayment } from '../../../routes/paystack/PaystackPayment'

// import Button from "react-bootstrap/Button"
// import "bootstrap/dist/scss/bootstrap.min.scss"
import "../payment/PaymentForm"

import { Button, Form } from 'react-bootstrap';

import 'bootstrap/scss/bootstrap.scss';

import PaystackPop from '@paystack/inline-js';

const PaymentForm = () => {

//    const [data, setData] = useState([])
//    const handleChange = (e) => {
//     setData({
//         ...data,
//         [e.target.name]: e.target.value
        
//     })
//    }
//    const handleSubmit = (e) => {
//     e.preventDefault();
//     handlePayment(data.email, parseFloat(data.amount));
//   }



const [email, setEmail] = useState("")
const [amount, setAmount] = useState("")
const [firstName, setFirstName] = useState("")
const [lastName, setLastName] = useState("")


const payWithPaystack =(e)=>{
    e.preventDefault();

    const paystack = new PaystackPop()
    paystack.newTransaction({
        key: "pk_test_7cc7226cf3c66dd800bf0a080a67a3a43d1d5e64",
        amount: amount * 100,
        email,
        firstName,
        lastName,
        onSuccess(transaction){
            const message = `Payment Completed! Reference ${transaction.reference}`
            alert(message);
            setEmail("");
            setAmount("");
            setFirstName("");
            setLastName("");

        },

        onCancel(){
            alert("You have Cancelled the transaction, close transaction page.")
        }
    })
}


    

  return (
    <div>
        <form>

            {/* <div class="form-group">
                <label for="email">Email Address</label>
                <input type="email"  required onChange={handleChange}/>
            </div>
            <div class="form-group">
                <label for="amount">Amount</label>
                <input type="tel" required onChange={handleChange}/>
            </div> */}



            {/* <div class="form-group">
                <label for="first-name">First Name</label>
                <input type="text"  onChange={handleChange}/>
            </div>
            <div class="form-group">
                <label for="last-name">Last Name</label>
                <input type="text" onChange={handleChange}/>
            </div> */}



            {/* <div class="form-submit">
                <button type="submit" > Pay </button>
            </div> */}
        </form>



{/* 
        <form id="paymentForm" onSubmit={payWithPaystack}>
            <div class="form-group">
                <label for="email">Email Address</label>
                <input type="email" id="email-address" value={email} required onChange={(e)=> setEmail(e.target.value)}/>
            </div>
            <div class="form-group">
                <label for="amount">Amount</label>
                <input type="tel" id="amount" value={amount} required onChange={(e)=> setAmount(e.target.value)}/>
            </div>
            <div class="form-group">
                <label for="first-name">First Name</label>
                <input type="text" id="first-name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
            </div>
            <div class="form-group">
                <label for="last-name">Last Name</label>
                <input type="text" id="last-name" value={lastName} onChange={(e) =>  setLastName(e.target.value)}/>
            </div>
            <div class="form-submit">
                
                <Button type="submit" onclick={ payWithPaystack }> Pay </Button>
            </div>
        </form> */}

        <div className="musicmart">
            <h1>musicmart.</h1>
        </div>

        <Form id="paymentForm" onSubmit={payWithPaystack} className="custom-form">
            <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" value={email} required onChange={(e)=> setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="amount">
                <Form.Label>Amount</Form.Label>
                <Form.Control type="tel" value={amount} required onChange={(e)=> setAmount(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </Form.Group>
            <br />
            <div className="form-submit">
                <Button type="submit" onClick={payWithPaystack}>Pay</Button>
            </div>
</Form>
    </div>
  )
}

export default PaymentForm;
