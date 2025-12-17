import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Calculator, LogIn, Layers, CheckSquare } from 'lucide-react';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';
import Login from './components/Login';
import Card from './components/Card';
import Accordion from './components/Accordion';
import TodoApp from './components/TodoApp';

function App() {
  const [activeTab, setActiveTab] = useState('todo');

  const tabs = [
    { id: 'profile', label: 'User Profile', icon: User },
    { id: 'counter', label: 'Counter', icon: Calculator },
    { id: 'login', label: 'Login Form', icon: LogIn },
    { id: 'advanced', label: 'Advanced', icon: Layers },
    { id: 'todo', label: 'To-Do App', icon: CheckSquare },
  ];

  const user1 = {
    name: 'Sarah Connor',
    email: 'sarah@skynet-resistance.com',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    imageSize: 120
  };

  const user2 = {
    name: 'John Rico',
    email: 'john.rico@starship-troopers.mil',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
    imageSize: 100
  };

  return (
    <div className="min-h-screen pb-20">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              React Lab 3
            </h1>
            <div className="flex gap-2 overflow-x-auto no-scrollbar py-2">
              {tabs.map(tab => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap flex items-center ${
                      activeTab === tab.id 
                        ? 'bg-white/10 text-white shadow-lg ring-1 ring-white/20' 
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-24 px-4 max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'profile' && (
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <Card title="Dark Theme Profile">
                  <UserProfile userData={user1} theme="dark" />
                </Card>
                <Card title="Light Theme Profile">
                  <UserProfile userData={user2} theme="light" />
                </Card>
              </div>
            )}

            {activeTab === 'counter' && (
              <div className="flex justify-center pt-10">
                <Counter />
              </div>
            )}

            {activeTab === 'login' && (
              <div className="pt-10">
                <Login />
              </div>
            )}

            {activeTab === 'advanced' && (
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <Card title="Advanced Composition">
                  <div className="p-4 text-slate-600 dark:text-slate-300">
                    <p className="mb-4">This card component itself is an example of a wrapper component using the <code>children</code> prop.</p>
                    <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-lg text-sm font-mono">
                      &lt;Card title="..."&gt;<br/>
                      &nbsp;&nbsp;{'{children}'}<br/>
                      &lt;/Card&gt;
                    </div>
                  </div>
                </Card>
                <Accordion />
              </div>
            )}

            {activeTab === 'todo' && (
              <TodoApp />
            )}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
