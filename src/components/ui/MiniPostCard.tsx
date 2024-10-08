import React from "react";
import { Card } from "antd";
import Link from "next/link";
import { Dot } from "lucide-react";
import { TPost } from "@/types/post.type";

const MiniPostCard = ({ post }: { post: TPost }) => {
  const { thumbnail, title, author } = post;

  return (
    <Card className="flex flex-row border-none p-0 duration-300">
      <div className="flex md:gap-4 gap-3">
        <Link
          href={"/"}
          className="inline-block sm:h-[85px] md:w-[150px] sm:w-[180px] w-[250px] object-cover rounded-md"
        >
          <div
            className={`bg-cover bg-center bg-no-repeat w-full h-full rounded-md`}
            style={{ backgroundImage: `url(${thumbnail})` }}
          ></div>
        </Link>
        <div className="flex justify-between flex-col">
          <div>
            <div className="flex items-center -mt-2">
              <Link
                className="text-slate-600 font-semibold capitalize"
                href={`/category}`}
              >
                <p className="font-montserrat text-[13px] font-medium">
                  {author.name}
                </p>
              </Link>
              <Dot className="-ml-2 text-slate-300" size={35} />

              <p className="font-montserrat text-[13px] font-medium mb-0 -ml-2 text-slate-400">
                16 Minutes ago
              </p>
            </div>
            <Link href={"/"} className="-mt-1 inline-block">
              <h5 className="sm:text-base text-[15px] font-semibold text-text">
                {title.length > 60 ? title.substring(0, 60) + "..." : title}
              </h5>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default MiniPostCard;
