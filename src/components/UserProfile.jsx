import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

function UserProfile({ 
  userData = {
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    avatarUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90
  }, 
  theme = 'light' 
}) {
  const themeStyles = theme === 'dark' 
    ? 'bg-slate-800 text-white border-slate-700' 
    : 'bg-white text-slate-900 border-slate-200';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className={`p-6 rounded-2xl shadow-lg border ${themeStyles} max-w-sm w-full mx-auto transition-colors duration-300`}
    >
      <div className="flex flex-col items-center gap-4">
        <motion.div 
          className="relative"
          whileHover={{ rotate: 5 }}
        >
          <img 
            src={userData.avatarUrl} 
            alt={userData.name}
            width={userData.imageSize}
            height={userData.imageSize}
            className="profile-avatar rounded-full object-cover ring-4 ring-indigo-500/30"
            style={{ width: userData.imageSize, height: userData.imageSize }}
          />
          <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
        </motion.div>
        
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            {userData.name}
          </h2>
          <p className="text-sm opacity-70 mt-1">{userData.email}</p>
        </div>

        <div className="flex gap-2 mt-2">
          <span className="px-3 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full dark:bg-indigo-900/50 dark:text-indigo-300">
            User
          </span>
          <span className="px-3 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full dark:bg-purple-900/50 dark:text-purple-300">
            Active
          </span>
        </div>
      </div>
    </motion.div>
  );
}

UserProfile.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string,
    avatarUrl: PropTypes.string,
    imageSize: PropTypes.number
  }),
  theme: PropTypes.oneOf(['light', 'dark'])
};

export default UserProfile;
