import React, { useState } from 'react';
import Panel from './Panel';

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full max-w-lg mx-auto">
      <h3 className="text-xl font-bold mb-4 text-center text-slate-200">
        React Concepts (State Lifted Up)
      </h3>
      
      <Panel
        title="What is React?"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        React is a JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.
      </Panel>
      
      <Panel
        title="Why use State?"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        State allows React components to change their output over time in response to user actions, network responses, and anything else, without violating this rule of purity.
      </Panel>

      <Panel
        title="Virtual DOM"
        isActive={activeIndex === 2}
        onShow={() => setActiveIndex(2)}
      >
        The Virtual DOM is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM.
      </Panel>
    </div>
  );
}

export default Accordion;
