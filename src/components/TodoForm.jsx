import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

function TodoForm({ addTodo }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 relative">
      <div className="relative flex items-center">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What needs to be done?"
          className="w-full pl-6 pr-32 py-4 bg-slate-800/50 border border-slate-700 rounded-2xl focus:ring-2 focus:ring-purple-500 outline-none transition-all text-white placeholder-slate-500 shadow-inner"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={!text.trim()}
          type="submit"
          className="absolute right-2 px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-xl shadow-lg hover:shadow-purple-500/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          Add
        </motion.button>
      </div>
    </form>
  );
}

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default TodoForm;
