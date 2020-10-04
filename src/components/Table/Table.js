import React from "react"
import './Table.scss'
import DataTable from 'react-data-table-component';
import * as records from '../../json/records.json';
import customStyles from './customTableStyles';
import dateFormatter from './date-formatter';
import amountFormatter from './amount-formatter';

const columns = [
  {
    name: 'Amount',
    selector: 'amount',
    cell: row => amountFormatter(row.amount),
    sortable: true,
    maxWidth: '25%'
  },
  {
    name: 'Status',
    sortable: true,
    maxWidth: '25%',
    selector: 'status',
    cell: row => <div className={row.status.toLowerCase()}>{row.status}</div>,
  },
  {
    name: 'Method',
    selector: row => `${row.bank} *** ${row.last4}`,
    sortable: true,
    maxWidth: '25%'
  },
  {
    name: 'Date',
    sortable: true,
    selector: 'date',
    cell: row => dateFormatter(row.date),
    sortFunction: function (a, b) {
      return new Date(a) - new Date(b)
    },
    maxWidth: '25%'
  }
];

export default class Table extends React.Component {
  render() {
    return (
      <div className='table-wrap my-5 mx-auto'>

        <h1 className='text-lg'>{this.props.heading}</h1>
        
        <DataTable
            columns={columns}
            data={records.default}
            
            fixedHeader
            allowOverflow	= {false}
            overflowY={false}
            overflowX={false}
            wrap={false}
            highlightOnHover={true}

            pagination={true}
            paginationPerPage={10}
            paginationRowsPerPageOptions={[10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 150, 200, 250, 300]}
            
            customStyles={customStyles}
         />
      </div>
    )
  }
}
