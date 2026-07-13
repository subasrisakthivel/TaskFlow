function Footer() {
  return (
    <footer className=" bg-gray-200 px-10 py-4">
      <div className="flex justify-between">
        <h2 className="font-bold">TaskFlow</h2>
        <nav>
            <ul className="flex  gap-6">
                <li><a href="feature">Feature</a></li>
                <li><a href="about">About</a></li>
            </ul>
        </nav>
        
      </div>
      <p className="text-center">© 2026 TaskFlow</p>
    </footer>
  );
}
export default Footer;
