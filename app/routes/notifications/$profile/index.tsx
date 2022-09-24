export default function Messages() {
  return (
    <div className="w-full">
      <div id="message-in" className="p-3">
        <div className="bg-green-100 rounded-lg p-3 mx-3 inline-block">
          Hi 👋
        </div>
      </div>

      <div id="message-out" className="p-3">
        <div className="bg-blue-100 rounded-lg p-3 mx-3 inline-block">
          How are your doing?
        </div>
      </div>
    </div>
  );
}
