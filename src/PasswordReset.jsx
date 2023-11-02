import React from "react";
import { Amplify, Auth } from 'aws-amplify';

const ResetPassword = () => {
  const [newPassword1, setNewPassword1] = React.useState('');
  const [newPassword2, setNewPassword2] = React.useState('');
  const [oldPassword, setOldPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  
  const handleReset = () => {
    if (newPassword1 === newPassword2) {
      changePassword(oldPassword, newPassword1);
    } else {
      alert('Passwords do not match');
    }
  };
  async function changePassword (oldPassword, newPassword) {
    try {
      const user = await Auth.currentAuthenticatedUser();
      const data = await Auth.changePassword(user, oldPassword, newPassword);
      console.log(data);
    } catch(err) {
      console.log(err);
    }
  };
  
  return (  
    <div style={{ 'margin': '50px'}}>
    <h4>AWS Auth Version</h4>
    <h4>MyPassword66!</h4>
  <div style={{display: 'flex', flexDirection: 'column', gap: '10px', width: '500px'}}>
    <div style={{position: 'relative', display: 'flex', flexDirection: 'column', gap: '10px', width: '500px'}}>
    <input
      type={showPassword ? 'text' : 'password'}
      placeholder="Old Password"
      value={oldPassword}
      onChange={(e) => setOldPassword(e.target.value)}
    />
    <input
      type={showPassword ? 'text' : 'password'}
      placeholder="New Password"
      value={newPassword1}
      onChange={(e) => setNewPassword1(e.target.value)}
    />
    <input
      type={showPassword ? 'text' : 'password'}
      placeholder="Repeat New Password"
      value={newPassword2}
      onChange={(e) => setNewPassword2(e.target.value)}
    />
        <div
          style={{position: 'absolute', left: '470px', top: '3px', width: '25px', height: '25px'}}
          onClick={() => setShowPassword(!showPassword)}
        >
          <svg style={{display: showPassword ? 'block' : 'none'}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.75 12C9.75 10.7574 10.7574 9.75 12 9.75C13.2426 9.75 14.25 10.7574 14.25 12C14.25 13.2426 13.2426 14.25 12 14.25C10.7574 14.25 9.75 13.2426 9.75 12Z" fill="#1C274C"></path> <path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 13.6394 2.42496 14.1915 3.27489 15.2957C4.97196 17.5004 7.81811 20 12 20C16.1819 20 19.028 17.5004 20.7251 15.2957C21.575 14.1915 22 13.6394 22 12C22 10.3606 21.575 9.80853 20.7251 8.70433C19.028 6.49956 16.1819 4 12 4C7.81811 4 4.97196 6.49956 3.27489 8.70433C2.42496 9.80853 2 10.3606 2 12ZM12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25Z" fill="#1C274C"></path> </g></svg>      
          <svg style={{display: !showPassword ? 'block' : 'none'}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
        </div>
    </div>
    <button onClick={handleReset}>Reset Password</button>
  </div>

  </div>
  );
}
 
export default ResetPassword;