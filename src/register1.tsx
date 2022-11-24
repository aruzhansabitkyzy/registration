import  './index.css';
import {useDispatch, useSelector} from 'react-redux'
import {useForm} from 'react-hook-form'
import {setFirstName, setLastName, setBirthday, setEmail, setAddress} from './features/userSlice';
import { RootState, store } from './store/store';

export function Register1() {
    const dispatch  = useDispatch();
    const selector = useSelector((state:RootState) => state.user);
    console.log(store.getState().user)
    return (
        <>
        <div className='flex flex-wrap'>
        <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      First Name
                    </label>
                    <input className="shadow appearance-none border rounded w-60 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  id="username" type="text" placeholder="First Name" value={selector.firstName} onChange={e => dispatch((setFirstName(e.target.value)))}/>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Last Name
                    </label>
                    <input className="shadow appearance-none border rounded w-60 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required id="username" type="text" placeholder="Last Name" value={selector.lastName}  onChange={e => dispatch((setLastName(e.target.value)))}/>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Date of birth
                    </label>
                    <input className="shadow appearance-none border rounded w-60 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required id="username" type="text" placeholder="Date of birth" value={selector.birthday} onChange={e => dispatch((setBirthday(e.target.value)))}/>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Email Address
                    </label>
                    <input className="shadow appearance-none border rounded w-60 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required id="username" type="email" placeholder="Email Address" value={selector.email}  onChange={e => dispatch((setEmail(e.target.value)))}/>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Address
                    </label>
                    <input className="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required id="username" type="email" placeholder="text" value={selector.address} onChange={e => dispatch((setAddress(e.target.value)))}/>
                  </div>
                  </div>
        </>
    )
}