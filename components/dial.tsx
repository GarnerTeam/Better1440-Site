// The Better1440 mark as a day dial: 1,440 minutes around the ring, one
// tick per hour, and the mint arc for the time handed back. The arc sweeps
// in once on load (skipped when the visitor prefers reduced motion).

const SIZE = 440;
const C = SIZE / 2;
const R = 176;
const CIRC = 2 * Math.PI * R;
const SHOWN = 0.72; // share of the ring the mint arc covers

export function Dial() {
  const hours = Array.from({ length: 24 }, (_, i) => i);
  return (
    <svg className="dial" viewBox={`0 0 ${SIZE} ${SIZE}`} role="img" aria-label="A clock dial reading 1440, the minutes in a day">
      <circle cx={C} cy={C} r={R} className="dial-track" />
      <circle
        cx={C}
        cy={C}
        r={R}
        className="dial-arc"
        strokeDasharray={CIRC}
        strokeDashoffset={CIRC * (1 - SHOWN)}
        style={{ ["--circ" as string]: CIRC, ["--off" as string]: CIRC * (1 - SHOWN) }}
        transform={`rotate(-90 ${C} ${C})`}
      />
      {hours.map((h) => {
        const a = (h / 24) * 2 * Math.PI;
        const major = h % 6 === 0;
        const r1 = R - 30;
        const r2 = r1 - (major ? 14 : 7);
        // Leave room for the number at 6 and 18 o'clock.
        if (h === 6 || h === 18) return null;
        return (
          <line
            key={h}
            x1={C + r1 * Math.sin(a)}
            y1={C - r1 * Math.cos(a)}
            x2={C + r2 * Math.sin(a)}
            y2={C - r2 * Math.cos(a)}
            className={major ? "dial-tick dial-tick-major" : "dial-tick"}
          />
        );
      })}
      <text x={C} y={C + 8} className="dial-num" textAnchor="middle" dominantBaseline="middle">
        1440
      </text>
      <text x={C} y={C + 64} className="dial-cap" textAnchor="middle">
        minutes a day
      </text>
    </svg>
  );
}
