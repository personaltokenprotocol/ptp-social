type MessageOutProps = {
  message: string;
};

export default function MessageOut({ message }: MessageOutProps) {
  return (
    <div id="message-in" className="p-3">
      <div className="bg-blue-100 rounded-lg p-3 mx-3 inline-block">
        {message}
      </div>
    </div>
  );
}
