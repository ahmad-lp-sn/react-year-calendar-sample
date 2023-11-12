import "./styles.css";
import { YearCalendar } from "./YearCalendar";
import { calendarRows } from "./data";
import { useState } from "react";
import { useStyles } from "./styles";
export default function App() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const styles = useStyles();
  return (
    <div style={{ ...styles.page, ...(theme === "light" && styles.pageLight) }}>
      <button
        className={theme === "dark" ? "button" : "button-light"}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        style={{
          ...styles.button,
          ...(theme === "light" && styles.buttonLight),
        }}
      >
        {theme === "dark" ? "light" : "dark"}
      </button>
      <div style={styles.container}>
        <div style={styles.hBlur} />
        <div style={styles.vBlur} />
        <div style={styles.calendarWrapper}>
          <YearCalendar
            styles={theme === "dark" ? styles.calendar.dark : {}}
            rows={calendarRows}
          />
        </div>
      </div>
    </div>
  );
}
