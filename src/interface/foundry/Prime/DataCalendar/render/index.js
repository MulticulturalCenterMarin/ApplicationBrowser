/* ------------------------- External Dependencies -------------------------- */
import _ from 'lodash'
import React from 'react'
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import globalize from 'globalize';
import { Absolute } from 'particles'
import {Box } from 'atomic'

BigCalendar.momentLocalizer(moment); // or globalizeLocalizer
let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])
/* ------------------------------- Component -------------------------------- */
export default ({
  data, culture, cultures, cultureChange,
}) =><div>
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
    <BigCalendar
      events={[
       {
          'title': 'Building The Future',
          'allDay': true,
          'start': new Date(2017, 9,0),
          'end': new Date(2017, 9,1)
        },
        {
          'title': 'Long Event',
          'start': new Date(2017, 9,7),
          'end': new Date(2017, 9,10)
        },

        {
          'title': 'Rapid Response Campaign Begins',
          'start': new Date(2017, 2, 13, 0, 0, 0),
          'end': new Date(2017, 2, 20, 0, 0, 0)
        },

        {
          'title': 'Rapid Response Campaign Ends',
          'start': new Date(2017, 10, 6, 0, 0, 0),
          'end': new Date(2017, 10, 13, 0, 0, 0)
        },

        {
          'title': 'Some Event',
          'start': new Date(2017, 9,9, 0, 0, 0),
          'end': new Date(2017, 9,9, 0, 0, 0)
        },
        {
          'title': 'Conference',
          'start': new Date(2017, 9,11),
          'end': new Date(2017, 9,13),
          desc: 'Big conference for important people'
        },
        {
          'title': 'Meeting',
          'start': new Date(2017, 9,12, 10, 30, 0, 0),
          'end': new Date(2017, 9,12, 12, 30, 0, 0),
          desc: 'Pre-meeting meeting, to prepare for the meeting'
        },
        {
          'title': 'Lunch',
          'start':new Date(2017, 9,12, 12, 0, 0, 0),
          'end': new Date(2017, 9,12, 13, 0, 0, 0),
          desc: 'Power lunch'
        },
        {
          'title': 'Meeting',
          'start':new Date(2017, 9,12,14, 0, 0, 0),
          'end': new Date(2017, 9,12,15, 0, 0, 0)
        },
        {
          'title': 'Happy Hour',
          'start':new Date(2017, 9,12, 17, 0, 0, 0),
          'end': new Date(2017, 9,12, 17, 30, 0, 0),
          desc: 'Most important meal of the day'
        },
        {
          'title': 'Dinner',
          'start':new Date(2017, 9,12, 20, 0, 0, 0),
          'end': new Date(2017, 9,12, 21, 0, 0, 0)
        },
        {
          'title': 'Birthday Party',
          'start':new Date(2017, 10,12, 7, 0, 0),
          'end': new Date(2017, 10,12, 10, 30, 0)
        },
        {
          'title': 'Late Night Event',
          'start':new Date(2017, 9,17, 19, 30, 0),
          'end': new Date(2017, 9,18, 2, 0, 0)
        },
        {
          'title': 'Multi-day Event',
          'start':new Date(2017, 9,20, 19, 30, 0),
          'end': new Date(2017, 9,22, 2, 0, 0)
        }
      ]}
      views={allViews}
      step={60}
    />
  </Absolute>
  </div>