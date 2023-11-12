import { DEFAULT_MIN_DAY_WIDTH, DEFAULT_MIN_ROW_HEIGHT } from "./constants";
import { YearCalendarProps } from "./types";

export const useStyles = (
  styles: YearCalendarProps["styles"]
): YearCalendarProps["styles"] => {
  const dayWidth = Math.max(styles?.dayWidth || 0, DEFAULT_MIN_DAY_WIDTH);
  const rowHeight = Math.max(styles?.rowHeight || 0, DEFAULT_MIN_ROW_HEIGHT);

  return {
    mainContainer: {
      display: "flex",
      flexDirection: "row",
      width: "fit-content",
      minHeight: "100%",
      position: "relative",
      ...styles?.mainContainer
    },
    topLeftCorner: {
      backgroundColor: "transparent",
      backdropFilter: "blur(15px)",
      position: "sticky",
      ...styles?.topLeftCorner,
      height: `${rowHeight * 2}rem`,
      minHeight: `${rowHeight * 2}rem`,
      minWidth: "100%",
      top: 0,
      zIndex: 0
    },
    rowLabelsContainer: {
      display: "flex",
      flexDirection: "column",
      position: "sticky",
      left: 0,
      zIndex: 5,
      ...styles?.rowLabelsContainer
    },
    rowLabel: {
      whiteSpace: "nowrap",
      height: `${rowHeight}rem`,
      minHeight: `${rowHeight}rem`,
      paddingRight: "1rem",
      paddingLeft: "1rem",
      display: "flex",
      alignItems: "center",
      ...styles?.rowLabel
    },
    tableContainer: {
      display: "flex",
      flexDirection: "column",
      minWidth: `${dayWidth * 365}rem`,
      maxWidth: "none",
      ...styles?.tableContainer,
      boxSizing: "border-box",
      position: "relative"
    },
    monthsContainer: {
      display: "flex",
      flexDirection: "row",
      position: "sticky",
      top: 0,
      height: `${rowHeight}rem`,
      minHeight: `${rowHeight}rem`,
      flexWrap: "nowrap",
      zIndex: 4,
      ...styles?.monthsContainer,
      boxSizing: "border-box"
    },
    weeksContainer: {
      display: "flex",
      flexDirection: "row",
      position: "sticky",
      top: `${rowHeight}rem`,
      height: `${rowHeight}rem`,
      minHeight: `${rowHeight}rem`,
      zIndex: 4,
      ...styles?.weeksContainer,
      boxSizing: "border-box"
    },
    rowsContainer: {
      width: "100%",
      maxWidth: "none",
      display: "flex",
      flexDirection: "column",
      ...styles?.rowsContainer,
      position: "relative"
    },
    monthsDivider: {
      height: "100%",
      ...styles?.monthsDivider,
      top: 0,
      position: "absolute"
    },
    weeksDivider: {
      height: "100%",
      ...styles?.weeksDivider,
      top: 0,
      position: "absolute"
    },
    monthLabelContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "0px",
      zIndex: 1,
      ...styles?.monthLabelContainer,
      boxSizing: "border-box"
    },
    weekLabelContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: `${7 * dayWidth}rem`,
      zIndex: 2,
      ...styles?.weekLabelContainer,
      boxSizing: "border-box"
    },
    row: {
      height: `${rowHeight}rem`,
      minHeight: `${rowHeight}rem`,
      zIndex: 3,
      display: "flex",
      justifyItems: "center",
      ...styles?.row,
      position: "relative"
    },
    slotContainer: {
      height: "100%",
      display: "flex",
      justifyContent: "start",
      alignItems: "center",
      ...styles?.slotContainer,
      position: "absolute"
    },
    slot: {
      whiteSpace: "nowrap",
      padding: "0.2rem",
      paddingLeft: "0.5rem",
      paddingRight: "0.5rem",
      borderRadius: "99px",
      textAlign: "center",
      overflow: "hidden",
      textOverflow: "ellipsis",
      ...styles?.slot
    }
  };
};
