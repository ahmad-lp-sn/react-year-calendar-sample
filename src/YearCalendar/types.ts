import { Dayjs } from "dayjs";
import { CSSProperties, ReactNode } from "react";

export type MonthRecord = {
  name: string;
  days: number;
  startDay: number;
};

export type RestylebleComponents =
  | "mainContainer"
  | "topLeftCorner"
  | "rowLabelsContainer"
  | "rowLabel"
  | "tableContainer"
  | "rowsContainer"
  | "monthsContainer"
  | "weeksContainer"
  | "monthsDivider"
  | "weeksDivider"
  | "monthLabelContainer"
  | "weekLabelContainer"
  | "slotContainer"
  | "row"
  | "slot";

// in rem
export type Dimensions = {
  dayWidth?: number;
  rowHeight?: number;
};

export type SlotProps = {
  start: Date | string;
  end: Date | string;
  title?: string;
  color?: string;
};

export type CalendarRows<T extends SlotProps = SlotProps> = {
  slots?: T[];
  title?: string;
};

export type YearCalendarProps<
  T extends SlotProps = SlotProps,
  R extends CalendarRows<T> = CalendarRows<T>
> = {
  date?: Dayjs;
  rows?: R[];
  showRowLabels?: boolean;
  showMonths?: boolean;
  showWeeks?: boolean;
  showMonthsDivider?: boolean;
  showWeeksDivider?: boolean;
  styles?: Dimensions & Partial<Record<RestylebleComponents, CSSProperties>>;
  // builders
  rowLabel?: (row: R, index: number) => ReactNode | string;
  monthLabel?: (month: MonthRecord, index: number) => ReactNode | string;
  weekLabel?: (weekNumber: number) => ReactNode | string;
  slotLabel?: (slot: T) => ReactNode | string;
  // events
  onSlotClick?: (slot: T) => void;
};
