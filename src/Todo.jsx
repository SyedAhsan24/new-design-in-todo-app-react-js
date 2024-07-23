// import React, { useState, useEffect } from 'react';

// const Todo = () => {
//   // State to manage todos
//   const [todos, setTodos] = useState([]);

//   // State to manage input fields
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');

//   // State to manage dark/light mode
//   const [darkMode, setDarkMode] = useState(true);

//   // State to manage the current color index for dark mode
//   const [colorIndex, setColorIndex] = useState(0);

//   // Array of colors for dark mode
//   const darkModeColors = ['#00008B', '#008000', '#FFD700', '#87CEEB', '#FFA500'];

//   // Function to handle adding a new todo
//   const addTodo = () => {
//     if (name.trim() !== '' && description.trim() !== '') {
//       const newTodo = {
//         id: todos.length + 1,
//         name: name,
//         description: description,
//         completed: false
//       };

//       // Adding new todo to todos array
//       setTodos([...todos, newTodo]);

//       // Clearing input fields
//       setName('');
//       setDescription('');
//     }
//   };

//   // Function to mark a todo as completed
//   const completeTodo = (id) => {
//     const updatedTodos = todos.map(todo =>
//       todo.id === id ? { ...todo, completed: true } : todo
//     );
//     setTodos(updatedTodos);
//   };

//   // Function to delete a todo
//   const deleteTodo = (id) => {
//     const updatedTodos = todos.filter(todo => todo.id !== id);
//     setTodos(updatedTodos);
//   };

//   // Function to edit a todo
//   const editTodo = (id, newName, newDescription) => {
//     const updatedTodos = todos.map(todo =>
//       todo.id === id ? { ...todo, name: newName, description: newDescription } : todo
//     );
//     setTodos(updatedTodos);
//   };

//   // Function to delete all todos
//   const deleteAllTodos = () => {
//     setTodos([]);
//   };

//   // Effect to toggle body background color based on darkMode and colorIndex state
//   useEffect(() => {
//     document.body.style.backgroundColor = darkMode ? darkModeColors[colorIndex] : '#ffffff';
//   }, [darkMode, colorIndex]);

//   // Function to toggle through the dark mode colors
//   const toggleColor = () => {
//     setColorIndex((prevIndex) => (prevIndex + 1) % darkModeColors.length);
//   };

//   return (
//     <div className='h-[100vh]' style={{ color: darkMode ? 'white' : 'black' }}>
//       <div className="flex gap-2 m-5">
//         <button
//           onClick={() => setDarkMode(!darkMode)}
//           className='bg-[#FF9902] rounded-xl w-[150px] h-[30px] text-white'
//         >
//           Toggle {darkMode ? 'Light' : 'Dark'} Mode
//         </button>
//         {darkMode && (
//           <button
//             onClick={toggleColor}
//             className='bg-[#FF9902] rounded-xl w-[150px] h-[30px] text-white'
//           >
//             Change Color
//           </button>
//         )}
        
//       </div>
//       <h1 className='text-[40px] text-center pt-[30px]'>My Todos</h1>
      
//       {/* Input area for new todos */}
//       <div className='bg-[#444444] w-[700px] p-5 m-auto mt-[30px] flex justify-between items-center'>
//         <div className='flex gap-5'>
//           <div>
//             <label className='text-white pb-2 text-[15px]' htmlFor="name">
//               Name
//             </label><br />
//             <input
//               id="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               placeholder='Task name'
//               className='border-[#FF9902] border-2 rounded-lg h-7 pl-5 font-bold w-[200px] text-black'
//               type="text"
//             />
//           </div>

//           <div>
//             <label className='text-white pb-2 text-[15px]' htmlFor="description">
//               Description
//             </label><br />
//             <input
//               id="description"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               placeholder='Task description'
//               className='border-[#FF9902] border-2 rounded-lg h-7 pl-5 w-[200px] font-bold text-black'
//               type="text"
//             />
//           </div>
//         </div>
//         <div className='flex gap-4'>
//         <button onClick={addTodo} className='bg-[#FF9902] rounded-xl w-[90px] h-[30px] text-white'>Add Todo</button>
//         <button
//           onClick={deleteAllTodos}
//           className='bg-[#FF9902] rounded-xl w-[90px] h-[30px] text-white'
//         >
//           Clear All
//         </button>
//         </div>
//       </div>

//       {/* Display todos */}
//       {todos.map((todo, index) => (
//         <div
//           key={todo.id}
//           className={`bg-[#444444] w-[700px] p-2 m-auto flex justify-between items-center ${index === 0 ? 'mt-[30px]' : 'mt-[3px]'}`}
//         >
//           <div className='flex gap-5'>
//             <div>
//               <p className='text-[30px] text-[#FF9902] font-bold '>{todo.name}</p>
//               <p className='text-[18px] text-white'>{todo.description}</p>
//             </div>
//           </div>
//           <div className='flex gap-4'>
//             {!todo.completed && (
//               <>
//                 <button onClick={() => completeTodo(todo.id)} className='bg-[white] rounded-xl w-[90px] h-[30px] text-[#1DAE77] border-[#1DAE77] border-2'>Complete</button>
//                 <button onClick={() => editTodo(todo.id, prompt('Enter new name'), prompt('Enter new description'))} className='bg-[white] rounded-xl w-[90px] h-[30px] text-[#FF9902] border-[#FF9902] border-2'>Edit</button>
//               </>
//             )}
//             <button onClick={() => deleteTodo(todo.id)} className='bg-[white] rounded-xl w-[90px] h-[30px] text-[red] border-[red] border-2'>Delete</button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Todo;


import React, { useState, useEffect } from 'react';

const Todo = () => {
  // State to manage todos
  const [todos, setTodos] = useState([]);

  // State to manage input fields
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  // State to manage dark/light mode
  const [darkMode, setDarkMode] = useState(true);

  // State to manage the current color index for dark mode
  const [colorIndex, setColorIndex] = useState(0);

  // Array of colors for dark mode
  const darkModeColors = ['#00008B', '#008000', '#FFD700', '#87CEEB', '#FFA500'];

  // Function to handle adding a new todo
  const addTodo = () => {
    if (name.trim() !== '' && description.trim() !== '') {
      const newTodo = {
        id: todos.length + 1,
        name: name,
        description: description,
        completed: false
      };

      // Adding new todo to todos array
      setTodos([...todos, newTodo]);

      // Clearing input fields
      setName('');
      setDescription('');
    }
  };

  // Function to mark a todo as completed
  const completeTodo = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: true } : todo
    );
    setTodos(updatedTodos);
  };

  // Function to delete a todo
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  // Function to edit a todo
  const editTodo = (id, newName, newDescription) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, name: newName, description: newDescription } : todo
    );
    setTodos(updatedTodos);
  };

  // Function to delete all todos
  const deleteAllTodos = () => {
    setTodos([]);
  };

  // Effect to toggle body background color based on darkMode and colorIndex state
  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? darkModeColors[colorIndex] : '#ffffff';
  }, [darkMode, colorIndex]);

  // Function to toggle through the dark mode colors
  const toggleColor = () => {
    setColorIndex((prevIndex) => (prevIndex + 1) % darkModeColors.length);
  };

  return (
    <div className='h-[100vh]' style={{ color: darkMode ? 'white' : 'black' }}>
      <div className="flex gap-2 m-5 flex-wrap">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className='bg-[#FF9902] rounded-xl w-[150px] h-[30px] text-white'
        >
          Toggle {darkMode ? 'Light' : 'Dark'} Mode
        </button>
        {darkMode && (
          <button
            onClick={toggleColor}
            className='bg-[#FF9902] rounded-xl w-[150px] h-[30px] text-white'
          >
            Change Color
          </button>
        )}
      </div>
      <h1 className='text-[40px] text-center pt-[30px]'>My Todos</h1>
      
      {/* Input area for new todos */}
      <div className='bg-[#444444] w-full sm:w-[700px] p-5 m-auto mt-[30px] flex flex-col sm:flex-row sm:justify-between items-center'>
        <div className='flex flex-col sm:flex-row gap-4 sm:gap-5 w-full'>
          <div className='flex flex-col gap-2'>
            <label className='text-white text-[15px]' htmlFor="name">
              Name
            </label>
            <input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Task name'
              className='border-[#FF9902] border-2 rounded-lg h-7 pl-5 font-bold w-full sm:w-[200px] text-black'
              type="text"
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label className='text-white text-[15px]' htmlFor="description">
              Description
            </label>
            <input
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder='Task description'
              className='border-[#FF9902] border-2 rounded-lg h-7 pl-5 w-full sm:w-[200px] font-bold text-black'
              type="text"
            />
          </div>
        </div>
        <div className='flex flex-col sm:flex-row gap-2 mt-4 sm:mt-0'>
          <button onClick={addTodo} className='bg-[#FF9902] rounded-xl w-full sm:w-[90px] h-[30px] text-white'>Add Todo</button>
          <button
            onClick={deleteAllTodos}
            className='bg-[#FF9902] rounded-xl w-full sm:w-[90px] h-[30px] text-white mt-2 sm:mt-0'
          >
            Clear All
          </button>
        </div>
      </div>

      {/* Display todos */}
      {todos.map((todo, index) => (
        <div
          key={todo.id}
          className={`bg-[#444444] w-full sm:w-[700px] p-2 m-auto flex flex-col sm:flex-row justify-between items-center ${index === 0 ? 'mt-[30px]' : 'mt-[3px]'}`}
        >
          <div className='flex flex-col gap-2 sm:flex-row'>
            <div>
              <p className='text-[30px] text-[#FF9902] font-bold'>{todo.name}</p>
              <p className='text-[18px] text-white'>{todo.description}</p>
            </div>
          </div>
          <div className='flex flex-col sm:flex-row gap-2 mt-2 sm:mt-0'>
            {!todo.completed && (
              <>
                <button onClick={() => completeTodo(todo.id)} className='bg-[white] rounded-xl w-full sm:w-[90px] h-[30px] text-[#1DAE77] border-[#1DAE77] border-2'>Complete</button>
                <button onClick={() => editTodo(todo.id, prompt('Enter new name'), prompt('Enter new description'))} className='bg-[white] rounded-xl w-full sm:w-[90px] h-[30px] text-[#FF9902] border-[#FF9902] border-2'>Edit</button>
              </>
            )}
            <button onClick={() => deleteTodo(todo.id)} className='bg-[white] rounded-xl w-full sm:w-[90px] h-[30px] text-[red] border-[red] border-2'>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todo;
