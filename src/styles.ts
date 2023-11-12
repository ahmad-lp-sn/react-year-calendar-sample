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
      light: {
        monthsContainer: {
          borderColor: "#a4f4f0",
        },
        monthLabelContainer: {
          borderColor: "#a4f4f0",
        },
        weekLabelContainer: {
          borderColor: "#a4f4f0",
        },
      },
      dark: {
        mainContainer: {
          background: "#1e1e1e",
          color: "white",
        },
        topLeftCorner: {
          background: "#2c2c2c",
          color: "white",
        },
        rowLabelsContainer: {
          background: "#2c2c2c",
        },
        rowLabel: {
          color: "white",
        },
        tableContainer: {
          border: "0.5px solid #2c2c2c",
          background: "#1e1e1e",
        },
        monthsContainer: {
          background: "#2c2c2c",
        },
        weeksContainer: {
          background: "#2c2c2c",
        },
        monthsDivider: {
          border: "0.5px solid #2c2c2c",
        },
        weeksDivider: {
          border: "0.5px solid #2c2c2c",
        },
        slot: {
          backgroundColor: "#2c2c2c",
        },
      },
      custom1: {
        mainContainer: {
          background: "#1e1e1e",
          color: "white",
        },
        topLeftCorner: {
          background: "#723D46",
        },
        rowLabelsContainer: {
          background: "#723D46",
        },
        tableContainer: {
          border: "0.5px solid #2c2c2c",
          background: "#472D30",
        },
        monthsContainer: {
          background: "#472D30",
          borderColor: "#FFE1A8",
        },
        weeksContainer: {
          background: "#C9CBA3",
          color: "#472D30",
        },
        monthLabelContainer: {
          borderColor: "#FFE1A8",
        },
        weekLabelContainer: {
          borderColor: "#FFE1A8",
        },
        monthsDivider: {
          border: "0.5px solid #FFE1A8",
          opacity: 0.5,
        },
        weeksDivider: {
          border: "0.5px solid #FFE1A8",
          opacity: 0.5,
        },
        slot: {
          backgroundColor: "#2c2c2c",
        },
      },
    },
  } as const;
};
