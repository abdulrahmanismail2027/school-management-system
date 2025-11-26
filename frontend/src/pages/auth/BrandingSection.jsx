import { BookOpen } from "lucide-react";
import StatsCard from "./StatsCard";

function BrandingSection() {
    return (
        <div className="space-y-6 text-center lg:text-left">
            {/* Logo/Image Section */}
            <div className="flex justify-center lg:justify-start mb-8">
                <div className="relative">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center shadow-xl transform hover:scale-105 transition-transform duration-300">
                        <BookOpen className="w-12 h-12 sm:w-14 sm:h-14 text-white" strokeWidth={2} />
                    </div>
                </div>
            </div>

            <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                    The Faith Centre<br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                        Islamic School
                    </span>
                </h1>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mt-4 max-w-md mx-auto lg:mx-0">
                    Empowering students with knowledge, faith, and excellence. Join our community of learners dedicated to academic and spiritual growth.
                </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 max-w-md mx-auto lg:mx-0">
                <StatsCard icon="users" value="500+" label="Students" />
                <StatsCard icon="award" value="50+" label="Teachers" />
                <StatsCard icon="calendar" value="15+" label="Years" />
            </div>
        </div>
    );
}

export default BrandingSection;