import { useEffect, useState } from "react"

function Modals( { isModalOpen, setIsModalOpen, userToUpdate, setUserToUpdate, addUser, update } ){

   
    const [ firstName, setFirstName ] = useState( '' ),
        [ lastName, setLastName ] = useState( '' ),
        [ email, setEmail ] = useState( '' ),
        [ password, setPassword ] = useState( '' ),
        [ birthday, setBirthday ] = useState( '' )

    console.log( lastName )
    useEffect(() => {
        if( userToUpdate ){
            setFirstName( userToUpdate.first_name )
            setLastName( userToUpdate.last_name )
            setEmail( userToUpdate.email )
            setPassword( userToUpdate.password )
            setBirthday( userToUpdate.birthday )
            
            setIsModalOpen( true )
        }else{
            setFirstName( '' )
            setLastName( '' )
            setEmail( '' )
            setPassword( '' )
            setBirthday( '' )
        }

    },[ userToUpdate, setIsModalOpen ])

    const submit = event => {
        event.preventDefault()

        const data = {
            first_name: firstName,
            last_name: lastName,
            birthday: birthday,
            email,
            password
        }

        if( userToUpdate === null ){
            addUser( data )
            setIsModalOpen( false )

        }else{
            data.id = userToUpdate.id
            update( data )
            setUserToUpdate( null )
            setIsModalOpen( false )
        }
 
    }

    return(
        <article className={`modal ${ isModalOpen && 'is-open'}`} >
            <div className='modal-container' >
                <button 
                    onClick={() => setIsModalOpen( false ) }
                    className='modal-close'
                >X</button>
                <form onSubmit={ submit }>
                    <h2>New User</h2>
                    <div>
                        <input 
                            type="text" 
                            onChange={ e => setFirstName( e.target.value )} 
                            name='first-name' 
                            placeholder='first name'
                            value={ firstName }
                            />
                            <input 
                                className='last-input'
                                onChange={ e => setLastName( e.target.value )} 
                                type="text" 
                                name='last-name' 
                                placeholder='last name'
                                value={ lastName }
                            />
                    </div>
                    <input 
                        type="email" 
                        onChange={ e => setEmail( e.target.value )} 
                        value={ email }
                        name='email' 
                        placeholder='email'
                    />
                    <input 
                        type="password" 
                        onChange={ e => setPassword( e.target.value )} 
                        value={ password }
                        name='password' 
                        placeholder='password'
                    />
                    <input 
                        type="date"
                        onChange={ e => setBirthday( e.target.value )} 
                        value={ birthday }
                        name='password' 
                    />
                    <button
                        className='submit-btn'    
                    >Upload</button>
                </form>               
            </div>
        </article>
    )
}

export default Modals