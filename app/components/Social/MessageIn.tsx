type MessageInProps = {
  message: string;
};

export default function MessageIn({ message }: MessageInProps) {
  return (
    <div id="message-in" className="p-3">
      <div className="bg-green-100 rounded-lg p-3 mx-3 inline-block">
        {message}
      </div>
    </div>
  );
}
