import { useState } from "react";
import BrandingSection from "../BrandingSection";
import SignInForm from "./SignInForm";
import { useNavigate } from "react-router-dom";

function SignInPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSignIn = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        //! Simulate API call
        //! here check for user
        setTimeout(() => {
            setIsLoading(false);
            //! Navigate to generate-report page
            navigate('/generate-teacher-nav-bar', {
                state: {
                    email: email,
                    name: 'Ahmad Ibrahim',
                    // From API response
                    // Add any other user data you need
                }
            });
        }, 500);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50">
            <div className="grid lg:grid-cols-2 items-center gap-12 lg:gap-16 max-w-6xl w-full">
                <BrandingSection />

                <SignInForm
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                    handleSignIn={handleSignIn}
                />
            </div>
        </div>
    );
}

export default SignInPage;