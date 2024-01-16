import { useState } from "react";
import "./customerForm.css";

function CustomerForm({ addNewCustomer }) {
  const [customerName, setCustomerName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCustomer = {
      id: Math.random(),
      customerName,
    }
    addNewCustomer(newCustomer);
    setCustomerName("");
  }

  return (
    <form className="customer-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="customer-input"
        placeholder="Add a new customer."
        onChange={(e)=> setCustomerName(e.target.value)}
        value={customerName}
      />
      <button className="customer-button">+</button>
    </form>
  );
}

export default CustomerForm;
