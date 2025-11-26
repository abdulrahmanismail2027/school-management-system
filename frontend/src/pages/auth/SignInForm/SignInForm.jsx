import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import SignInButton from "./SignInButton";

function SignInForm({
                        email,
                        setEmail,
                        password,
                        setPassword,
                        showPassword,
                        setShowPassword,
                        isLoading,
                        setIsLoading,
                        handleSignIn
                    }) {
    return (
        <div className="max-w-md w-full bg-white p-6 sm:p-8 rounded-2xl shadow-2xl border border-slate-100 mx-auto lg:mx-0 lg:ml-auto">
            <div className="mb-8">
                <h2 className="text-slate-900 text-2xl sm:text-3xl font-bold mb-2">
                    Welcome Back
                </h2>
                <p className="text-slate-600 text-sm">Sign in to continue to your account</p>
            </div>

            <div className="space-y-5">
                <EmailInput email={email} setEmail={setEmail} />

                <PasswordInput
                    password={password}
                    setPassword={setPassword}
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                />

                <SignInButton isLoading={isLoading} setIsLoading={setIsLoading} onSubmit={handleSignIn} />
            </div>
        </div>
    );
}

export default SignInForm;