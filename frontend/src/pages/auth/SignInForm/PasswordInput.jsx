import { Eye, EyeOff } from "lucide-react";

function PasswordInput({ password, setPassword, showPassword, setShowPassword }) {
    return (
        <div>
            <label htmlFor="password" className='text-sm text-slate-900 font-medium mb-2 block'>
                Password
            </label>
            <style>{`
                input[type="password"]::-ms-reveal,
                input[type="password"]::-ms-clear,
                input[type="text"]::-ms-reveal,
                input[type="text"]::-ms-clear {
                    display: none !important;
                }
            `}</style>
            <div className="relative">
                <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={6}
                    autoComplete="current-password"
                    className="bg-slate-50 w-full text-sm text-slate-900 px-4 py-3.5 pr-12 rounded-lg outline-none border border-slate-200 focus:border-green-600 focus:bg-white focus:ring-2 focus:ring-green-100 transition-all"
                    placeholder="Enter your password"
                />
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-green-600 transition-colors z-10 p-1"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    tabIndex={-1}
                >
                    {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                    ) : (
                        <Eye className="w-5 h-5" />
                    )}
                </button>
            </div>
        </div>
    );
}

export default PasswordInput;