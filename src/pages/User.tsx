/* eslint-disable eqeqeq */
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
  const januaryDebit = SumData(transactions?.filter(transaction => transaction.month=='1')?.filter(transaction=>transaction.transaction_type==="debit")?.map(list=>list.transaction_amount))
  const februaryDebit = SumData(transactions?.filter(transaction => transaction.month=='2')?.filter(transaction=>transaction.transaction_type==="debit")?.map(list=>list.transaction_amount))
  const marchDebit = SumData(transactions?.filter(transaction => transaction.month=='3')?.filter(transaction=>transaction.transaction_type==="debit")?.map(list=>list.transaction_amount))
  const aprilDebit = SumData(transactions?.filter(transaction => transaction.month=='4')?.filter(transaction=>transaction.transaction_type==="debit")?.map(list=>list.transaction_amount))
  const mayDebit = SumData(transactions?.filter(transaction => transaction.month=='5')?.filter(transaction=>transaction.transaction_type==="debit")?.map(list=>list.transaction_amount))
  const juneDebit = SumData(transactions?.filter(transaction => transaction.month=='6')?.filter(transaction=>transaction.transaction_type==="debit")?.map(list=>list.transaction_amount))
  const julyDebit = SumData(transactions?.filter(transaction => transaction.month=='7')?.filter(transaction=>transaction.transaction_type==="debit")?.map(list=>list.transaction_amount))
  const augustDebit = SumData(transactions?.filter(transaction => transaction.month=='8')?.filter(transaction=>transaction.transaction_type==="debit")?.map(list=>list.transaction_amount))
  const septemberDebit = SumData(transactions?.filter(transaction => transaction.month=='9')?.filter(transaction=>transaction.transaction_type==="debit")?.map(list=>list.transaction_amount))
  const octoberDebit = SumData(transactions?.filter(transaction => transaction.month=='10')?.filter(transaction=>transaction.transaction_type==="debit")?.map(list=>list.transaction_amount))
  const novemberDebit = SumData(transactions?.filter(transaction => transaction.month=='11')?.filter(transaction=>transaction.transaction_type==="debit")?.map(list=>list.transaction_amount))
  const decemberDebit = SumData(transactions?.filter(transaction => transaction.month=='12')?.filter(transaction=>transaction.transaction_type==="debit")?.map(list=>list.transaction_amount))
  const januaryCredit = SumData(transactions?.filter(transaction => transaction.month=='1')?.filter(transaction=>transaction.transaction_type==="credit")?.map(list=>list.transaction_amount))
  const februaryCredit = SumData(transactions?.filter(transaction => transaction.month=='2')?.filter(transaction=>transaction.transaction_type==="credit")?.map(list=>list.transaction_amount))
  const marchCredit = SumData(transactions?.filter(transaction => transaction.month=='3')?.filter(transaction=>transaction.transaction_type==="credit")?.map(list=>list.transaction_amount))
  const aprilCredit = SumData(transactions?.filter(transaction => transaction.month=='4')?.filter(transaction=>transaction.transaction_type==="credit")?.map(list=>list.transaction_amount))
  const mayCredit = SumData(transactions?.filter(transaction => transaction.month=='5')?.filter(transaction=>transaction.transaction_type==="credit")?.map(list=>list.transaction_amount))
  const juneCredit = SumData(transactions?.filter(transaction => transaction.month=='6')?.filter(transaction=>transaction.transaction_type==="credit")?.map(list=>list.transaction_amount))
  const julyCredit = SumData(transactions?.filter(transaction => transaction.month=='7')?.filter(transaction=>transaction.transaction_type==="credit")?.map(list=>list.transaction_amount))
  const augustCredit = SumData(transactions?.filter(transaction => transaction.month=='8')?.filter(transaction=>transaction.transaction_type==="credit")?.map(list=>list.transaction_amount))
  const septemberCredit = SumData(transactions?.filter(transaction => transaction.month=='9')?.filter(transaction=>transaction.transaction_type==="credit")?.map(list=>list.transaction_amount))
  const octoberCredit = SumData(transactions?.filter(transaction => transaction.month=='10')?.filter(transaction=>transaction.transaction_type==="credit")?.map(list=>list.transaction_amount))
  const novemberCredit = SumData(transactions?.filter(transaction => transaction.month=='11')?.filter(transaction=>transaction.transaction_type==="credit")?.map(list=>list.transaction_amount))
  const decemberCredit = SumData(transactions?.filter(transaction => transaction.month=='12')?.filter(transaction=>transaction.transaction_type==="credit")?.map(list=>list.transaction_amount))
  const debit = SumData(debitList?.map(list=>list.transaction_amount))
  const credit = SumData(creditList?.map(list=>list.transaction_amount))
  const total = Number(credit) - Number(debit)
  const statsData = {
    total,
    debit,
    credit,
    monthCredit: [januaryCredit, februaryCredit, marchCredit, aprilCredit, mayCredit, juneCredit, julyCredit, augustCredit, septemberCredit, octoberCredit, novemberCredit, decemberCredit],
    monthDebit: [januaryDebit, februaryDebit, marchDebit, aprilDebit, mayDebit, juneDebit, julyDebit, augustDebit, septemberDebit, octoberDebit, novemberDebit, decemberDebit]
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
