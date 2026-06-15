import { HiOutlineLockClosed } from "react-icons/hi";
import { Link } from 'react-router-dom';


const ForgotPassword = () => {
  const handleinput=()=>
  {
    localStorage.setItem("setup","signin");
    return "/authantication/verifyemail";
  }
  return (
    <main className="flex items-center justify-center px-4 py-12 bg-background min-h-screen">
      <div className="w-full max-w-md bg-surface-container-lowest p-6 md:p-12 rounded-xl shadow-[0_4px_12px_rgba(0,35,111,0.05)] border border-outline-variant/30">
     

        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-primary-fixed rounded-full flex items-center justify-center">
            <span className="material-symbols-outlined text-primary text-4xl">
              <HiOutlineLockClosed/>
            </span>
          </div>
        </div>


        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-on-surface mb-2">
            Forgot Password?
          </h1>

          <p className="text-on-surface-variant">
            Enter the email address associated with your account and we will
            send you a link to reset your password.
          </p>
        </div>


        <form className="space-y-6">
          <div className="space-y-1">
            <label
              htmlFor="email"
              className="font-semibold text-on-surface"
            >
              Email Address
            </label>

            <input
              type="email"
              id="email"
              placeholder="john@example.com"
              className="w-full h-12 px-4 rounded-lg border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-transparent"
            />
          </div>

          <Link to={handleinput()}
            
            className="w-full h-12 bg-primary bg-blue-900 text-white font-semibold rounded-lg shadow-sm hover:shadow-md active:scale-95 transition-all duration-150 flex items-center justify-center gap-2"
          >
            Send Reset Link
          </Link>
        </form>

      
        <div className="mt-10 text-center border-t border-outline-variant pt-6">
          <a
            href="#"
            className="inline-flex items-center gap-2 font-semibold text-primary hover:underline group"
          >
            Back to Sign In
          </a>
        </div>
      </div>
    </main>
  );
};

export default ForgotPassword;