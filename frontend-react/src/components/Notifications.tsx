import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Notifications: React.FC = () => {
  const handleNotification = () => {
    toast.success("Notification envoyée avec succès !", {
      position: "top-right", // Correct usage instead of toast.POSITION
      autoClose: 3000, 
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div>
      <h1>Notifications</h1>
      <button onClick={handleNotification}>Afficher une notification</button>
      <ToastContainer />
    </div>
  );
};

export default Notifications;
