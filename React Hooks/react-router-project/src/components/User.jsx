import { useLoaderData, useParams } from "react-router"

function User() {
    const {userid} = useParams()
    const data = useLoaderData()

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl flex flex-col items-center">
      <h1> GitHub User : {userid} </h1>
      {data && data.avatar_url && (
         <img src={data.avatar_url} alt="git picture" width={300} className="mt-6 rounded-xl" />
      )}
      {data && data.bio && (
          <p className="text-lg mt-4">{data.bio}</p>
      )}
    </div>
  )
}

export default User

export const userInfoLoader = async({params}) =>{
    const response = await fetch(`https://api.github.com/users/${params.userid}`)
    if (!response.ok) {
        return null;
    }
    return response.json()
}
