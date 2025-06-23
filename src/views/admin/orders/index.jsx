import React from "react";
import Card from "components/card";
import ComplexTable from "views/admin/tables/components/ComplexTable"; // Assuming ComplexTable is suitable

function OrdersTable() {
  // Placeholder data
  const orders = [
    {
      id: 1,
      orderNumber: "ORD001",
      customerName: "John Doe",
      customerEmail: "john.doe@example.com",
      customerPhone: "123-456-7890",
      price: "$100",
      product: "Product A",
      package: "Basic",
      status: "Completed",
    },
    {
      id: 2,
      orderNumber: "ORD002",
      customerName: "Jane Smith",
      customerEmail: "jane.smith@example.com",
      customerPhone: "098-765-4321",
      price: "$250",
      product: "Product B",
      package: "Premium",
      status: "Pending",
    },
    // Add more example orders or fetch real data here
  ];

  // Prepare data in the format expected by ComplexTable
  const tableData = orders.map((order, index) => ({
    no: index + 1,
    orderNumber: order.orderNumber,
    customer: (
      <div>
        <div>{order.customerName}</div>
        <div>{order.customerEmail}</div>
        <div>{order.customerPhone}</div>
      </div>
    ),
    purchase: (
      <div>
        <div>{order.price}</div>
        <div>{order.product}</div>
        <div>{order.package}</div>
      </div>
    ),
    status: order.status,
    action: (
      <button
        className="linear rounded-md bg-brand-500 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:opacity-90"
        onClick={() => alert(`View details for ${order.orderNumber}`)}
      >
        View
      </button>
    ),
  }));

  // Define columns in the format expected by ComplexTable
  const columnsData = [
    {
      Header: "NO",
      accessor: "no",
    },
    {
      Header: "ORDER NUMBER",
      accessor: "orderNumber",
    },
    {
      Header: "CUSTOMER",
      accessor: "customer",
    },
    {
      Header: "PURCHASE",
      accessor: "purchase",
    },
    {
      Header: "STATUS",
      accessor: "status",
    },
    {
      Header: "ACTION",
      accessor: "action",
    },
  ];

  return (
    <div className="mt-5 grid h-full grid-cols-1 gap-5">
      <Card extra="w-full h-full p-4">
        <div className="relative flex items-center justify-between">
          <div className="text-xl font-bold text-navy-700 dark:text-white">
            Orders Table
          </div>
        </div>

        <div className="mt-8 h-full overflow-x-scroll">
          <ComplexTable
            columnsData={columnsData}
            tableData={tableData}
          />
        </div>
      </Card>
    </div>
  );
}

export default OrdersTable;
