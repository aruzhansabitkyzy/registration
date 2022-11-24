import  './index.css';
import {Checkbox} from '@material-tailwind/react'
import {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {setImChoice , setCheckbox1, setCheckbox2} from './features/checkboxSlice'

export function Register3() {
    const [isActive, setIsActive] = useState('0');
    const [check1, setCheck1] = useState(false)
    const [check2, setCheck2] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setImChoice(isActive))
        console.log(isActive)
    }, [isActive])
    return (


        <>
       <div className='flex justify-around mt-4'>
           <div className={`border-slate-300 border w-72 h-28 pt-6 pl-24 rounded-lg cursor-pointer ${isActive=='1' ? 'bg-blue-100' : 'bg-white'}` } onClick={() => setIsActive('1')}>
              <img className='w-10 h-auto' src="https://img.icons8.com/external-sbts2018-outline-sbts2018/58/000000/external-freelance-work-from-home-sbts2018-outline-sbts2018.png"/>
           </div>

           <div className={`border-slate-300 border w-72 h-28 pt-6 pl-24 rounded-lg cursor-pointer ${(isActive=='2') ? 'bg-blue-100' : 'bg-white'}`} onClick={() => setIsActive('2')}>
              <img className='w-10 h-auto' src="https://img.icons8.com/external-sbts2018-outline-sbts2018/58/000000/external-freelance-work-from-home-sbts2018-outline-sbts2018.png"/>
           </div>
       </div>
       <div className='mt-4'>
              <input type='checkbox' id='check1' value='check1' name='check1' onChange={(e) => { setCheck1(!check1); dispatch(setCheckbox1(check1))}}></input>
              <label htmlFor='check1'>I want to add this option</label>
              < br />
              <input type='checkbox' id='check2' name='check2' onChange={(e) => { setCheck2(!check2); dispatch(setCheckbox2(check2))}}></input>
              <label htmlFor='check2'>Let me click on this checkbox and choose some cool stuff</label>
           </div>
        </>
    )
}