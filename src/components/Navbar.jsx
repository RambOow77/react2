const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <a className="navbar-brand text-white fw-bold" href="#">
        Pizzería Mamma Mia!
      </a>
      <div className="d-flex justify-content-between w-100 align-items-center">
        <div className="d-flex gap-2">
          <button className="btn btn-outline-light btn-sm">🍕 Home</button>
          {token ? (
            <>
              <button className="btn btn-outline-light btn-sm">🔓 Profile</button>
              <button className="btn btn-outline-light btn-sm">🔒 Logout</button>
            </>
          ) : (
            <>
              <button className="btn btn-outline-light btn-sm">🔐 Login</button>
              <button className="btn btn-outline-light btn-sm">🔐 Register</button>
            </>
          )}
        </div>
        <div>
          <button className="btn btn-outline-info btn-sm text-info fw-bold">
            🛒 Total: ${total.toLocaleString("es-CL")}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;