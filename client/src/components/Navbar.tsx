import { TextField } from "@mui/material";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-slate-50 text-xl shadow-md border-b border-slate-400 p-4">
      <Container
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>OneLogica</div>
        <div>
          <TextField
            id="outlined-search"
            label="Search.."
            type="search"
            sx={{
              borderRadius: "2rem",
            }}
            size="small"
          />
        </div>
        <nav>
          <div
            style={{
              display: "flex",
              gap: "2rem",
              listStyleType: "none",
            }}
          >
            <>
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
              >
                Home
              </Link>
            </>
            {/* <>
              <Link
                to="/create-blog"
                style={{
                  textDecoration: "none",
                }}
              >
                Create Blog
              </Link>
            </> */}
          </div>
        </nav>
      </Container>
    </header>
  );
};
export default Navbar;
