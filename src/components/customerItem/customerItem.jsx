import './customerItem.css';

const CustomerItem = ({customer, handleDelete}) => {
  return (
    <li className="customer-item">
      <div className="customer-info">
        <img
          className="customer-avatar"
          src="https://i.pravatar.cc/300"
          alt="image"
        />
        <span className="customer-name">{customer.customerName}</span>
      </div>
      <button className="delete-info" onClick={()=>handleDelete(customer)}>
        <i className="fa-solid fa-trash"></i>
      </button>
    </li>
  );
}

export default CustomerItem;
