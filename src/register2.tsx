import  './index.css';
import { useDispatch , useSelector } from 'react-redux';
import {useEffect, useState} from 'react'
import {setMessage, setChoice} from './features/messageSlice';
import {RootState} from './store/store'

export function Register2() {
    const [selectedRadio , setSelected] = useState('');
    const selector = useSelector((state:RootState) => state.message)
    const dispatch  = useDispatch()
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
        dispatch(setChoice(selectedRadio));
    }, [selectedRadio])

    return (
        <>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
                      Message
            </label>
            <textarea className='w-96 h-40 py-1.5 px-1.5 outline-none border-slate-300 appearance-none border rounded-lg resize-none' value={selector.message} onChange={e => dispatch(setMessage(e.target.value))}></textarea>
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