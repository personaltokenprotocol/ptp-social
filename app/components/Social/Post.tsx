import { transformToIpfsUrl } from "~/utils/ipfs";

type PostProps = {
  id: string;
  name: string;
  handle: string;
  profileImage?: string;
  description?: string;
  image?: string;
};

export default function Post({
  id,
  name,
  handle,
  profileImage,
  description,
  image,
}: PostProps) {
  console.log(profileImage);

  return (
    <div className="rounded-lg p-5 m-2 w-200 border-black border-2">
      <div className="flex items-start">
        {profileImage ? (
          <img
            className="w-10 h-10 rounded-full"
            src={transformToIpfsUrl(profileImage)}
            alt="avatar"
          />
        ) : null}

        <div className="content-start">
          <p className="text-black text-xs font-bold px-3">{name}</p>
          <p className="text-gray-500 text-xs px-3">@{handle}</p>
        </div>
      </div>

      <div className="pt-5">
        <p className="text-gray-500 text-xs">{description}</p>
      </div>

      {image && (
        <div className="pt-5">
          <img className="w-200" src={transformToIpfsUrl(image)} alt="post" />
        </div>
      )}
    </div>
  );
}
