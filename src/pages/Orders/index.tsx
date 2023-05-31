import { Grid } from "@mui/material";

import { Table } from "antd";
import { ColumnsType } from "antd/es/table";

import { useEffect } from "react";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getAllOrders } from "@/api/orderApi";
import ComponentSkeleton from "@/components/shared/ComponentSkeleton";
import MainCard from "@/components/shared/MainCard";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}
const columns: ColumnsType<DataType> = [
  {
    title: "Full Name",
    width: 100,
    dataIndex: "ticket_serialNo",
    key: "name",
    fixed: "left",
  },
  {
    title: "State",
    width: 100,
    dataIndex: "ticketState",
    key: "age",
    fixed: "left",
  },
  {
    title: "City",
    dataIndex: "ticketCity",
    key: "1",
    width: 150,
  },
  {
    title: "Customer Name",
    dataIndex: "ticket_customerName",
    key: "2",
    width: 150,
  },
  {
    title: "Asset ID",
    dataIndex: "ticket_assetId",
    key: "3",
    width: 150,
  },
  {
    title: "Workgroup",
    dataIndex: "ticket_user_role",
    key: "4",
    width: 150,
  },
  {
    title: "Column 5",
    dataIndex: "statusValue",
    key: "5",
    width: 150,
  },

  {
    title: "Action",
    key: "operation",
    fixed: "right",
    width: 100,
    render: () => <a href='/'>action</a>,
  },
];

const Orders = () => {
  const data: DataType[] = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      name: `Edward ${i}`,
      age: 32,
      address: `London Park no. ${i}`,
    });
  }

  const queryClient = useQueryClient();

  const {
    mutateAsync,
    isLoading,
    isError,
    error,
    data: orderData,
  } = useMutation(getAllOrders, {
    onSuccess: () => {
      // Refetch the orders query after the mutation is successful
      //   queryClient.refetchQueries();
    },
  });

  const handleCreateOrder = async () => {
    const payload = {
      page: 1,
      pageSize: 50,
      active: 1,
      userId: 30,
      roleId: 8,
      ticketType: "OPEN",
      createdBy: 30,
      filterParams: [],
    };

    try {
      await mutateAsync(payload); // Call the mutateAsync function with the desired payload
    } catch (error) {
      // Handle error
    }
  };
  useEffect(() => {
    handleCreateOrder();
    // return () => {};
  }, []);

  console.log(orderData);
  return (
    <ComponentSkeleton>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <MainCard title='Basic Orders List'>
            <Table columns={columns} dataSource={data} />
          </MainCard>
        </Grid>
      </Grid>
    </ComponentSkeleton>
  );
};

export default Orders;
