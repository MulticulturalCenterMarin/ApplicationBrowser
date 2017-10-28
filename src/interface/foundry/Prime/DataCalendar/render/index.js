/* ------------------------- External Dependencies -------------------------- */
import _ from 'lodash'
import idx from './idx'
import React from 'react'
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import Globalize from 'globalize';
import { Absolute } from 'particles'
import {Box } from 'atomic'
BigCalendar.setLocalizer(
  BigCalendar.globalizeLocalizer(Globalize)
);
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer
let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])
/* ------------------------------- Component -------------------------------- */
export default ({
  data, dataFeed, culture, cultures, cultureChange, styledContainer, ...props
}) =>{
console.log(dataFeed)
dataFeed = _.map(dataFeed, item=>({
  title: idx(item.data, _=> _.name.nameDisplay),
  start: idx(item.data, _=> _.date.dateStart)? moment(item.data.date.dateStart).format(): null,
  end: idx(item.data, _=> _.date.dateEnd)? moment(item.data.date.dateEnd).format(): null,
}))
return <Box {...styledContainer} >
  <Box h={100}>
    <h3 className="callout">
      <label>Select a Culture</label>
      <select
        className='form-control'
        style={{ width: 200, display: 'inline-block'}}
        defaultValue={'fr'}
        onChange={cultureChange}
      >
      {
        cultures.map((c, idx) =>
          <option key={idx} value={c}>{c}</option>
        )
      }
      </select>
    </h3>
  </Box>
  <Absolute top bottom left right mt={100} >
    {console.log(dataFeed)}
    <BigCalendar
      culture={'es'}
      events={dataFeed ? dataFeed : []}
      views={allViews}
      step={60}
    />
  </Absolute>
  </Box>
}