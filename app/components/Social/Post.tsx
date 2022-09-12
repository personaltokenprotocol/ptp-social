type PostProps = {
  id: string;
  name: string;
  handle: string;
  profileImage?: string;
};

export default function Post({ id, name, handle, profileImage }: PostProps) {
  return (
    <div className="flex shadow-lg rounded-lg p-3 m-3 ">
      <div className="flex items-start">
        <img
          className="w-12 h-12 rounded-full"
          src={profileImage}
          alt="avatar"
        />
        <div className="m-auto">
          <p className="text-black text-sm px-3">{name}</p>
          <p className="text-gray-500 text-xs px-3">@{handle}</p>
        </div>
      </div>
    </div>
  );
}
