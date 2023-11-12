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
      background: "linear-gradient(to right, #1a1a1a, #000033)",
    },
    pageLight: {
      background: "linear-gradient(to left, #333333, #666666)",
    },
    button: {
      background: "linear-gradient(to left, #333333, #666666)",
      color: "white",
      padding: "0.5rem 2rem",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background 0.3s ease",
    },
    buttonLight: {
      background: "linear-gradient(to left, #1a1a1a, #000033)",
    },
    container: {
      position: "relative",
      width: "90%",
      height: "80vh",
      overflow: "hidden",
    },
    calendarWrapper: {
      position: "relative",
      paddingBottom: "1rem",
      height: "100%",
      overflow: "auto",
      background: "white",
    },
    vBlur: {
      backgroundColor: "transparent",
      backdropFilter: "blur(15px)",
      position: "absolute",
      height: "100%",
      width: "2px",
      right: 0,
      zIndex: 6,
    },
    hBlur: {
      backgroundColor: "transparent",
      backdropFilter: "blur(15px)",
      position: "absolute",
      width: "100%",
      height: "2px",
      bottom: 0,
      zIndex: 6,
    },
    calendar: {
      dark: {
        mainContainer: {
          background: "#1e1e1e", // Dark background color
          color: "white", // White text color
        },
        topLeftCorner: {
          background: "#2c2c2c", // Dark gray
          color: "white", // White text color
        },
        rowLabelsContainer: {
          background: "#2c2c2c", // Dark gray
        },
        rowLabel: {
          color: "white", // White text color
        },
        tableContainer: {
          border: "0.5px solid #2c2c2c", // Dark gray border
          background: "#1e1e1e", // Dark background color
        },
        monthsContainer: {
          background: "#2c2c2c",
        },
        weeksContainer: {
          background: "#2c2c2c",
        },
        monthsDivider: {
          border: "0.5px solid #2c2c2c", // Dark gray border
        },
        weeksDivider: {
          border: "0.5px solid #2c2c2c", // Dark gray border
        },
        slot: {
          backgroundColor: "#2c2c2c", // Dark gray
        },
      },
    },
  } as const;
};
