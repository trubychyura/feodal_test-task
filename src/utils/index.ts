/** @format */

import { Data } from '../types';

const timeStringToMinutes = (timeStr: any, separator = ':') =>
  timeStr.split(separator).reduce((h: any, m: any) => h * 60 + +m);

const minutesToTimeString = (minutes: any, separator = ':') => {
  const minutesPart = (minutes % 60).toString().padStart(2, '0');
  const hoursPart = Math.floor(minutes / 60)
    .toString()
    .padStart(2, '0');
  return hoursPart + separator + minutesPart;
};

const generateTimeSlots = (
  startStr: string,
  endStr: string,
  periodInMinutes: number,
  duration = 0,
  separator = ':'
) => {
  let startMinutes = timeStringToMinutes(startStr, separator) + duration;
  let endMinutes = timeStringToMinutes(endStr, separator);
  const result = [];

  while (startMinutes + periodInMinutes <= endMinutes) {
    result.push(minutesToTimeString(startMinutes, separator));
    startMinutes += periodInMinutes;
  }
  return result;
};

export const getTimeSlots = (data: Data) => {
  if (!data.appointments.length) {
    return generateTimeSlots(data.start, data.end, 45);
  }

  let result: any = [];

  const fromStartToFirstAppointsment = generateTimeSlots(
    data.start,
    data.appointments[0].start,
    45
  );

  result = fromStartToFirstAppointsment;

  for (let i = 0; i < data.appointments.length; i++) {
    const startTime = data.appointments[i].start;
    const endTime = data.appointments[i + 1]?.start || data.end;
    const betweenAppointsments = generateTimeSlots(
      startTime,
      endTime,
      45,
      data.appointments[i].duration
    );

    result = result.concat(betweenAppointsments);
  }

  return result;
};
