import React, {useState, useRef} from 'react';
import './App.css';
import InputField from './components/InputField';
import List from './components/ListItem';

function App() {
  const [tasks, setTasks] = useState<{task: string; category: string; description: string;}[] | []>([])
  const [item, setItem] = useState({
    task: '',
    category: '',
    description: ''
  })

  const inputRef = useRef<HTMLInputElement>(null)

  const list_items = tasks.map((item, index) => {
    return <List key={index} item={item} deleteTask={() => deleteTask(index)}/>
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
    setItem(prev => {
      return {
        ...prev,
        [e.target.name]:[e.target.value]
      }
    })
  }


  function UpdateTasks(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    if(item.category.length > 0){
      const checked = document.querySelector('input[name="category"]:checked') as HTMLInputElement ;
      checked.checked = false
    }
    setTasks(prev => {
      return [...prev, item]
    })
    setItem({
      task: '',
      category: '',
      description: ''
    })
    inputRef.current?.focus()
  }

  function deleteTask(id: number){
    setTasks(prev => {
      return prev.filter((task,index) => {
        return id != index
      })
    })
  }

  return (
    <div className="App">
      <InputField handle={handleChange} update={UpdateTasks} item={item} myref={inputRef}>
        <div className='list_item_notes'>
          {list_items}
        </div>
      </InputField>
    </div>
  );
}

export default App;
