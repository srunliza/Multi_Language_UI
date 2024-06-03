export default function DeveloperDashboardLayout({ children }) {
  return (
    <div className="flex h-screen">
      {/* <!-- Sidebar --> */}
      <div className="w-64 h-full bg-red-400 hidden md:block">
        <h1>Sidebar</h1>
        {/* <!-- Sidebar content here --> */}
      </div>
      <div className="flex flex-col flex-grow bg-blue-900">
        <h1>Navbar</h1>
        <div className="flex-grow p-6 bg-white">{children}</div>
      </div>
    </div>
  );
}
