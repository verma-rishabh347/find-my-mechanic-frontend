

import { Link } from "react-router-dom";

const ResetSuccess = () => {
  return (
    <main className="min-h-screen flex items-center justify-center p1-12 px-4 bg-background">
      <div className="relative w-full max-w-[520px]">
        

        <div className="relative bg-surface-container-lowest rounded-xl shadow-[0_4px_12px_rgba(0,35,111,0.05)] border border-outline-variant/30 overflow-hidden text-center p-12">

          <h1 className="text-3xl font-bold text-primary mb-4">
            Password Reset Successful!
          </h1>

          <p className=" mx-auto mb-10">
            Your password has been updated. You can now use your new password
            to sign in.
          </p>

          <Link to="/authantication/signin">
          <button
            
            
            className="inline-flex bg-blue-800 items-center justify-center w-full bg-on-tertiary-container text-white font-semibold py-4 px-6 rounded-xl shadow-md hover:brightness-110 active:scale-[0.98] transition-all duration-200 group"
          >
            Go to Sign In

          </button>
          </Link>

          
          <div className="mt-12 pt-6 border-t border-outline-variant">
            <p className="text-sm text-outline">
              Didn't expect this?{" "}
              
              <a
                href="#"
                className="text-primary font-semibold hover:underline"
              >
                Contact Support
              </a>
            </p>
          </div>
        </div>

        
      </div>
    </main>
  );
};

export default ResetSuccess;