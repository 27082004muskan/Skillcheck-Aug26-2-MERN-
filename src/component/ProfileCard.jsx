

const ProfileCard = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-blue-50">
      <div className="border rounded-xl shadow-cyan-900 p-10 flex flex-col justify-center items-center gap-5 bg-white">
        <h1 className="text-4xl font-bold text-blue-900" >Muskan Gupta </h1>
      <h2 className="text-xl text-blue-900" > MERN Stack Developer</h2>

        <div className="flex justify-center gap-2 mt-5">
          <span className="bg-cyan-100 px-3 py-1 rounded-full text-sm">
            HTML
          </span>

          <span className="bg-cyan-100 px-3 py-1 rounded-full text-sm">
            CSS
          </span>

          <span className="bg-cyan-100 px-3 py-1 rounded-full text-sm">
            React
          </span>
        </div>

      <p> Experience: Learning Phase</p>
      <button className="border-0 bg-blue-700 rounded-xl h-10 w-40 text-white"> View Project</button>
      </div>

      
    </div>
  )
}

export default ProfileCard
