import profile from '../../assets/profile.jpg';

const Profile = () => {
    return (
        <>
            <div className="profile">
                <div className="profile-image">
                    <img src={profile} alt="profile photo" />
                </div>
                <p>
                    Hi,I am <span className='important'>Gantulga</span>. Currently I am looking for
                    new opportunities. Feel free to contact me!
                </p>
                <p>My email:
                </p>
                <a className='important email' href="mailto: pggan2@gmail.com" target="_blank" > pggan2@gmail.com</a>
                <a href='https://github.com/pgantulga' target='_blank' rel="noopener noreferrer" style={{ textDecoration: 'none' }}>Visit my GitHub!</a>

            </div>
        </>
    )
}

export default Profile;