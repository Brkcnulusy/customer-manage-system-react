import "./customerList.css";
import CustomerItem from '../customerItem/customerItem';

// const customerData = [
//   {
//     id: 1,
//     customerName: "Burak Can Ulusoy",
//   },
//   {
//     id: 2,
//     customerName: "Sertaç Özer",
//   },
//   {
//     id: 3,
//     customerName: "Uğur Karakurt",
//   },
//   {
//     id: 4,
//     customerName: "Erim Özcan Çıvgın",
//   },
//   {
//     id: 5,
//     customerName: "Semih",
//   }

// ]

function CustomerList({ customers, setCustomers }) {

  const handleDelete = (item) => {
    setCustomers(customers.filter((customer) => customer.id !== item.id));
  }

  return (
    <ul className="customer-list">
      {customers.map((customer)=>(
        <CustomerItem customer={customer} key={customer.id} handleDelete={handleDelete} />
      ))}
    </ul>
  );
}

export default CustomerList;
