

function UsersList( { setIsModalOpen, usersData, setUserToUpdate, remove } ) {

  return (
      <section className='section-container' >
        <button
        className='new-usr-btn'
        onClick={ () => setIsModalOpen( true ) } 
        > New User </button>
        <div className='users-card-container' >

          {
            usersData?.map( user => (
              
              <div className='user-card' >
                <h3>{ user.first_name } { user.last_name }</h3>
                <hr />
                <h4>CORREO</h4>
                <p>{ user.email }</p>
                <h4>CUMPLEAÑOS</h4>
                <p><i className="fa-solid fa-gift"></i>{ user.birthday }</p>
                <hr />
                <div className='btn-container' >
                  <button 
                    onClick={() => remove( user )}
                    className='btn-remove' ><i className="fa-solid fa-trash-can"></i></button>
                  <button
                    className='btn-update'
                    onClick={ () => setUserToUpdate( user ) }
                  ><i className="fa-solid fa-pen"></i></button>
                </div>
              </div>

            ))
          }

        </div>
      </section>
  );
}

export default UsersList;
