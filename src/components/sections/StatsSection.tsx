interface Stat {
    num: string;
    lbl: string;
}

interface StatsSectionProps {
    stats: Stat[];
}

export default function StatsSection({ stats }: StatsSectionProps) {
    return (
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {stats.map((stat) => (
                <div key={stat.lbl} className="p-6 text-center">
                    <div className="text-4xl font-extrabold text-blue-700">
                        {stat.num}
                    </div>
                    <div className="text-sm text-slate-500">{stat.lbl}</div>
                </div>
            ))}
        </div>
    );
}
