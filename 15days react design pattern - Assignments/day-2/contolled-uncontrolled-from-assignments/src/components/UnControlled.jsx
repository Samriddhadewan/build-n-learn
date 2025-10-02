
const UnControlled = () => {
  return (
    <div className="flex items-center justify-center border ">
        <form className="flex flex-col w-[300px] border p-4 my-2">
      <input
        type="text"
        className="border rounded-2xl p-2 my-3"
        placeholder="name"
      />
      <input
        type="email"
        className="border rounded-2xl p-2 my-3"
        placeholder="email"
      />
      <textarea
        type="text"
        className="border rounded-2xl p-2 my-3"
        placeholder="message"
      />
      <button
        type="submit"
        className="bg-purple-500 cursor-pointer text-white p-1 rounded-lg"
      >submit</button>
    </form>
    </div>
  )
}

export default UnControlled