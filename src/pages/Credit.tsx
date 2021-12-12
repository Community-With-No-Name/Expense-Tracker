/* eslint-disable array-callback-return */
import { getRequest, postRequest } from "api/apiCall";
import { ADD_TRANSACTION, CREDIT_TRANSACTIONS } from "api/apiUrl";
import { queryKeys } from "api/queryKey";
import Cards from "components/CreditTransactions/Cards";
import Title from "components/CreditTransactions/Title";
import Layout from "components/Layout";
import React from "react";
import { useMutation, useQuery } from "react-query";
import $ from "jquery"
import { SearchField } from "components/Search";
import moment from "moment";
import Table from "components/CreditTransactions/Table";
export default function Transactions() {
  const [state, setState] = React.useState({
    transaction_name:"",
    transaction_type:"credit",
    transaction_amount:"",
    transaction_detail:"",
  })
  const { data: transaction } = useQuery(
    queryKeys.getCreditHistory,
    async () => await getRequest({ url: CREDIT_TRANSACTIONS }),
    {
      retry: 2,
    }
  );
  const [transactions, setTransactions] = React.useState(transaction?.data);
  React.useEffect(() => {
    setTransactions(transaction?.data);
  }, [transaction?.data]);
  console.log(transactions)
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = "#TransactionData .searchBody"
    SearchField(e.target.value, search)
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })    
  };
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })    
  };
  const [disabled, setDisabled] = React.useState(false)
  const [open, setOpen] = React.useState<boolean>(false);
  const { mutate } = useMutation(postRequest, {
    onSuccess(data) {
      setDisabled(false);
      if(data?.message) {
        alert(`${data?.message}`)
        setOpen(false)
        setTransactions([{
          transaction_type: data?.data.transaction_type,
          transaction_amount: data?.data.transaction_amount,
          transaction_name: data?.data.transaction_name,
          transaction_detail: data?.data.transaction_detail,
        },...transactions])
      }
      else {
        alert(`${data?.error}`)
      }
    },
    onError(data) {
      setDisabled(false);
      alert("Course reg Failed")
    }
    
  });
  const handleSubmit = (e: any) => {
      e.preventDefault();
      setDisabled(true)
    mutate({
      url: ADD_TRANSACTION,
      data: state,
    });
  };
  const [value, setValue] = React.useState();

  return (
    <Layout page="Credit Transactions">
      <>
        <Title
          handleSearch={handleSearch}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          handleSelect={handleSelect}
          open={open}
          setOpen={setOpen}
          courses={transactions}
          value={value}
          setValue={setValue}
          title="Credit History"
        />
        <div className="md:hidden">
        <Cards transactions={transactions}  />
        </div>
        <div className="hidden md:block">
          <Table transactions={transactions} />
        </div>
      </>
    </Layout>
  );
}
