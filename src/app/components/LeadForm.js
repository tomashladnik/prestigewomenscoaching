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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-50"
          >
            <div className="bg-white rounded-2xl shadow-xl p-4 relative mt-16">
              <button
                onClick={onClose}
                className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>

              <div className="text-center mb-6">
                <img src="/logo1.png" alt="Logo" className="w-62 mx-auto mb-2" />
                <h2 className="text-2xl font-bold mb-2 text-black">
                  Discover the Method Helping Women Finally Love the Way They Look & Feel
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name*"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-amber-100 border-2 border-amber-200 focus:border-pink-400 focus:outline-none transition-colors text-black placeholder-gray-500"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name*"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-amber-100 border-2 border-amber-200 focus:border-pink-400 focus:outline-none transition-colors text-black placeholder-gray-500"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email*"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-amber-100 border-2 border-amber-200 focus:border-pink-400 focus:outline-none transition-colors text-black placeholder-gray-500"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone number*"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-amber-100 border-2 border-amber-200 focus:border-pink-400 focus:outline-none transition-colors text-black placeholder-gray-500"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <select
                    name="interest"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-amber-100 border-2 border-amber-200 focus:border-pink-400 focus:outline-none transition-colors text-black placeholder-gray-500"
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
                  className="w-full bg-gradient-to-r from-pink-400 to-amber-400 hover:from-pink-500 hover:to-amber-500 text-white font-bold py-4 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg"
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