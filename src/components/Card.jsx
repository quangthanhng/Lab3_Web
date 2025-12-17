import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

function Card({ title, children }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden border border-slate-100 dark:border-slate-700 h-full flex flex-col pt-6 pb-6 px-4"
    >
      {title && (
        <div className="px-6 mb-4">
          <h3 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
            {title}
          </h3>
          <div className="h-1 w-full bg-gradient-to-r from-blue-500/20 to-teal-400/20 mt-3 rounded-full" />
        </div>
      )}
      <div className="px-2 flex-grow flex flex-col justify-center">
        {children}
      </div>
    </motion.div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Card;
