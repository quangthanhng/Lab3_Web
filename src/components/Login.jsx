import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    alert(`Login attempted with: ${JSON.stringify(formData, null, 2)}`);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="glass-card p-8 w-full max-w-md mx-auto"
    >
      <h2 className="text-2xl font-bold mb-6 text-center text-white">Welcome Back</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-300">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-white placeholder-slate-500"
            placeholder="Enter username"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-300">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-white placeholder-slate-500"
            placeholder="Enter password"
            required
          />
        </div>

        <div className="pt-2">
          <motion.p 
            className="text-xs text-slate-400 mb-4 h-4"
            animate={{ opacity: formData.username ? 1 : 0 }}
          >
            Logging in as: <span className="text-purple-400 font-semibold">{formData.username}</span>
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg shadow-lg hover:shadow-purple-500/30 transition-shadow"
          >
            Sign In
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
}

export default Login;
