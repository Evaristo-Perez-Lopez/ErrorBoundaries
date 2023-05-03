import React from "react";

type InputMessageProps = {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
};
function TextInput({ message, setMessage }: InputMessageProps) {
  return (
    <textarea
      name="message"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      id="message"
      className="outline-none w-full h-16 text-base"
      placeholder="Write something"></textarea>
  );
}

export default TextInput;
