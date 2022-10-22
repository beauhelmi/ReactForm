// MAIN page 
import { useState } from 'react';
import './App.css';
import FormInput from './components/FormInput';

const App = () => {
  const [values, setValues] = useState({
    cardNumber: "",
    PIN: "",
    accountNumber: "",
    confirmAccountNumber: "",
  });

  const inputs = [
    {
      id: 1,
      name: "cardnumber",
      type: "number",
      placeholder: "Ex 1111222233334444",
      errorMessage: '"Card No" is your Debit/Credit Card Number',
      label: "Card Number",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "pinnumber",
      type: "password",
      placeholder: "Enter 6-digit PIN number",
      errorMessage: "Maximum 3 times trial only,excessive amount of try will result in card being blocked",
      label: "Pin Number",
      required: true,
    },
    {
      id: 3,
      name: "accountnumber",
      type: "number",
      placeholder: "Ex. 111122223333",
      errorMessage: "Your Current/Savings Account number",
      label: "Account Number",
      pattern: "^(0|[1-9][0-9]*)$",
      required: true,
    },
    {
      id: 4,
      name: "confirmAccountNumber",
      type: "number",
      placeholder: "Confirm Account Number",
      pattern: values.accountNumber,
      label: "Confirm Account Number",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Verifying your Access Number and Pin')
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values);
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
      <h1>Ready to create an account?</h1>
      <p>Before we create your account, <br />
      let us verify your access number and pin.</p>
        {inputs.map((input) => (
          <FormInput key={input.id} {...input} value={values[input.name]} 
          onChange={onChange} />
        ))}

        <button>Continue</button>
      </form>
    </div>
  );
}

export default App;
