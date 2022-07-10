import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('Asia/Seoul');

export default class Time {
    makeId(): string {
        const now = dayjs().format('YYYYMMDDHHmmss').toString();
        return 'u'.concat(now);
    }
}
