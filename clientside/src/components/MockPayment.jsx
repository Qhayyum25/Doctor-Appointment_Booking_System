// // import React, { useContext, useEffect, useState } from "react";
// // import { AppContext } from "../context/AppContext";
// // import MockPayment from "./MockPayment"; // ADD THIS
// // import axios from "axios";
// // import { toast } from "react-toastify";

// // const MyAppointments = () => {
// //   const { backendUrl, token, getDoctorsData } = useContext(AppContext);
// //   const [appointments, setAppointments] = useState([]);
  
// //   // ... rest of your code stays the same ...

// //   return (
// //     <div>
// //       <p className="pb-3 mt-12 font-medium text-zinc-700 border-b">
// //         My appointments
// //       </p>
// //       <div>
// //         {appointments.map((item, index) => (
// //           <div
// //             className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b"
// //             key={index}
// //           >
// //             {/* ... existing doctor info ... */}
            
// //             <div className="flex flex-col gap-2 justify-end">
// //               {!item.cancelled && !item.isCompleted && (
// //                 <MockPayment
// //                   amount={item.docData.fees}
// //                   appointmentId={item._id}
// //                   userId={item.userId}
// //                   docId={item.docId}
// //                   onSuccess={() => {
// //                     toast.success('Payment successful!');
// //                     getUserAppointments();
// //                     getDoctorsData();
// //                   }}
// //                 />
// //               )}
// //               {!item.cancelled && !item.isCompleted && (
// //                 <button
// //                   onClick={() => cancelAppointment(item._id)}
// //                   className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300"
// //                 >
// //                   Cancel appointment
// //                 </button>
// //               )}
// //               {item.cancelled && !item.isCompleted && (
// //                 <button className="sm:min-w-48 py-2 border border-red-500 rounded text-red-500">
// //                   Appointment cancelled
// //                 </button>
// //               )}
// //               {item.isCompleted && (
// //                 <button className="sm:min-w-48 py-2 border border-green-500 rounded text-green-500">
// //                   Completed
// //                 </button>
// //               )}
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default MyAppointments;





// import { useState } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const MockPayment = ({ amount, appointmentId, userId, docId, onSuccess }) => {
//   const [loading, setLoading] = useState(false);
//   const [showPaymentForm, setShowPaymentForm] = useState(false);
//   const [formData, setFormData] = useState({
//     cardNumber: '',
//     cardHolder: '',
//     expiryDate: '',
//     cvv: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const validateForm = () => {
//     if (!formData.cardNumber || !formData.cardHolder || !formData.expiryDate || !formData.cvv) {
//       toast.error('Please fill all fields');
//       return false;
//     }
//     if (formData.cardNumber.length < 13) {
//       toast.error('Invalid card number');
//       return false;
//     }
//     if (formData.cvv.length < 3) {
//       toast.error('Invalid CVV');
//       return false;
//     }
//     return true;
//   };

//   const handlePayment = async () => {
//     if (!validateForm()) return;

//     try {
//       setLoading(true);

//       // Simulate payment processing (2 seconds delay)
//       await new Promise((resolve) => setTimeout(resolve, 2000));

//       // Payment successful - just show success message
//       toast.success('Payment successful! Appointment confirmed.');
//       setShowPaymentForm(false);
//       setFormData({
//         cardNumber: '',
//         cardHolder: '',
//         expiryDate: '',
//         cvv: '',
//       });
//       onSuccess();
      
//     } catch (error) {
//       console.error('Payment error:', error);
//       toast.error('Error processing payment');
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (!showPaymentForm) {
//     return (
//       <button
//         onClick={() => setShowPaymentForm(true)}
//         className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 font-semibold transition-all"
//       >
//         Pay ₹{amount}
//       </button>
//     );
//   }

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mx-4">
//         <h2 className="text-2xl font-bold mb-6 text-center">Payment Details</h2>

//         <div className="space-y-4 mb-6">
//           {/* Card Number */}
//           <div>
//             <label className="block text-sm font-medium mb-2">Card Number</label>
//             <input
//               type="text"
//               name="cardNumber"
//               value={formData.cardNumber}
//               onChange={handleInputChange}
//               placeholder="1234 5678 9012 3456"
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               maxLength="16"
//             />
//             <p className="text-xs text-gray-500 mt-1">Test Card: 4111111111111111</p>
//           </div>

//           {/* Card Holder */}
//           <div>
//             <label className="block text-sm font-medium mb-2">Card Holder Name</label>
//             <input
//               type="text"
//               name="cardHolder"
//               value={formData.cardHolder}
//               onChange={handleInputChange}
//               placeholder="John Doe"
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           {/* Expiry & CVV */}
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium mb-2">Expiry (MM/YY)</label>
//               <input
//                 type="text"
//                 name="expiryDate"
//                 value={formData.expiryDate}
//                 onChange={handleInputChange}
//                 placeholder="12/25"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 maxLength="5"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-2">CVV</label>
//               <input
//                 type="text"
//                 name="cvv"
//                 value={formData.cvv}
//                 onChange={handleInputChange}
//                 placeholder="123"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 maxLength="4"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Amount Display */}
//         <div className="bg-gray-100 p-4 rounded-lg mb-6">
//           <p className="text-sm text-gray-600">Amount to Pay</p>
//           <p className="text-2xl font-bold text-gray-800">₹{amount}</p>
//         </div>

//         {/* Buttons */}
//         <div className="flex gap-4">
//           <button
//             onClick={() => setShowPaymentForm(false)}
//             disabled={loading}
//             className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-50 font-medium"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={handlePayment}
//             disabled={loading}
//             className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-400 font-semibold transition-all"
//           >
//             {loading ? 'Processing...' : 'Pay Now'}
//           </button>
//         </div>

//         <p className="text-xs text-gray-500 text-center mt-4">
//           ⚠️ This is a mock payment for testing purposes only
//         </p>
//       </div>
//     </div>
//   );
// };

// export default MockPayment;



import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const MockPayment = ({ amount, appointmentId, userId, docId, onSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    if (!formData.cardNumber || !formData.cardHolder || !formData.expiryDate || !formData.cvv) {
      toast.error('Please fill all fields');
      return false;
    }
    if (formData.cardNumber.length < 13) {
      toast.error('Invalid card number');
      return false;
    }
    if (formData.cvv.length < 3) {
      toast.error('Invalid CVV');
      return false;
    }
    return true;
  };

  const handlePayment = async () => {
    if (!validateForm()) return;

    try {
      setLoading(true);

      // Simulate payment processing (2 seconds delay)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Payment successful - Mark appointment as completed
      toast.success('Payment successful! Appointment confirmed.');
      
      // Optional: Update appointment status in backend
      // (If your backend has a route to mark payment as done)
      // You can uncomment this if needed:
      /*
      try {
        await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/api/user/complete-appointment`,
          { appointmentId },
          { headers: { token } }
        );
      } catch (error) {
        console.log("Optional: Backend update failed");
      }
      */

      setShowPaymentForm(false);
      setFormData({
        cardNumber: '',
        cardHolder: '',
        expiryDate: '',
        cvv: '',
      });
      
      // Call onSuccess callback
      onSuccess();
      
    } catch (error) {
      console.error('Payment error:', error);
      toast.error('Error processing payment');
    } finally {
      setLoading(false);
    }
  };

  if (!showPaymentForm) {
    return (
      <button
        onClick={() => setShowPaymentForm(true)}
        className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 font-semibold transition-all"
      >
        Pay ₹{amount}
      </button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mx-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Payment Details</h2>

        <div className="space-y-4 mb-6">
          {/* Card Number */}
          <div>
            <label className="block text-sm font-medium mb-2">Card Number</label>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleInputChange}
              placeholder="1234 5678 9012 3456"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              maxLength="16"
            />
            <p className="text-xs text-gray-500 mt-1">Test Card: 4111111111111111</p>
          </div>

          {/* Card Holder */}
          <div>
            <label className="block text-sm font-medium mb-2">Card Holder Name</label>
            <input
              type="text"
              name="cardHolder"
              value={formData.cardHolder}
              onChange={handleInputChange}
              placeholder="John Doe"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Expiry & CVV */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Expiry (MM/YY)</label>
              <input
                type="text"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleInputChange}
                placeholder="12/25"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                maxLength="5"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">CVV</label>
              <input
                type="text"
                name="cvv"
                value={formData.cvv}
                onChange={handleInputChange}
                placeholder="123"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                maxLength="4"
              />
            </div>
          </div>
        </div>

        {/* Amount Display */}
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <p className="text-sm text-gray-600">Amount to Pay</p>
          <p className="text-2xl font-bold text-gray-800">₹{amount}</p>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => setShowPaymentForm(false)}
            disabled={loading}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-50 font-medium"
          >
            Cancel
          </button>
          <button
            onClick={handlePayment}
            disabled={loading}
            className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-400 font-semibold transition-all"
          >
            {loading ? 'Processing...' : 'Pay Now'}
          </button>
        </div>

        <p className="text-xs text-gray-500 text-center mt-4">
          ⚠️ This is a mock payment for testing purposes only
        </p>
      </div>
    </div>
  );
};

export default MockPayment;