import  './index.css';
import {Checkbox} from '@material-tailwind/react'
import {useState, useEffect} from 'react'
type ChoiceData = {
    im_choice: string, 
    checkbox1 : boolean, 
    checkbox2 : boolean
}
type ChoiceForm = ChoiceData & {
  fieldsChange : (fields: Partial<ChoiceData>) => void
}

export function Register3({im_choice, checkbox1, checkbox2, fieldsChange}:ChoiceForm) {
    //bg-blue-100 for click background
    const [isActive, setIsActive] = useState(false);
    const [blockNum, setBlockNum] = useState('');
    useEffect(() => {
        fieldsChange({im_choice : blockNum})
    }, [blockNum])
    return (


        <>
       <div className='flex justify-around mt-4'>
           <div className={`border-slate-300 border w-72 h-28 pt-6 pl-24 rounded-lg cursor-pointer ${isActive ? 'bg-blue-100' : 'bg-white'}` } onClick={() => setIsActive(!isActive)}>
              <img className='w-10 h-auto' src="https://img.icons8.com/external-sbts2018-outline-sbts2018/58/000000/external-freelance-work-from-home-sbts2018-outline-sbts2018.png"/>
           </div>

           <div className={`border-slate-300 border w-72 h-28 pt-6 pl-24 rounded-lg cursor-pointer ${!isActive ? 'bg-blue-100' : 'bg-white'}`} onClick={() => setIsActive(!isActive)}>
              <img className='w-10 h-auto' src="https://img.icons8.com/external-sbts2018-outline-sbts2018/58/000000/external-freelance-work-from-home-sbts2018-outline-sbts2018.png"/>
           </div>
       </div>
       <div className='mt-4'>
              <input type='checkbox' id='check1' value='check1' name='check1' onChange={e => e.target.name}></input>
              <label htmlFor='check1'>I want to add this option</label>
              < br />
              <input type='checkbox' id='check2' name='check2' onChange={e => e.target.name}></input>
              <label htmlFor='check2'>Let me click on this checkbox and choose some cool stuff</label>
           </div>
        </>
    )
}