import React, { useState } from 'react';

const Login = () => {
  const [FullName, setUFullName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({ FullName, password });
  };

  return (
    <div className="w-[320px] bg-[#111827] p-8 text-[#F3F4F6] rounded-lg">
      <p className="text-center text-xl font-bold leading-8">Login</p>
      <form className="mt-6" onSubmit={handleSubmit}>
      <div className="mt-1">
          <label htmlFor="FullName" className="block text-[#9CA3AF] mb-1">FullName</label>
          <input
            type="text"
            id="FullName"
            name="FullName"
            placeholder=""
            value={FullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full p-3 bg-[#111827] border border-[#374151] text-[#F3F4F6] rounded-md focus:border-[#A78BFA]"
          />
        </div>
        <div className="mt-1">
          <label htmlFor="password" className="block text-[#9CA3AF] mb-1">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 bg-[#111827] border border-[#374151] text-[#F3F4F6] rounded-md focus:border-[#A78BFA]"
          />
          <div className="flex justify-end mt-2">
            <a href="#" className="text-[#9CA3AF] text-sm hover:underline">Forgot Password?</a>
          </div>
        </div>
        <button
          type="submit"
          className="w-full mt-4 py-3 bg-[#A78BFA] text-[#111827] font-semibold rounded-md">
          Sign in
        </button>
      </form>

      <p className="text-center text-sm text-[#9CA3AF] mt-4">
        Don't have an account? <a href="#" className="text-[#A78BFA] hover:underline">Sign up</a>
      </p>
    </div>
  );
};

export default Login;
