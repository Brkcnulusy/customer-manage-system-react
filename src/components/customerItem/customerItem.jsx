import './customerItem.css';

function customerItem() {
  return (
    <li className="customer-item">
      <div className="customer-info">
        <img
          className="customer-avatar"
          src="https://i.pravatar.cc/300"
          alt="image"
        />
        <span className="customer-name">Burak Can Ulusoy</span>
      </div>
      <button className="delete-info">
        <i className="fa-solid fa-trash"></i>
      </button>
    </li>
  );
}

export default customerItem;
