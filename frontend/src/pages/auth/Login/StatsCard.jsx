import { Users, Award, Calendar } from "lucide-react";

function StatsCard({ icon, value, label }) {
    const iconMap = {
        users: Users,
        award: Award,
        calendar: Calendar
    };

    const IconComponent = iconMap[icon];

    return (
        <div className="flex flex-col items-center lg:items-start p-3 sm:p-4 bg-white/50 backdrop-blur-sm rounded-xl hover:bg-white/80 transition-all duration-300">
            <IconComponent className="w-6 h-6 text-green-600 mb-2" />
            <div className="text-2xl sm:text-3xl font-bold text-green-600">{value}</div>
            <div className="text-xs sm:text-sm text-slate-600">{label}</div>
        </div>
    );
}

export default StatsCard;