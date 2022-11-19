import React from 'react';
import {FormEvent} from 'react'
import logo from './logo.svg';
import './App.css';
import  './index.css';
import {useState} from 'react'
import {useSteps} from './useSteps'
import {Register1} from './register1';
import {Register2} from './register2';
import {Register3} from './register3';
import {useForm} from 'react-hook-form'
type Data = {
  firstName: string,
  lastName: string,
  birthday: string,
  email: string,
  address: string,
  message: string,
  choice: string,
  im_choice : string,
  checkbox1: boolean,
  checkbox2: boolean
}
const INITIAL_DATA = {
  firstName : "",
  lastName: "",
  birthday: "",
  email: "",
  address: "",
  message:"",
  choice: "",
  im_choice : "",
  checkbox1: false,
  checkbox2: false
}
type CredentialInputs = {
    firstName: string,
    lastName: string,
    birthday: string,
    email: string, 
    address : string
}

function App() {
  const [data, setData] = useState(INITIAL_DATA)
  function fieldsChange(fields: Partial<Data>) {
        console.log(fields)
       setData(el => {
          return {...el, ...fields}
       })
  }
  const { register, handleSubmit, watch, formState: { errors } } = useForm<CredentialInputs>();
  const {nextStep, prevStep,  currentStep, step, steps,isLastStep, isFirstStep} 
  = useSteps([<Register1 {...data} fieldsChange={fieldsChange}/>, 
  <Register2 {...data} fieldsChange={fieldsChange}/>, 
  <Register3 {...data} fieldsChange={fieldsChange}/>])
  function onSubmit(e:FormEvent) {   
    e.preventDefault();
     if(!isLastStep()) {
         nextStep()
     }
     else {
      console.log('done')
     }
  }
  return (
    <>
    <div className="flex justify-between items-center h-full mt-10 mb-10 mx-8">
       <div className='h-2/4 w-2/4 mr-8'>
         <img src='https://www.freevector.com/uploads/vector/preview/27160/Telegram-01.jpg' className='inline-block'/>
       </div>
       <div className="w-3/5">
          <div className='flex justify-around'>
              <div className='flex'>
                  <div className='w-10 h-10 bg-blue-600 rounded-lg pt-2 pl-4 mr-3'>1</div>
                  <p className='block pt-2'>Sign Up</p>
              </div>
              <div className='flex'>
                  <div className='w-10 h-10 bg-slate-200 rounded-lg pt-2 pl-4 mr-3'>2</div>
                  <p className='block pt-2'>Message</p>
              </div>
              <div className='flex'>
                  <div className='w-10 h-10 bg-slate-200 rounded-lg pt-2 pl-4 mr-3'>3</div>
                  <p className='block pt-2'>Checkbox</p>
              </div>
          </div>
          <div className='block bg-slate-200 w-full h-px mt-3.5'></div>
          <div className='text-slate-500 text-sm mt-3.5'>Step {currentStep+ 1}/3</div>
          <h3 className='text-lg text-slate-900 font-semibold'>{(currentStep== 0) ? 'Sign UP' : (currentStep == 1 ? 'Message' : 'Checkbox')}</h3>
          <div className='form'>
              <form onSubmit={onSubmit}>
                 {step }
                 
                 <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded h-10 mt-8 ml-64 ">{ isLastStep() ? 'Submit' : 'Next Step'}</button>
              </form>
              {!isFirstStep() && (
                   <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded h-10 mt-20 relative bottom-28" onClick={e =>prevStep()}>Back</button>
                )}
          </div>
       </div>
    </div>




    
</>
  );
}

export default App;
