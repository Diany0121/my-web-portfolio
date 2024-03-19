import React from 'react'

function Contacto() {
  return (
    <main>
      <div>
        <h2 className=''>¿Quieres hablar?</h2>
        <p className=''>Si quieres hacerme cualquier tipo de consulta o simplemente pasabas a decir "Hola 👋🏻 ", estás en el lugar indicado.</p>
      </div>
      <form action='https://formspree.io/f/xrgwndbn' method='POST' className=''>

      <label htmlFor='name' className=''>Nombre completo</label>
      <input className='' type="text" id='name' placeholder='Nombre y apellidos' required/>

      <label htmlFor="email" className=''>Email</label>
      <input className='' type="email" id='email' placeholder='nombre.apellidos@mail.com' required/>

      <label htmlFor='number' className=''>Teléfono(opcional)</label>
      <input className='' type="tel" id='number' placeholder='Ej: 639 234 768'/>

      <label htmlFor='message' className=''>Mensaje</label>
      <textarea
          className=''
          name='message'
          id='message'
          cols='30'
          rows='10'
          placeholder='¿Qué necesitas?'
        ></textarea>
      <input className='' type='submit' value='Enviar'></input>
      </form>
    </main>
  )
}

export default Contacto;