import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Trash2 } from 'lucide-react';

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <motion.li
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -100 }}
      whileHover={{ scale: 1.01 }}
      className={`flex items-center justify-between p-4 rounded-xl mb-3 shadow-sm border transition-all ${
        todo.completed 
          ? 'bg-slate-800/50 border-slate-800 opacity-70' 
          : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700'
      }`}
    >
      <div className="flex items-center gap-4 flex-grow cursor-pointer" onClick={() => toggleTodo(todo.id)}>
        <input 
          type="checkbox" 
          checked={todo.completed}
          readOnly
          className="w-5 h-5 rounded border-slate-300 text-purple-600 focus:ring-purple-500 cursor-pointer"
        />
        <motion.span 
          animate={{ color: todo.completed ? '#94a3b8' : '#e2e8f0' }}
          className={`text-lg transition-all ${todo.completed ? 'line-through decoration-slate-500' : ''}`}
        >
          {todo.text}
        </motion.span>
      </div>

      <motion.button
        whileHover={{ scale: 1.1, color: '#ef4444' }}
        whileTap={{ scale: 0.9 }}
        onClick={(e) => {
          e.stopPropagation();
          deleteTodo(todo.id);
        }}
        className="p-2 text-slate-400 hover:text-red-500 transition-colors"
        aria-label="Delete todo"
      >
        <Trash2 className="w-5 h-5" />
      </motion.button>
    </motion.li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
};

export default TodoItem;
