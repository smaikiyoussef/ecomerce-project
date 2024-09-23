import React, { useEffect, useRef } from 'react';
import { IoMdCloseCircleOutline } from 'react-icons/io';

const Popup = ({ orderPopup, handleOrderPopup }) => {
  const popupRef = useRef();

  // Close popup when 'Escape' key is pressed
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        handleOrderPopup();
      }
    };
    window.addEventListener('keydown', handleEsc);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [handleOrderPopup]);

  // Focus trap logic to keep focus within the popup
  useEffect(() => {
    if (orderPopup) {
      popupRef.current?.focus();
    }
  }, [orderPopup]);

  // Disable background scroll when popup is open
  useEffect(() => {
    if (orderPopup) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => (document.body.style.overflow = '');
  }, [orderPopup]);

  if (!orderPopup) return null; // Hide the popup if `orderPopup` is false

  return (
    <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm flex items-center justify-center">
      <div
        ref={popupRef}
        tabIndex="-1"
        role="dialog"
        aria-modal="true"
        aria-labelledby="popup-heading"
        className="w-[300px] bg-white dark:bg-gray-900 dark:text-white rounded-lg shadow-lg p-4 duration-200 relative"
      >
        {/* Close button */}
        <button
          onClick={handleOrderPopup}
          aria-label="Close popup"
          className="absolute top-2 right-2 text-2xl text-gray-500 dark:text-gray-400 cursor-pointer hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
        >
          <IoMdCloseCircleOutline />
        </button>

        {/* Header section */}
        <div className="text-center mb-4">
          <h1 id="popup-heading" className="text-xl font-bold">Order Now</h1>
        </div>

        {/* Form section */}
        <div>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300 dark:bg-gray-800 dark:border-gray-700 dark:focus:ring-gray-400"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your email"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300 dark:bg-gray-800 dark:border-gray-700 dark:focus:ring-gray-400"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300 dark:bg-indigo-500 dark:hover:bg-indigo-600 dark:focus:ring-gray-400"
              >
                Submit Order
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Popup;
