import React,{useState} from 'react'

export const Registration = () => {
    const [data,setData] = useState()
    const [newData,setNewData] = useState('')

    let handleChange = (e) => {
        setData({...data,[e.target.name]:e.target.value})
        console.log(data)
    }
    let handleSubmit = (e) => {
        e.preventDefault()
        setNewData(data)
    }
    
    
  return (
    <div className='w-50  m-auto rounded-3 border bg-light mt-5'>
        <h2 className='p-5 text-center fs-1'>
        Registration
        </h2>
        <form className='m-5 w-75 m-auto' onSubmit={handleSubmit}>
        <label htmlFor="name" className='mb-3 '>Name</label>
        <input type="text" onChange={handleChange} name='name' required className='form-control mb-3'placeholder='Name'/>
        <label htmlFor="name" className='mb-3 '>Contact</label>
        <input type="text" onChange={handleChange} name='contact' required className='form-control mb-3' placeholder='Contact' />
        <label htmlFor="name" className='mb-3 '>Qualification</label>
        <input type="text" onChange={handleChange} name='qualification' required className='form-control mb-3' placeholder='Qualification' />
        <label htmlFor="name" className='mb-3 '>Password</label>
        <input type="text" onChange={handleChange} name='' required className='form-control mb-3' placeholder=''/>
        <input type="password" onChange={handleChange} name='password' required className='form-control mb-3' placeholder='Password' />
        <input type="submit" className='btn btn-dark mt-4 mb-5'/>
        </form>

        <h2>{newData.name}</h2>
        <h2>{newData.contact}</h2>
        <h2>{newData.qualification}</h2>
        <h2>{newData.password}</h2>
    </div>

  )
}

export default Registration
