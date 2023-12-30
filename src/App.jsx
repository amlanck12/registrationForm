import { useState } from 'react'
import __dirname+'App.css'
import Form from './Form'
import Button from './Button'



function App() {

  const [formData, setFormData] = useState({

    fileUpload: [],
    prefix: '',
    firstname: '',
    middlename: '',
    lastname: '',
  })





  const onChangeHandler = (event) => {
    console.log(event)
    setFormData(() => ({
      ...formData,
      [event.target.name]: event.target.value
    }))
  }
  


  const handleOnClick = () => {
    console.log(formData)
  }


  return (
    <div>
      <Form onChangeHandler={onChangeHandler} />
      <Button handleOnClick={handleOnClick} />
    </div>

  )
}

export default App
