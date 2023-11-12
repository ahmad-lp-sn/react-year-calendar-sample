import { CSSProperties } from "react";

export const useStyles = () => {
  return {
    page: {
      display: "flex",
      flexDirection: "column",
      height: "80%",
      alignItems: "start",
      justifyContent: "center",
      padding: "3rem",
      gap: "1rem",
      background: "linear-gradient(to right, #1a1a1a, #000033)"
    },
    pageLight: {
      background: "linear-gradient(to left, #333333, #666666)"
    },
    button: {
      background: "linear-gradient(to left, #333333, #666666)",
      color: "white",
      padding: "0.5rem 2rem",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background 0.3s ease"
    },
    buttonLight: {
      background: "linear-gradient(to left, #1a1a1a, #000033)"
    },
    container: {
      position: "relative",
      width: "90%",
      height: "80vh",
      overflow: "hidden"
    },
    calendarWrapper: {
      position: "relative",
      paddingBottom: "1rem",
      height: "100%",
      overflow: "auto",
      background: "white"
    },
    vBlur: {
      backgroundColor: "transparent",
      backdropFilter: "blur(15px)",
      position: "absolute",
      height: "100%",
      width: "2px",
      right: 0,
      zIndex: 6
    },
    hBlur: {
      backgroundColor: "transparent",
      backdropFilter: "blur(15px)",
      position: "absolute",
      width: "100%",
      height: "2px",
      bottom: 0,
      zIndex: 6
    },
    calendar: {
      dark: {
        mainContainer: {
          background: "#1e1e1e", // Dark background color
          color: "white" // White text color
        },
        topLeftCorner: {
          background: "#2c2c2c", // Dark gray
          color: "white" // White text color
        },
        rowLabelsContainer: {
          background: "#2c2c2c" // Dark gray
        },
        rowLabel: {
          color: "white" // White text color
        },
        tableContainer: {
          border: "0.5px solid #2c2c2c", // Dark gray border
          background: "#1e1e1e" // Dark background color
        },
        monthsContainer: {
          borderBottom: "0.5px solid #2c2c2c", // Dark gray border
          background: "linear-gradient(to left, #1a1a1a,#1a1a1a, #000033)"
        },
        weeksContainer: {
          borderBottom: "0.5px solid #2c2c2c", // Dark gray border
          background:
            "linear-gradient(to left,#1a1a1a, #000033, #1a1a1a, #000033,#1a1a1a)" // Windows 10 accent color (adjust if needed)
        },
        monthsDivider: {
          border: "0.5px solid #2c2c2c" // Dark gray border
        },
        weeksDivider: {
          border: "0.5px solid #2c2c2c" // Dark gray border
        },
        monthLabelContainer: {
          borderRight: "1px solid #2c2c2c" // Dark gray border
        },
        weekLabelContainer: {
          borderRight: "1px solid #2c2c2c" // Dark gray border
        },
        slot: {
          backgroundColor: "#2c2c2c" // Dark gray
        }
      },
      light: {
        mainContainer: {
          background: "#ffffff", // Light background color
          color: "#000000" // Black text color
        },
        topLeftCorner: {
          background: "#f4f4f4", // Light gray
          color: "#000000" // Black text color
        },
        rowLabelsContainer: {
          background: "#f4f4f4" // Light gray
        },
        rowLabel: {
          color: "#000000" // Black text color
        },
        tableContainer: {
          border: "0.5px solid #d4d4d4", // Light gray border
          background: "#f4f4f4" // Light background color
        },
        monthsContainer: {
          borderBottom: "0.5px solid #d4d4d4", // Light gray border
          background: "linear-gradient(to left, #eaeaea, #f4f4f0)" // Windows 10 accent color (adjust if needed)
        },
        weeksContainer: {
          borderBottom: "0.5px solid #d4d4d4", // Light gray border
          background: "linear-gradient(to left, #eaeaea, #f4f4f0)" // Windows 10 accent color (adjust if needed)
        },
        monthsDivider: {
          border: "0.5px solid #d4d4d4" // Light gray border
        },
        weeksDivider: {
          border: "0.5px solid #d4d4d4" // Light gray border
        },
        monthLabelContainer: {
          borderRight: "1px solid #d4d4d4" // Light gray border
        },
        weekLabelContainer: {
          borderRight: "1px solid #d4d4d4" // Light gray border
        }
      }
    }
  } as const;
};
