const customStyles = {
  background: 'transparent',
  // You can get class names from 
  // https://github.com/jbetancur/react-data-table-component/blob/2606628396eb37969880b4f77e54215ef9aa8f1f/src/DataTable/styles.js
  header: {
    style: {
      fontSize: '30px',
      textAlign: 'center',
      fontWeight: '700'
    },
  },
  subHeader:{
    style: {
      width: '100%',
    },
  },
  head: {
    style: {
      width: '100%',
    },
  },
  rows: {
    style: {
      minHeight: '72px', // override the row height
    }
  },
  headCells: {
    style: {
      paddingLeft: '0', // override the cell padding for head cells
      paddingRight: '0',
    },
  },
  cells: {
    style: {
      paddingLeft: '0', // override the cell padding for data cells
      paddingRight: '0',
    },
  },
};

export default customStyles