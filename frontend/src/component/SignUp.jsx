import React, { useState } from 'react';

const SignUp = () => {
  const [FullName, setFullName] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');  // Fixed the typo here
  const [Email, setEmail] = useState('');
  const [Phone, setPhone] = useState('');
  const [Role, setRole] = useState('');  // New state to track the selected role

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({ FullName, Password, ConfirmPassword, Phone, Email, Role });  // Added Role here
  };

  return (
    <div className="w-[320px] bg-[#111827] p-8 text-[#F3F4F6] rounded-lg">
      <p className="text-center text-xl font-bold leading-8">SignUp</p>
      <form className="mt-6" onSubmit={handleSubmit}>

        <div className="mt-1">
          <label htmlFor="FullName" className="block text-[#9CA3AF] mb-1">Full Name</label>
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
          <label htmlFor="Email" className="block text-[#9CA3AF] mb-1">Email</label>
          <input
            type="text"
            id="Email"
            name="Email"
            placeholder=""
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 bg-[#111827] border border-[#374151] text-[#F3F4F6] rounded-md focus:border-[#A78BFA]"
          />
        </div>

        <div className="mt-1">
          <label htmlFor="Phone" className="block text-[#9CA3AF] mb-1">Phone</label>
          <input
            type="text"
            id="Phone"
            name="Phone"
            placeholder=""
            value={Phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-3 bg-[#111827] border border-[#374151] text-[#F3F4F6] rounded-md focus:border-[#A78BFA]"
          />
        </div>

        <div className="mt-1">
          <label htmlFor="Password" className="block text-[#9CA3AF] mb-1">Password</label>
          <input
            type="password"
            id="Password" 
            name="Password"  
            placeholder=""
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 bg-[#111827] border border-[#374151] text-[#F3F4F6] rounded-md focus:border-[#A78BFA]"
          /> 
        </div>

        <div className="mt-1">
          <label htmlFor="ConfirmPassword" className="block text-[#9CA3AF] mb-1">Confirm Password</label>
          <input
            type="password"
            id="ConfirmPassword"  
            name="ConfirmPassword"  
            placeholder=""
            value={ConfirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}  
            className="w-full p-3 bg-[#111827] border border-[#374151] text-[#F3F4F6] rounded-md focus:border-[#A78BFA]"
          />
        </div>

        {/* Select Input for Role (Coach/Member) */}
        <div className="mt-1">
          <label htmlFor="Role" className="block text-[#9CA3AF] mb-1">Role</label>
          <select
            id="Role"
            name="Role"
            value={Role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full p-3 bg-[#111827] border border-[#374151] text-[#F3F4F6] rounded-md focus:border-[#A78BFA]"
          >
            <option value="">Select Role...</option>
            <option value="member">Member</option>
            <option value="coach">Coach</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full mt-4 py-3 bg-[#A78BFA] text-[#111827] font-semibold rounded-md">
          Sign up
        </button>
      </form>

      <div className="flex items-center my-4">
        {/* Your social login buttons or other content can go here */}
      </div>

      <p className="text-center text-sm text-[#9CA3AF] mt-4">
        Have an account? <a href="#" className="text-[#A78BFA] hover:underline">Login</a>
      </p>
    </div>
  );
};

export default SignUp;
