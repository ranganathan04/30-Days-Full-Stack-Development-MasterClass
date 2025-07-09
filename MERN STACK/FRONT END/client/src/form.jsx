import React from 'react'

function form() {
  return (
    <div>
        <form action="http://localhost:3000/login" method="post">
        <input type="text" name="Name" />
        <input type="number" name="Number" />
        <input type="submit"  />
        </form>
    </div>
  )
}

export default form