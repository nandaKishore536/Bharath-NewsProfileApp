import {FaRegCircleUser} from 'react-icons/fa6'

import './index.css'

const user = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  bio: 'News enthusiast and writer',
}

const Profile = () => (
  <div className="userBg">
    <div className="subCon">
      <FaRegCircleUser size={100} />
      <h1 className="userH1">{user.name}</h1>
      <h1 className="userEmail">{user.email}</h1>
      <p className="userBio">{user.bio}</p>
    </div>
  </div>
)

export default Profile
