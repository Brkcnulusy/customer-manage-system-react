import "./customerList.css";
import CustomerItem from '../customerItem/customerItem';

function customerList() {
  return (
    <ul className="customer-list">
      <CustomerItem />
    </ul>
  );
}

export default customerList;
