import React from 'react';
import { TimeConsumer } from './TimeProvider';
import moment from 'moment';

const Clock = ({ since = new Date(), seconds }) => (
    <TimeConsumer>
        {({ time }) => {
            if (seconds) {
                return <span>{moment(time).diff(moment(since), 'seconds')}</span>
            } else {
                return <span>{moment(since).from(moment(time))}</span>;
            }
        }}
    </TimeConsumer>
);

export default Clock;
