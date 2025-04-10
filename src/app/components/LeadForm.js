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
              <div className="text-center mb-6 mt-10 sm:mt-0">
                <img src="/logo1.png" alt="Logo" className="w-36 sm:w-44 mx-auto" />
                <h2 className="text-lg sm:text-2xl font-bold  text-black">
                  Discover the Method Helping Women Finally Love the Way They Look & Feel
                </h2>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-2">
                {["firstName", "lastName", "email", "phone"].map((field) => (
                  <div key={field}>
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
                  className="w-full bg-gradient-to-r from-pink-400 to-amber-400 hover:from-pink-500 hover:to-amber-500 text-white font-bold py-2 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg"
                >
                  YES! SHOW ME HOW!
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
