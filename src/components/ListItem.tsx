import React, {useState} from 'react'
import { BiTrash, BiExit } from 'react-icons/bi';

type ListProps = {
    item :{
       task: string;
       category?: string;
       description: string;
    }
    deleteTask: () => void
}

export default function ListItem({item, deleteTask}: ListProps){

    const [show, setShow] = useState(false)

    let styles = {
        display: `${show ? 'flex' : 'none'}`
    }

    function showNote(){
        setShow(true)
    }
    function hideNote(){
        setShow(false)
    }

    return (
        <>
        <div className='list_item' onClick={showNote}>
            <div className='pin'></div>
            <div className='list_item_inside'>
                <div className='list_item_nobin'>
                    <h2 className='list_item_task'>{item.task}</h2>
                    {item.category && <h3 className='list_item_category'>{item.category}</h3>}
                    <p>{item.description}</p>
                </div>
                <BiTrash onClick={deleteTask} className='trash-can' />
            </div>
        </div>
        <div className='list_item_big' style={styles}>
            <div className='pin_big'></div>
            <div className='list_item_inside_big'>
                <div className='list_item_nobin_big'>
                    <h2 className='list_item_task_big'>{item.task}</h2>
                    {item.category && <h3 className='list_item_category_big'>{item.category}</h3>}
                    <p>{item.description}</p>
                </div>
                <BiExit onClick={hideNote} className='exit' />
            </div>
        </div>
        </>
    )  
}
