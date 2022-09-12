import { calculateHoursBetweenNowAndDate } from "~/utils/hour";
import { transformToIpfsUrl } from "~/utils/ipfs";
import { resume } from "~/utils/text";

type PostProps = {
  id: string;
  name: string;
  handle: string;
  profileImage?: string;
  content?: string;
  image?: string;
  collection: number;
  comments: number;
  mirrors: number;
  createdAt: string;
};

export default function Post({
  name,
  handle,
  profileImage,
  content,
  image,
  collection,
  comments,
  mirrors,
  createdAt,
}: PostProps) {
  return (
    <div className="rounded-lg p-5 m-2 w-200 border-black border-2">
      <div className="flex justify-between">
        <div className="flex">
          {profileImage ? (
            <img
              className="w-10 h-10 rounded-full"
              src={transformToIpfsUrl(profileImage)}
              alt="avatar"
            />
          ) : (
            <div className="w-10 h-10 bg-first rounded-full ">
              <p className="text-center mt-1.5 text-white">{name.charAt(0)}</p>{" "}
            </div>
          )}

          <div className="content-start">
            {name ? (
              <p className="text-black text-xs font-bold px-3">{name}</p>
            ) : (
              <p className="text-black text-xs font-bold px-3">{handle}</p>
            )}

            <p className="text-gray-500 text-xs px-3">@{handle}</p>
          </div>
        </div>

        <p className="text-gray-500 text-xs ">
          {calculateHoursBetweenNowAndDate(createdAt)} h
        </p>
      </div>

      <div className="pt-5">
        <p className="text-black text-sm text-justify whitespace-pre-line">
          {resume(content!)}
        </p>
      </div>

      {image && (
        <div className="pt-5">
          <img src={transformToIpfsUrl(image)} alt="post" />
        </div>
      )}

      <div className="grid grid-cols-1 divide-y pt-5">
        <div></div>

        <div className="flex ">
          <div className="text-gray-600 text-tiny m-auto ">
            <span className="font-bold">{collection} </span> Collect
          </div>
          &nbsp; &nbsp;
          <div className="text-gray-600 text-tiny m-auto">
            <span className="font-bold">{comments} </span> Comments
          </div>
          &nbsp; &nbsp;
          <div className="text-gray-600 text-tiny m-auto">
            <span className="font-bold">{mirrors} </span>Mirrors
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
}
