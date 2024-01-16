import "./customerForm.css";

function customerForm() {
  return (
    <form className="customer-form">
      <input
        type="text"
        className="customer-input"
        placeholder="Add a new customer."
      />
      <button className="customer-button">+</button>
    </form>
  );
}

export default customerForm;
