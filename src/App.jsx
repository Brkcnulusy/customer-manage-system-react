import { useState } from 'react';
import './App.css';
import CustomerForm from './components/customerForm/customerForm';
import CustomerList from './components/customerList/customerList';

function App() {
  const [customers, setCustomers] = useState([]);
  const addNewCustomer = (newCustomer) => {
    setCustomers([...customers, newCustomer]);
  }
  return (
    <div className="App">
      <h1>Customer Manage System</h1>
      <CustomerForm addNewCustomer={addNewCustomer} />
      <CustomerList  customers={customers} setCustomers={setCustomers} />
    </div>
  );
}

export default App;
