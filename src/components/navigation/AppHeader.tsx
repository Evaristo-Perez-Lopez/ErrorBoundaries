function AppHeader() {
  return (
    <header className="flex justify-between items-center border-b-2 p-2 box-border">
      <div className="block text-left text-sky-600 font-bold">
        <h1 className="text-lg">Messages</h1>
        <p className="text-sm italic">By Eva</p>
      </div>
      <p className="text-base font-medium text-gray-500 align-middle">
        Total: 50
      </p>
    </header>
  );
}

export default AppHeader;
