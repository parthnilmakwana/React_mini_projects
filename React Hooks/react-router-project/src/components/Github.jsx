
import { useLoaderData} from 'react-router'

function Github() {
   const data = useLoaderData()
  
    
  return (
    <div>
        <div>UserName : {data.login}</div>
        <img src={data.avatar_url} alt="git picture" width={200} />
      
    </div>
  )
}

export default Github

export const GithubInfo = async() =>{
    const response = await fetch("https://api.github.com/users/parthnilmakwana")
    return response.json()

}

