import "./styles.css";
import dayjs from "dayjs";
import { FC, useEffect, useState } from "react";
import { DEFAULT_MIN_DAY_WIDTH } from "./constants";
import { useStyles } from "./styles";
import { YearCalendarProps } from "./types";
import { getMonths, getRowSlots, range } from "../utils";

export const YearCalendar: FC<YearCalendarProps> = ({
  date,
  rows,
  styles: customStyles,
  onSlotClick,
  showRowLabels = true,
  showMonths = true,
  showWeeks = true,
  showMonthsDivider = false,
  showWeeksDivider = true,
  rowLabel = (row) => row.title || "",
  monthLabel = (month) => month.name,
  weekLabel = (weekNumber) => `W${weekNumber}`,
  slotLabel = (slot) => slot.title
}) => {
  console.log("rows", rows);
  const [dayWidth, setDayWidth] = useState(
    customStyles?.dayWidth || DEFAULT_MIN_DAY_WIDTH
  );
  const [currentDate, setCurrentDate] = useState(dayjs(date));
  const [months, setMonths] = useState<ReturnType<typeof getMonths>>([]);

  const styles = useStyles(customStyles);

  useEffect(() => {
    const _currentDate = dayjs(date);
    setCurrentDate(_currentDate);
    setMonths(getMonths(_currentDate));
  }, [date]);

  useEffect(() => {
    setDayWidth(Math.max(DEFAULT_MIN_DAY_WIDTH, customStyles?.dayWidth || 0));
  }, [customStyles?.dayWidth]);

  return (
    <div style={styles.mainContainer}>
      {/* rows labels */}
      {showRowLabels && (
        <div style={styles.rowLabelsContainer}>
          <div style={styles.topLeftCorner} />
          {rows?.map((row, index) => (
            <div style={styles.rowLabel}>{rowLabel(row, index)}</div>
          ))}
        </div>
      )}
      <div style={styles.tableContainer}>
        {/* months */}
        {showMonths && [
          // <_____________Labels_____________>
          <div style={styles.monthsContainer}>
            {months.map((month, index) => (
              <div
                style={{
                  ...styles.monthLabelContainer,
                  width: `${dayWidth * month.days}rem`
                }}
              >
                {monthLabel(month, index)}
              </div>
            ))}
          </div>,
          // </_____________Labels_____________>
          // <_____________Dividers_____________>
          showMonthsDivider &&
            months.map((month) => (
              <div
                style={{
                  ...styles.monthsDivider,
                  left: `${(month.days + month.startDay) * dayWidth}rem`
                }}
              />
            ))
          // </_____________Dividers_____________>
        ]}
        {/* weeks */}
        {showWeeks && [
          // <_____________Labels_____________>
          <div style={styles.weeksContainer}>
            {range(1, 53).map((weekNumber) => (
              <div style={styles.weekLabelContainer}>
                {weekLabel(weekNumber)}
              </div>
            ))}
          </div>,
          // </_____________Labels_____________>
          // <_____________Dividers_____________>
          showWeeksDivider &&
            range(1, 53).map((weekNumber) => (
              <div
                style={{
                  ...styles.weeksDivider,
                  left: `${dayWidth * weekNumber * 7}rem`
                }}
              />
            ))
          // </_____________Dividers_____________>
        ]}
        {/* table body */}
        <div style={styles.rowsContainer}>
          {/* Calendar rows */}
          {rows?.map((row) => (
            <div style={styles.row}>
              {getRowSlots(currentDate, row.slots || []).map((slot) => (
                <div
                  style={{
                    ...styles.slotContainer,
                    width: `${slot.days * dayWidth}rem`,
                    left: `${slot.startDay * dayWidth}rem`
                  }}
                >
                  <div
                    onClick={() => onSlotClick?.(slot)}
                    style={{
                      ...styles.slot,
                      backgroundColor: slot.color || styles.slot.backgroundColor
                    }}
                    className="slot"
                  >
                    {slotLabel(slot)}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
