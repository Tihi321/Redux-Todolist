import React from 'react';
import { EditButton } from '../Buttons/EditButton/';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const Table = (props) => {

  const tableOptions = {
    defaultSortName: 'id',
    defaultSortOrder: 'asc',
    sizePerPageList: [{
      text: '5', value: 5
    }, {
      text: '10', value: 10
    }],
    sizePerPage: 5,
    paginationSize: 5,
    prePage: 'Prošla',
    nextPage: 'Sljedeća',
    firstPage: 'Prva',
    lastPage: 'Zadnja'
  };

  const selectedRowOptions = {
    mode: 'checkbox',
    bgColor: 'pink',
    onSelect: (row, isSelected, e) => onRowSelect(row, isSelected, e),
    hideSelectColumn: true,
    clickToSelect: true
  };

  const editButton = (cell, row, enumObject, index) => {
    return (
      <EditButton activateTableRow={props.activateTableRow} activeTableRow={props.activeTableRow} validationEditModal={props.validationEditModal} validation={props.editModal.validation} editModal={props.editModal} toggleEditModal={props.toggleEditModal} row={row} />
    );
  }

  const onRowSelect = (row, isSelected, e) => {
    props.selectTodo(isSelected, row.uuid);
  }

  const dateFormatter = (cell, row) => {
    const date = new Date(JSON.parse(cell));
    return `${('0' + date.getDate()).slice(-2)}/${('0' + (date.getMonth() + 1)).slice(-2)}/${date.getFullYear()}`;
  }


  const todos = props.todos.toJS();

  return (
    <BootstrapTable selectRow={selectedRowOptions} data={todos} version='4' options={tableOptions} pagination>
      <TableHeaderColumn dataField='uuid' isKey hidden></TableHeaderColumn>
      <TableHeaderColumn filter={{
        type: 'NumberFilter',
        delay: 1000,
        numberComparators: ['=', '>', '<=']
      }} dataField='id' width='200' dataSort={true}>ID</TableHeaderColumn>
      <TableHeaderColumn width='200' filter={{ type: 'TextFilter', delay: 1000 }} dataField='subject' dataSort={true}>Ime Zadatka</TableHeaderColumn>
      <TableHeaderColumn filter={{ type: 'TextFilter', delay: 1000 }} dataField='message' tdStyle={{ whiteSpace: 'normal' }} dataSort={true}>Opis Zadatka</TableHeaderColumn>
      <TableHeaderColumn dataFormat={dateFormatter} filter={{ type: 'DateFilter' }} dataField='created' dataSort={true}>Zapis kreiran</TableHeaderColumn>
      <TableHeaderColumn width='100' dataFormat={editButton} export={false}></TableHeaderColumn>
    </BootstrapTable>
  );
}

export default Table;