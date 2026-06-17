import "./App.css";


function App({userName = "parthnil", profession = "fullstack web-developer"}) {

  return (
    <>
    <div className="flex justify-center items-center gap-4">

     <div
        className=" bg-slate-200 h-auto w-fit items-center flex flex-col justify-center p-4 border border-gray-400 rounded-2xl"   >
        <div>
          <img
            className="rounded-2xl mb-4"
            src="https://media.licdn.com/dms/image/v2/D4D03AQF0M1stANc3pw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1709034993064?e=2147483647&v=beta&t=DpDa1I5lRzCZzaaRDVrJw0B2s2lxiBL8POYaT9G7vrg"
            alt=""
          />
        </div>

        <div className="flex flex-col justify-start w-48">
          <p className="font-bold">{userName}</p>
          <p className="text-gray-600">{profession}</p>
        </div>
      </div>
    </div>
    </>
    
  )
    
}

export default App;
