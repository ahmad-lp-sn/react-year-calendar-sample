import { YearCalendar } from "./YearCalendar";
import { calendarRows } from "./data";
import { useState } from "react";
import { useStyles } from "./styles";
const themes = ["dark", "light", "custom1"] as const;
export default function App() {
  const [theme, setTheme] = useState<(typeof themes)[number]>("light");
  const styles = useStyles();
  return (
    <div style={{ ...styles.page, ...(theme === "light" && styles.pageLight) }}>
      <div style={{ display: "flex", gap: "1rem" }}>
        {themes.map((v) => (
          <button
            onClick={() => setTheme(v)}
            style={{
              ...styles.button,
            }}
          >
            {v}
          </button>
        ))}
      </div>
      <div style={styles.container}>
        <div style={styles.hBlur} />
        <div style={styles.vBlur} />
        <div style={styles.calendarWrapper}>
          <YearCalendar
            styles={{ ...styles.calendar[theme] }}
            rows={calendarRows}
          />
        </div>
      </div>
    </div>
  );
}
