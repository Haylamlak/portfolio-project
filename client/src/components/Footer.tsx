function Footer() {
  return (
 <footer className="bg-gray-950 border-t border-gray-800 text-center py-8 text-gray-400">
  <p>© {new Date().getFullYear()} Haylamlak. All rights reserved.</p>

  <div className="mt-3">
    <a className="text-cyan-400 mr-4" href="https://github.com/Haylamlak">GitHub</a>
    <a className="text-cyan-400" href="#">LinkedIn</a>
  </div>
</footer>
  );
}

export default Footer;