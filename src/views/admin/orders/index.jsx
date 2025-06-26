import React from "react";
import Card from "components/card";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import tableDataOrders from "./variables/placeholderData.json";

function OrdersTable() {
  // Use the imported data
  const orders = tableDataOrders;

  // Column definitions for the table
  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor("id", {
      id: "no",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">NO</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.row.index + 1}
        </p>
      ),
    }),
    columnHelper.accessor("orderNumber", {
      id: "orderNumber",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          ORDER NUMBER
        </p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("customerName", {
      id: "customer",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          CUSTOMER
        </p>
      ),
      cell: (info) => (
        <div>
          <p className="text-sm font-bold text-navy-700 dark:text-white">
            {info.row.original.customerName}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {info.row.original.customerEmail}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {info.row.original.customerPhone}
          </p>
        </div>
      ),
    }),
    columnHelper.accessor("price", {
      id: "purchase",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          PURCHASE
        </p>
      ),
      cell: (info) => (
        <div>
          <p className="text-sm font-bold text-navy-700 dark:text-white">
            {info.row.original.price}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {info.row.original.product}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {info.row.original.package}
          </p>
        </div>
      ),
    }),
    columnHelper.accessor("status", {
      id: "status",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          STATUS
        </p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("id", {
      id: "action",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          ACTION
        </p>
      ),
      cell: (info) => (
        <button className="linear rounded-md bg-brand-500 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:opacity-90">
          View
        </button>
      ),
    }),
  ];

  const table = useReactTable({
    data: orders,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });

  return (
    <div className="mt-5 grid h-full grid-cols-1 gap-5">
      <Card extra={"w-full h-full p-4 sm:overflow-x-auto"}>
        <div className="relative flex items-center justify-between">
          <div className="text-xl font-bold text-navy-700 dark:text-white">
            Orders Table
          </div>
        </div>

        <div className="mt-8 h-full overflow-x-scroll xl:overflow-x-hidden">
          <table className="w-full">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id} className="!border-px !border-gray-400">
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      onClick={header.column.getToggleSortingHandler()}
                      className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start"
                    >
                      <div className="items-center justify-between text-xs text-gray-200">
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="min-w-[150px] border-white/0 py-3 pr-4"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}

export default OrdersTable;
