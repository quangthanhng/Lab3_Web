import React from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

function Panel({ title, children, isActive, onShow }) {
  return (
    <div className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden mb-4 bg-white dark:bg-slate-800 shadow-sm">
      <motion.button
        whileHover={{ backgroundColor: 'rgba(0,0,0,0.02)' }}
        onClick={onShow}
        className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
      >
        <h4 className="font-semibold text-lg text-slate-800 dark:text-slate-200">
          {title}
        </h4>
        <motion.span
          animate={{ rotate: isActive ? 180 : 0 }}
          className="text-slate-400"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.span>
      </motion.button>

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-700/50 pt-4">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

Panel.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isActive: PropTypes.bool.isRequired,
  onShow: PropTypes.func.isRequired
};

export default Panel;
