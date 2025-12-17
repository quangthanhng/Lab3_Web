import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React Fundamentals', completed: true },
    { id: 2, text: 'Build a To-Do App', completed: false },
    { id: 3, text: 'Master Tailwind CSS', completed: false },
  ]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const completedCount = todos.filter(t => t.completed).length;

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="glass-card p-8 min-h-[600px]">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              My Tasks
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              {completedCount} of {todos.length} tasks completed
            </p>
          </div>
          
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
            <CheckCircle className="h-6 w-6 text-white" />
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1.5 bg-slate-700/30 rounded-full mb-8 overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
            initial={{ width: 0 }}
            animate={{ width: `${todos.length > 0 ? (completedCount / todos.length) * 100 : 0}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        <TodoForm addTodo={addTodo} />
        <TodoList 
          todos={todos} 
          toggleTodo={toggleTodo} 
          deleteTodo={deleteTodo} 
        />
      </div>
    </div>
  );
}

export default TodoApp;
