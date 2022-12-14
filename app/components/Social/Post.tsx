import { Link } from "@remix-run/react";
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
    <div className=" p-4 m-4  border-2 flex flex-col justify-between">
      <div className="w-full">
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
                <p className="text-center mt-1.5 text-white">
                  {name?.charAt(0)}
                </p>{" "}
              </div>
            )}

            <div className="content-start">
              {name ? (
                <Link to={`/${handle}`} prefetch="intent">
                  <p className="text-black text-xs font-bold px-3">{name}</p>
                </Link>
              ) : (
                <Link to={`/${handle}`} prefetch="intent">
                  <p className="text-black text-xs font-bold px-3">{handle}</p>
                </Link>
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
          <div className="pt-3">
            <img src={transformToIpfsUrl(image)} alt="post" />
          </div>
        )}
      </div>

      <div className="divide-y bottom-0 pt-5">
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
