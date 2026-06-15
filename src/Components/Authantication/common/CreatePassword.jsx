
import { Link } from "react-router-dom";

const CreatePassword = () => {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-12 md:py-24 bg-background">
      <div className="max-w-[480px] w-full">
        <div className="bg-surface-container-lowest rounded-xl shadow-[0_4px_12px_rgba(0,35,111,0.05)] border border-outline-variant p-6 md:p-12">
          
       
          <div className="flex flex-col items-center mb-6 text-center">
            

            <h1 className="text-2xl font-bold text-on-surface mb-1">
              Create New Password
            </h1>

            <p className="text-on-surface-variant">
              Your identity has been verified. Please choose a strong new
              password to secure your account.
            </p>
          </div>

          
          <form className="space-y-6">
            
         
            <div className="space-y-1">
              <label
                htmlFor="new_password"
                className="font-semibold text-sm text-on-surface-variant"
              >
                New Password
              </label>

              <div className="relative">
                <input
                  id="new_password"
                  type="password"
                  placeholder="••••••••"
                  className="w-full h-12 px-4 bg-surface-container-lowest border border-outline-variant rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                />

                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant"
                >
                 
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="space-y-1">
              <label
                htmlFor="confirm_password"
                className="font-semibold text-sm text-on-surface-variant"
              >
                Confirm New Password
              </label>

              <div className="relative">
                <input
                  id="confirm_password"
                  type="password"
                  placeholder="••••••••"
                  className="w-full h-12 px-4 bg-surface-container-lowest border border-outline-variant rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                />

                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant"
                >
                
                </button>
              </div>
            </div>

           
            <Link to="/authantication/resetsuccess"><button
           
              type="submit"
              className="w-full h-14 bg-blue-800 text-white font-semibold rounded-xl shadow-md hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              Reset Password
            </button>
</Link>
            
         
            <div className="text-center mt-6">
              <a
                href="#"
                className="inline-flex items-center gap-1 font-semibold text-sm text-primary hover:underline transition-all"
              >
               

                Back to Sign In
              </a>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default CreatePassword;