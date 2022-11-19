import  './index.css';
import {useForm} from 'react-hook-form'
type UserData = {
  firstName: string,
  lastName: string,
  birthday: string,
  email: string,
  address: string
}
type UserForm = UserData & {
  fieldsChange : (fields: Partial<UserData>) => void 
}

export function Register1({firstName, lastName, birthday, email, address, fieldsChange}:UserForm) {
    const {register, handleSubmit, watch, formState: { errors }} = useForm<UserData>();
    
    return (
        <>
        <div className='flex flex-wrap'>
        <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      First Name
                    </label>
                    <input className="shadow appearance-none border rounded w-60 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  id="username" type="text" placeholder="First Name" value={firstName} {...register("firstName", { required: true })} onChange={e => fieldsChange({firstName : e.target.value})}/>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Last Name
                    </label>
                    <input className="shadow appearance-none border rounded w-60 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={lastName} id="username" type="text" placeholder="Last Name" {...register("lastName", { required: true })} onChange={e => fieldsChange({lastName : e.target.value})}/>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Date of birth
                    </label>
                    <input className="shadow appearance-none border rounded w-60 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={birthday} id="username" type="text" placeholder="Date of birth" {...register("birthday", { required: true })} onChange={e => fieldsChange({birthday : e.target.value})}/>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Email Address
                    </label>
                    <input className="shadow appearance-none border rounded w-60 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={email} required id="username" type="email" placeholder="Email Address" {...register("email", { required: true })} onChange={e => fieldsChange({email : e.target.value})}/>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Address
                    </label>
                    <input className="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={address} id="username" type="email" placeholder="Address" {...register("address", { required: true })} onChange={e => fieldsChange({address : e.target.value})}/>
                  </div>
                  </div>
        </>
    )
}