import pytz from 'pytz';

export const getCurrentTime = (timeZone) => {
  const tz = pytz.timezone(timeZone);
  return tz.localize(new Date()).toLocaleTimeString();
};

export const convertTime = (time, fromZone, toZone) => {
  const fromTz = pytz.timezone(fromZone);
  const toTz = pytz.timezone(toZone);
  const localizedTime = fromTz.localize(new Date(time));
  return localizedTime.astimezone(toTz).toLocaleTimeString();
};