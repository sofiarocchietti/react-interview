import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import './DeleteRecipe.css'
const DeleteRecipe = ({id}) => {

  let history = useHistory()

  const deletingAlert = (e) => {
    e.preventDefault(e)
    Swal.fire({
      title: 'Do you want to delete this recipe?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:3001/recipes/${id}`)
          .then(() => {
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
            history.push('/home')
          })
      }
    })
  }

  return (
    <div>
      <button onClick={deletingAlert} className='delete_button'>
        DELETE
      </button>
    </div>
  )
}

export default DeleteRecipe
