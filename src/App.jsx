import './App.css';
import CustomerForm from './components/customerForm/customerForm';
import CustomerList from './components/customerList/customerList';

function App() {
  return (
    <div className="App">
      <h1>Customer Manage System</h1>
      <CustomerForm />
      <CustomerList />
    </div>
  );
}

export default App;
