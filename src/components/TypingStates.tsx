import { useState } from "react";

function TypingStates() {
  const [age, setAge] = useState(0);
  const handleClick = () => {
    setAge((age) => age + 1);
  };
  return (
    <div>
      Age: {age}
      <button onClick={handleClick}>Change Age by 1</button>
    </div>
  );
}

export default TypingStates;
