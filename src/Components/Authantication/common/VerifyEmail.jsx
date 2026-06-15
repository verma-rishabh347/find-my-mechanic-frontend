import { Link } from "react-router-dom";

const VerifyEmail = () => {
  const handlego=()=>{
    if(localStorage.getItem("setup")==="signup"){
      return "/authantication/SetupUserProfile"
    }else if (localStorage.getItem("setup")==="signin"){
      return "/authantication/createpassword"
    }

    // resetsuccess
    

  }
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-12 bg-background">
      <div className="w-full max-w-[520px] bg-surface-container-lowest rounded-xl shadow-[0_4px_12px_rgba(0,35,111,0.05)] border border-outline-variant p-6 md:p-12 text-center">
        

  
        <h1 className="text-3xl font-bold text-on-background mb-2">
          Verify Your Email
        </h1>

        <p className="text-on-surface-variant mb-10">
          We've sent a 6-digit code to your Gmail address. Please enter it
          below to secure your account.
        </p>

      
        <div className="max-w-sm mx-auto mb-10">
  <label className="block mb-2 font-medium">
    Enter 6-digit OTP
  </label>

  <input
    type="text"
    maxLength={6}
    placeholder="123456"
    className="w-full h-14 px-4 text-center text-2xl font-bold border rounded-lg outline-none"
  />
</div>
        
        <div className="space-y-6">
          <Link to={handlego()} ><button
            className="w-full bg-[#FF6B00] hover:bg-[#E66000] text-white font-semibold py-4 rounded-xl shadow-md transition-all active:scale-[0.98]"
          >
            Verify Code
          </button></Link>

          <div className="flex flex-col items-center gap-2">
            <p className="text-sm text-on-surface-variant">
              Didn't receive the code?
            </p>

            <div className="flex items-center gap-2">
              <button className="font-semibold text-primary opacity-50 cursor-not-allowed">
                Resend Code
              </button>

              <span className="text-on-surface-variant font-semibold text-sm">
                (00:59)
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-outline-variant">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuGUUOkOoaNmecLOiAOi2uf9qW0Cw0_UJ28qsJoYHGAm3f-B2gXdv3BO0HTA4yAfThOPNAdDKgT9Pf19PeZ-TSb4ffrFfJnkcK44Nj7bBEffk67Hy_gEgUJ7Lga6UEHSPQd3BPNwsV5xO4r2-x9VqiO-0Q3XyeM6rhXIbXuUgGuvGGga5HrHK7G1SVuD3FI9TDjpA6KOvQBzBGBbyms0TocfMnoBHfonzNnhmk0AJtou4G_WHi7zNy6AV-eMHokLZLK7Ax_9JsPZuB"
            alt="Verification"
            className="w-full h-32 object-cover rounded-lg opacity-80"
          />
        </div>
      </div>
    </main>
  );
};

export default VerifyEmail;