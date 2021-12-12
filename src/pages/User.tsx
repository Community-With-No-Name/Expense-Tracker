import React from 'react'
import Layout from 'components/Layout'
import Header from 'components/User/Header'
import Stats from 'components/User/Stats'
import ExpenseCharts from 'components/User/ExpenseCharts'
import jwt_decode from "jwt-decode"
import { getRequest } from 'api/apiCall'
import { GET_TRANSACTIONS } from 'api/apiUrl'
import { queryKeys } from 'api/queryKey'
import { useQuery } from 'react-query'
import SlideOver from 'components/SlideOver'
export default function User() {
    const user = jwt_decode(localStorage?.getItem("ET_token"))
    console.log(user)
  const { data: transaction } = useQuery(
    queryKeys.getAllTransaction,
    async () => await getRequest({ url: GET_TRANSACTIONS }),
    {
      retry: 2,
    }
  );
  const [transactions, setTransactions] = React.useState(transaction?.data);
  React.useEffect(() => {
    setTransactions(transaction?.data);
  }, [transaction?.data]);
  const SumData = (input) => {
    if(toString.call(input)!=="[object Array]")
    return false
    let total = 0
    for (let i = 0; i<input.length;i++){
      if(isNaN(input[i])){
        continue
      }
      total += Number(input[i])
    }
    return total
  }
  const debitList = transactions?.filter(transaction => transaction.transaction_type==="debit")
  const creditList = transactions?.filter(transaction => transaction.transaction_type==="credit")
  const debit = SumData(debitList?.map(list=>list.transaction_amount))
  const credit = SumData(creditList?.map(list=>list.transaction_amount))
  const total = Number(credit) - Number(debit)
  const statsData = {
    total,
    debit,
    credit
  }
  const userCourses = []
    return (
      <>
        <Layout page="Dashboard">
            <Header user={user} />
            <Stats data={statsData} />
            <ExpenseCharts data={statsData} />
        </Layout>
      </>
    )
}
