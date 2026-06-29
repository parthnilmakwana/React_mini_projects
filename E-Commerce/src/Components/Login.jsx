import React, { useState } from 'react';

function Login() {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Signup
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    agreeToTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert(`${isLogin ? "Login" : "Sign Up"} Successful! (Demo Mode)`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-3xl shadow-xl border border-gray-100 space-y-6">
        
        {/* Toggle tabs */}
        <div className="flex bg-gray-100 p-1 rounded-xl">
          <button
            type="button"
            onClick={() => setIsLogin(true)}
            className={`w-1/2 py-2.5 text-sm font-bold rounded-lg transition-all duration-300 ${isLogin ? 'bg-white text-black shadow-sm' : 'text-gray-500 hover:text-black'}`}
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => setIsLogin(false)}
            className={`w-1/2 py-2.5 text-sm font-bold rounded-lg transition-all duration-300 ${!isLogin ? 'bg-white text-black shadow-sm' : 'text-gray-500 hover:text-black'}`}
          >
            Sign Up
          </button>
        </div>

        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-950 tracking-tight">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            {isLogin ? "Enter your credentials to access your account" : "Join us and enjoy premium shopping features"}
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          
          {/* Name Field (Sign Up Only) */}
          {!isLogin && (
            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black transition-all bg-gray-50"
              />
            </div>
          )}

          {/* Email Field */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black transition-all bg-gray-50"
            />
          </div>

          {/* Password Field */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Password</label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black transition-all bg-gray-50"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-black transition-colors"
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Remember Me / Forgot Password (Login Mode) */}
          {isLogin ? (
            <div className="flex items-center justify-between text-sm pt-1">
              <label className="flex items-center text-gray-500 hover:text-black cursor-pointer">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-black border-gray-300 rounded focus:ring-black cursor-pointer"
                />
                <span className="ml-2 font-medium">Remember me</span>
              </label>
              <a href="#" className="font-bold text-black hover:underline">
                Forgot password?
              </a>
            </div>
          ) : (
            /* Agree to Terms (Signup Mode) */
            <div className="flex items-start text-sm pt-1">
              <label className="flex items-start text-gray-500 hover:text-black cursor-pointer">
                <input
                  id="agreeToTerms"
                  name="agreeToTerms"
                  type="checkbox"
                  required
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  className="h-4 w-4 text-black border-gray-300 rounded focus:ring-black mt-0.5 cursor-pointer"
                />
                <span className="ml-2 font-medium">
                  I agree to the <a href="#" className="font-bold text-black hover:underline">Terms of Service</a> and <a href="#" className="font-bold text-black hover:underline">Privacy Policy</a>
                </span>
              </label>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3.5 rounded-xl font-bold hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 duration-200 mt-2 cursor-pointer"
          >
            {isLogin ? "Sign In" : "Register"}
          </button>
        </form>

        {/* Social Authentication */}
        <div className="relative flex items-center justify-center my-4">
          <div className="absolute border-t border-gray-200 w-full"></div>
          <span className="relative bg-white px-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Or Continue With</span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center py-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors font-semibold text-sm cursor-pointer">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path fill="#EA4335" d="M12 5.04c1.67 0 3.17.58 4.35 1.71l3.25-3.25C17.65 1.58 15 1 12 1 7.35 1 3.37 3.65 1.39 7.56l3.85 2.99c.96-2.88 3.66-5.51 6.76-5.51z"/>
              <path fill="#4285F4" d="M23.49 12.27c0-.81-.07-1.59-.2-2.36H12v4.51h6.46c-.28 1.47-1.11 2.71-2.36 3.55l3.66 2.84c2.14-1.97 3.37-4.87 3.37-8.54z"/>
              <path fill="#FBBC05" d="M5.24 14.54c-.24-.73-.38-1.5-.38-2.3a7.8 7.8 0 01.38-2.3L1.39 6.95C.5 8.74 0 10.31 0 12c0 1.69.5 3.26 1.39 5.05l3.85-2.51z"/>
              <path fill="#34A853" d="M12 23c3.24 0 5.97-1.07 7.96-2.91l-3.66-2.84c-1.02.68-2.33 1.09-4.3 1.09-3.1 0-5.8-2.63-6.76-5.51L1.39 15.82C3.37 19.73 7.35 23 12 23z"/>
            </svg>
            Google
          </button>
          <button className="flex items-center justify-center py-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors font-semibold text-sm cursor-pointer">
            <svg className="w-5 h-5 mr-2 fill-black" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
            GitHub
          </button>
        </div>

      </div>
    </div>
  );
}

export default Login;