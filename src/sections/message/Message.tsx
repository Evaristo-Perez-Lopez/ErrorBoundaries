import React from "react";

type MessageProps = React.PropsWithChildren<{
  stamp: Date;
}>;
function Message({ children, stamp }: MessageProps) {
  return (
    <section className="w-full rounded hover:border-gray-400 border p-2 text-sm text-sky-900 flex flex-col">
      <p className="text-left ">{children}</p>
      <span className="text-right text-xs text-gray-400">
        {stamp.toLocaleDateString()}
      </span>
    </section>
  );
}

export default Message;
