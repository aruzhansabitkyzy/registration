import  './index.css';
import {useEffect, useState} from 'react'
type MessageData = {
    message: string,
    choice: string
}
type MessageForm =  MessageData & {
    fieldsChange : (fields: Partial<MessageData>) => void
}
export function Register2({message, choice, fieldsChange}:MessageForm) {
    const [selectedRadio , setSelected] = useState('');
    function isRadioSelected(value: string):boolean {
         setSelected(value);
          return true;
    }
    function handleChange(e:any) {
        setSelected(e.target.value)
        console.log(selectedRadio)
        console.log('cd')
    }
    useEffect(() => {
        fieldsChange({choice : selectedRadio})
    }, [selectedRadio])

    return (
        <>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
                      Message
            </label>
            <textarea className='w-96 h-40 py-1.5 px-1.5 outline-none border-slate-300 appearance-none border rounded-lg resize-none' value={message} onChange={e => fieldsChange({message : e.target.value})}></textarea>
        </div>
        <div className="mb-4">
            
            <input className="" id="fc" type="radio" name='choice' value='option1' checked = {selectedRadio == 'option1'} onChange={e =>  setSelected(e.target.value)}/>
            <label className='pl-3 mr-5' htmlFor='fc'>The number one choice</label> 
            <input className="" id="sc" type="radio" name='choice' value='option2' checked = {selectedRadio == 'option2'} onChange={e =>  setSelected(e.target.value)}/>
            <label className='pl-3' htmlFor='sc'>The number second choice</label>
        </div> 
                 
        </>
    ) 
}