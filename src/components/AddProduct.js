import { useState } from 'react'

const AddProduct = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [price, setprice] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert('Please add a task')
      return
    }

    onAdd({ text, price, reminder })

    setText('')
    setprice('')
    setReminder(false)
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Product</label>
        <input
          type='text'
          placeholder='Add a product'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Price</label>
        <input
          type='text'
          placeholder='Add a price'
          value={price}
          onChange={(e) => setprice(e.target.value)}
        />
      </div>
      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input
          type='checkbox'
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input type='submit' value='Save Product' className='btn btn-block' />
    </form>
  )
}

export default AddProduct