import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

export default function LeadForm({ isOpen, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interest: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
          >
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-md sm:max-w-lg p-4 sm:p-10 relative max-h-[90vh] overflow-y-auto">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute right-4 top-10 text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>

              {/* Header */}
              <div className="mb-2 mt-10 sm:mt-0">
                <img src="/logo1.png" alt="Logo" className="w-36 sm:w-44 mx-auto" />
                <h2 className="text-2xl sm:text-3xl font-rohn-bold text-gray-800 mb-6 text-center">
                  Let's Start Your Transformation Journey
                </h2>
                <p className="text-gray-600 mb-1 text-center font-rohn-regular">
                  Fill out the form below and we'll get back to you within 24 hours to discuss your fitness goals.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-2">
                {["firstName", "lastName", "email", "phone"].map((field) => (
                  <div key={field}>
                    <label htmlFor={field} className="block text-sm font-rohn-medium text-gray-700 mb-1 text-left">
                      {field.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase())}*
                    </label>
                    <input
                      type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                      name={field}
                      placeholder={`${field.replace(/([A-Z])/g, " $1")}*`.replace(/^./, str => str.toUpperCase())}
                      required
                      className="w-full px-4 py-2 rounded-lg bg-amber-100 border-2 border-amber-200 focus:border-pink-400 focus:outline-none transition-colors text-black placeholder-gray-500"
                      value={formData[field]}
                      onChange={handleChange}
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="interest" className="block text-sm font-rohn-medium text-gray-700 mb-1 text-left">
                    What are you most interested in?
                  </label>
                  <select
                    name="interest"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-amber-100 border-2 border-amber-200 focus:border-pink-400 focus:outline-none transition-colors text-black placeholder-gray-500"
                    value={formData.interest}
                    onChange={handleChange}
                  >
                    <option value="">Please select*</option>
                    <option value="weight-loss">Weight Loss</option>
                    <option value="toning">Body Toning</option>
                    <option value="confidence">Confidence Building</option>
                    <option value="overall">Overall Transformation</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-600 hover:bg-yellow-500 text-white font-rohn-bold py-3 px-4 rounded-lg transition duration-200"
                >
                  Submit
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
