import { useState } from "react";
import CreateButton from "./CreateButton";
import TextInput from "./TextInput";
import { useMessageForm } from "./hooks/useMessageForm";
function CreateForm() {
  const [message, setMessage] = useState<string>("");
  const { submitForm } = useMessageForm();
  const handleSubmit = async () => {
    const formData = { message };
    await submitForm(formData);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="border-2 rounded-md focus-within:border-sky-700 border-gray-200 p-2">
        <TextInput message={message} setMessage={setMessage} />
        <div className="flex justify-between items-center">
          <p className="text-xs font-semibold text-gray-500 rounded-s-full border p-1">
            50
          </p>
          <CreateButton />
        </div>
      </form>
    </>
  );
}

export default CreateForm;
