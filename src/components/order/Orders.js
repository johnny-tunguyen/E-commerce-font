import React from "react";
import ShowPaymentInfo from "../cards/ShowPaymentInfo";
import OrderTable from "../cards/OrderTable";

const Orders = ({ orders, handleStatusChange }) => {
return (
  <>
    {orders.map((order) => (
      <div key={order._id} className="row pb-5">
        <div className="btn btn-block bg-light">
          <ShowPaymentInfo order={order} showStatus={false} />

          <div className="row">
            <div className="col-md-4">Delivery Status</div>
            <div className="col-md-8">
              <select
                onChange={(e) => handleStatusChange(order._id, e.target.value)}
                className="form-control"
                defaultValue={order.orderStatus}
                name="status"
              >
                <option value="Not Processed">Not Processed</option>
                <option value="Processing">Processing</option>
                <option value="Dispatched">Dispatched</option>
                <option value="Cancelled">Cancelled</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
          </div>
        </div>
        <OrderTable order={order} />
      </div>
    ))}
  </>
  )
};

export default Orders;
