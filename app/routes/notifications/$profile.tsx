export default function Notifications() {
  return (
    <div className="w-full">
      <div className="flex p-6 shadow-md">
        {true ? (
          <img
            className="w-12 h-12 rounded-full"
            src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
            alt="avatar"
          />
        ) : (
          <div className="w-10 h-10 bg-first rounded-full ">
            <p className="text-center mt-1.5 text-white">C</p>{" "}
          </div>
        )}

        <div className="content-start my-auto">
          {true ? (
            <p className="text-black text-sm font-bold px-3">Cris Valdivia</p>
          ) : (
            <p className="text-black text-sm font-bold px-3">
              @cristianvaldivia.lens
            </p>
          )}

          <p className="text-gray-500 text-xs px-3">@cristianvaldivia.lens</p>
        </div>
      </div>

      <div className="fixed bottom-0 w-full">
        <div className="p-2">
          <input
            type="text"
            placeholder="Write your message!"
            className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-6 bg-gray-200 rounded-md py-3"
          ></input>
        </div>
      </div>
    </div>
  );
}
