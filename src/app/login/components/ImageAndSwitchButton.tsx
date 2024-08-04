interface ImageAndSwitchButtonProps {
    toggleSignUp: () => void;
    isSignUp: boolean;
  }
  
  // Define the ImageAndSwitchButton component with props
  const ImageAndSwitchButton: React.FC<ImageAndSwitchButtonProps> = ({ toggleSignUp, isSignUp }) => {
    return (
        <div className="absolute top-0 right-0 w-[260px] h-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/sections-3.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 flex flex-col justify-between h-full py-20">
          <div className={`text-center text-white transition-transform duration-500 ease-in-out ${isSignUp ? 'translate-x-0' : '-translate-x-[260px]'}`}>
            <h2 className="text-xl mb-2">New here?</h2>
            <p className="text-sm">Sign up and discover a great amount of new opportunities!</p>
          </div>
          <div className={`text-center text-white transition-transform duration-500 ease-in-out ${isSignUp ? 'translate-x-[260px]' : 'translate-x-0'}`}>
            <h2 className="text-xl mb-2">One of us?</h2>
            <p className="text-sm">If you already have an account, just sign in. We&apos;ve missed you!</p>
          </div>
          <div className="text-center">
            <button onClick={toggleSignUp} className="relative z-20 w-24 h-9 mx-auto bg-transparent border-2 border-white text-white rounded-full uppercase text-sm cursor-pointer transition-transform duration-500">
              {isSignUp ? "Sign in" : "Sign up"}
            </button>
          </div>
        </div>
      </div>
    )
}

export default ImageAndSwitchButton
