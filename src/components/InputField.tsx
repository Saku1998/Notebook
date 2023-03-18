import React from 'react'

type InputFieldProps = {
    children: React.ReactNode,
    handle: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    update: (e: React.FormEvent<HTMLFormElement>) => void,
    item: {
        task: string;
        category: string;
        description: string;
    }
    myref: any

}

export default function InputField({handle, children, update, item, myref}: InputFieldProps){
    return (
        <div className='input_field'>
            <div className='input_field_add'>
                <h1>YOUR<span>own notebook</span></h1>
                <form  className='input_field_form' onSubmit={update} >
                    <div className='input_field_form_first'>
                        <button className='input_field_btn' disabled={item.description.length > 0 && item.task.length > 0 ? false : true}>+</button>
                        <input autoComplete="off"  onChange={handle} value={item.task} name="task" className='input_field_input' ref={myref}></input>
                    </div>
                    <textarea onChange={handle} name="description" value={item.description} />
                    <div className='input_field_labels'>
                        <label htmlFor="Gym">Gym</label>
                        <input onChange={handle} className="category" type="radio" name='category' value="Gym"></input>
                        <label htmlFor="Home">Home</label>
                        <input onChange={handle} className="category" type="radio" name='category' value="Home"></input>
                        <label htmlFor="Work">Work</label>
                        <input onChange={handle} className="category" type="radio" name='category' value="Work"></input>
                        <label htmlFor="Friends">Friends</label>
                        <input onChange={handle} className="category" type="radio" name='category' value="Friends"></input>
                    </div>
                </form>
            </div>
            {children}
        </div>
    )  
}