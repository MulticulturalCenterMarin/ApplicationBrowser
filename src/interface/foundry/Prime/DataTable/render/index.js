/* ------------------------- External Dependencies -------------------------- */
import _ from 'lodash'
import React from 'react'
import {DataTable} from 'primereact/components/datatable/DataTable';
import {Column} from 'primereact/components/column/Column';
const displaySelection = (data) => <div style={{textAlign: 'left'}}>No Selection</div>
/* ------------------------------- Component -------------------------------- */
export default ({
  data,datas, foundry, styled,
  selectedItems, displaySelection,
  onSelectionChange
}) => {
  _.omit(datas, ['startTime', 'end'])
return <DataTable 
  value={data} 
  selectionMode="multiple" 
  header="Hotline Call Record" 
  selection={selectedItems}
  sortable={true}
  sortMode="multiple"
  onSelectionChange={onSelectionChange}
  >
    <Column field="id" header="ID" />
    <Column field="direction" header="Direction" sortable={true}/>
    <Column field="duration" header="Duration" sortable={true}/>
    <Column field="from" header="From" sortable={true}/>
    <Column field="forwardedFrom" header="Forwarded From"sortable={true}/>
</DataTable>}