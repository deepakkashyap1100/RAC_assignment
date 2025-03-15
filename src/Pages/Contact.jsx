import { TextField } from "@mui/material";
import { useId, useState } from "react"
// import { Form } from "react-router-dom";

// export const contactFormData= async({request})=>{
//   try {
//     const formRes= await request.formData();
//     const formObj= Object.fromEntries(formRes);
//     console.log(formObj);
//     return formObj; 

//   } catch (error) {
//     console.log(error, 'form data error')
//   }
// } 

// const handleSubmitFun= (a)=>{
//   console.log(a)
//   alert('you form submitted');
// }

const Contact = () => {
  // const fId = useId();
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  // contact-form2
  const handlerSubmit = (e) => {
    e.preventDefault();
    const formData = {
      username,
      email,
      msg
    }
    console.log(formData, 'user form data')
    if(!formData == ""){
        alert("Thankyou!");
        location.reload();
    }
   
  }
  return (
    <div className="container p-4 mx-auto mb-5">
      <h1 className="text-center">Contact Form</h1>
      <div className="contact-form max-w-3xl mx-auto">

        {/* -CONTACT-FORM------- */}

        {/* <Form method="POST" action="/contact" onSubmit={handleSubmitFun}>
          <div className="input-group">
            <label htmlFor= {fId+ 'name'} className="font-medium leading-6 text-gray-900">User name</label>
            <input type="text" id={fId + 'name'} name="username" />
          </div>
          <div className="input-group">
            <label htmlFor={fId +'email'} className="font-medium leading-6 text-gray-900">Email</label>
            <input type="email" id={fId +'email'} name="email"/>
          </div>
          <div className="col-span-full">
            <label htmlFor={fId + 'message'} className="block text-sm font-medium leading-6 text-gray-900">
              Your Message
            </label>
            <div className="mt-2">
              <textarea
                id={fId + 'message'}
                name="message"
                rows={3}
                className="block w-full d border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200"
                defaultValue={''}
              />
            </div > 
            <div className="mt-5">
              <input className="bg-green-400 rounded-full" type="submit" name="submit" value='Sent' />
            </div>
          </div>
        </Form> */}


        <div className="w-full">
          <form action="" onSubmit={handlerSubmit} className="w-full">
            <TextField className="w-full mb-3" label="Name" variant="standard" onChange={(e) => setUserName(e.target.value)} required /> <br />
            <TextField className="w-full mb-3" label="Email" variant="standard" onChange={(e) => setEmail(e.target.value)} required /> <br />
            <TextField className="w-full mb-3" variant="standard" label="Your Message" onChange={(e) => setMsg(e.target.value)} required />
            <button className="bg-teal-500 hover:bg-teal-700 transition-all duration-500 w-full p-2 rounded-3xl mt-3 text-white text-xl" type="submit" name="submit">submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact