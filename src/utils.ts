import dayjs, { Dayjs } from "dayjs";
import { MonthRecord, SlotProps } from "./YearCalendar/types";

export const range = (start: number, end: number, step: number = 1) => {
  const lenght = Math.floor((Math.abs(end - start) || 1) / step);
  let offset = start;
  return Array(lenght)
    .fill(0)
    .map((v) => {
      const val = offset;
      offset += step;
      return val;
    });
};

export const getMonths = (date: Dayjs, start = 0, end = 12) => {
  const currentDate = date.clone();
  let offset = 0;
  const months = range(start, end).map((monthNumber) => {
    const month = currentDate.month(monthNumber);
    const record: MonthRecord = {
      name: month.format("MMMM"),
      days: month.daysInMonth(),
      startDay: offset,
    };
    offset += record.days;

    return record;
  });

  return months;
};

export const getRowSlots = <T extends SlotProps = SlotProps>(
  date: Dayjs,
  slots: T[],
) => {
  const startOfTheYear = dayjs(date.format("YYYY-01-01"));

  const result = slots?.map((slot) => {
    const startDate = dayjs(slot.start);
    const startDay = startDate.diff(startOfTheYear, "day");
    const days = dayjs(slot.end).diff(startDate, "day");

    return {
      startDay: startDay > 0 ? startDay : 0,
      days: startDay > 0 ? days : days + startDay,
      ...slot,
    };
  });

  return result;
};
