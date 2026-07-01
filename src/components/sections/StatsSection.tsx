interface Stat {
  num: string;
  lbl: string;
}

interface StatsSectionProps {
  stats: Stat[];
}

export default function StatsSection({ stats }: StatsSectionProps) {
  return (
    <div className="stats">
      {stats.map((s) => (
        <div key={s.lbl} className="stat">
          <div className="num">{s.num}</div>
          <div className="lbl">{s.lbl}</div>
        </div>
      ))}
    </div>
  );
}
