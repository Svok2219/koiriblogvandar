import { useEffect } from 'react';
import { useRouter } from 'next/router';
// import { useAuth } from '../context/AuthUserContext';
import BlogPost from './BlogPost';
import { useAuth } from '../../context/AuthUserContext';
import PrivateRoute from '../PrivateRoute';

const Profile = () => {

  const router=useRouter()
  

  
  // Fetch the user client-side
  const { user, loading } = useAuth();
console.log(user)
  // Server-render loading state
  if (!user || user.email === null || !user.email=="shuvo@koiri.com") {
    return <PrivateRoute/>  }

  // Once the user request finishes, show the user
  return (
      
   <BlogPost admin={user.email==="shuvo@koiri.com"} adminAgain={user.email==="shuvokoiri89@gmail.com"} />
  )
}
 export default Profile;
