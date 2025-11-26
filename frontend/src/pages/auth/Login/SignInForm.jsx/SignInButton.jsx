function SignInButton({ isLoading, onSubmit }) {
    return (
        <div className="pt-2">
            <button
                type="button"
                onClick={(e) => onSubmit(e)}
                disabled={isLoading}
                className="w-full shadow-lg py-3.5 px-4 text-[15px] font-semibold rounded-lg text-white bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 focus:outline-none focus:ring-4 focus:ring-green-200 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transform"
            >
                {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Signing In...
                        </span>
                ) : (
                    'Sign In'
                )}
            </button>
        </div>
    );
}

export default SignInButton;