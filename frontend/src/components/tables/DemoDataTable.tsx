"use client";

import React, { FC } from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  filterFns,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  ArrowUpDown,
  ChevronDown,
  MoreHorizontal,
  Plus,
  CrossIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";
import DemoModal from "../modals/DemoModal";
import DataTableSelectFilterDemo from "./common/DataTableSelectFilterDemo";
//   import AddCustomerModal from "../modals/AddCustomerModal";

interface DemoDataTableProps {
  // Add your prop types here
}

const data: Payment[] = [
  {
    id: "m5gr84i9",
    username: "ken99",
    amount: 316,
    status: "success",
    email: "ken99@yahoo.com",
  },
  {
    id: "3u1reuv4",
    username: "Abe45",
    amount: 242,
    status: "success",
    email: "Abe45@gmail.com",
  },
  {
    id: "derv1ws0",
    username: "Monserrat44",
    amount: 837,
    status: "processing",
    email: "Monserrat44@gmail.com",
  },
  {
    id: "5kma53ae",
    username: "Lauryn_Kihn",
    amount: 874,
    status: "success",
    email: "Silas22@gmail.com",
  },
  {
    id: "bhqecj4p",
    username: "Savion_Kuvalis",
    amount: 721,
    status: "failed",
    email: "carmella@hotmail.com",
  },
  {
    id: "xv1y1w8q",
    username: "Isaias_Kuvalis",
    amount: 874,
    status: "success",
    email: "isais_lk@hotmail.com",
  },
  {
    id: "3g1kz5k8",
    username: "Peter_99",
    amount: 874,
    status: "success",
    email: "pet99@gmail.com",
  },
  {
    id: "3g1kz5k8",
    username: "Peter_99",
    amount: 874,
    status: "success",
    email: "pet99@gmail.com",
  },
  {
    id: "3g1kz5k8",
    username: "Peter_99",
    amount: 874,
    status: "success",
    email: "pet99@gmail.com",
  },
  {
    id: "3g1kz5k8",
    username: "Peter_99",
    amount: 874,
    status: "success",
    email: "pet99@gmail.com",
  },
  {
    id: "3g1kz5k8",
    username: "Peter_99",
    amount: 874,
    status: "success",
    email: "pet99@gmail.com",
  },
  {
    id: "3g1kz5k8",
    username: "Peter_99",
    amount: 874,
    status: "success",
    email: "pet99@gmail.com",
  },
  {
    id: "3g1kz5k8",
    username: "Peter_99",
    amount: 874,
    status: "success",
    email: "pet99@gmail.com",
  },
];

export type Payment = {
  id: string;
  amount: number;
  username: string;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const statuses = [
  {
    value: "pending",
    label: "Pending",
  },
  {
    value: "processing",
    label: "Processing",
  },
  {
    value: "success",
    label: "Success",
  },
  {
    value: "failed",
    label: "Failed",
  },
];

export const columns: ColumnDef<Payment>[] = [
  //   {
  //     id: "select",
  //     header: ({ table }) => (
  //       <Checkbox
  //         checked={table.getIsAllPageRowsSelected()}
  //         onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //         aria-label="Select all"
  //       />
  //     ),
  //     cell: ({ row }) => (
  //       <Checkbox
  //         checked={row.getIsSelected()}
  //         onCheckedChange={(value) => row.toggleSelected(!!value)}
  //         aria-label="Select row"
  //       />
  //     ),
  //     enableSorting: false,
  //     enableHiding: false,
  //   },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="w-4 h-4 ml-2" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "username",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Username
          <ArrowUpDown className="w-4 h-4 ml-2" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("username")}</div>
    ),
  },
  {
    accessorKey: "provider",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Provider
          <ArrowUpDown className="w-4 h-4 ml-2" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("provider")}</div>
    ),
  },
  {
    accessorKey: "isEmailVerified",
    header: "Email verified",
    cell: ({ row }) => (
      <div className="capitalize">
        {row.getValue("isEmailVerified") ? "Yes" : "No"}
      </div>
    ),
  },
  {
    accessorKey: "roles",
    header: "Roles",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("roles") ? "Yes" : "No"}</div>
    ),
  },
  {
    accessorKey: "Joined",
    header: "Joined",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("Joined")}</div>
    ),
  },
  {
    accessorKey: "Active",
    header: "Active",
    cell: ({ row }) => <Switch id="active" />,
  },
  {
    accessorKey: "status",
    filterFn: (row, id, value) => {
      console.log("value", value);
      console.log("row", row);
      console.log("id", id);

      return value.includes(row.getValue(id));
    },
    header: "Status",
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.value === row.getValue("status")
      );

      if (!status) return null;
    },
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="font-medium text-right">{formatted}</div>;
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="w-8 h-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

const DemoDataTable: FC<DemoDataTableProps> = () => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    enableRowSelection: true,
    enableColumnFilters: true,
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  console.log(columnFilters);

  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter emails..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DataTableSelectFilterDemo
          column={table.getColumn("status")}
          title="Status"
          options={statuses}
        />
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <CrossIcon className="ml-2 h-4 w-4" />
          </Button>
        )}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown className="w-4 h-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>

        <DemoModal>
          <Button variant="outline" className="ml-2">
            <Plus className="w-4 h-4 mr-2" />
            Create customer
          </Button>
        </DemoModal>
      </div>
      <div className="bg-white border rounded-md">
        <Table>
          <TableHeader className="bg-gray-200">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end py-4 space-x-2">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DemoDataTable;
