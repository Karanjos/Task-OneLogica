import { Button, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});

  const navigate = useNavigate();

  console.log(formData);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = () => {
    setLoading(true);
    try {
      axios
        .post("http://localhost:5000/api/create-blog", formData)
        .then((res) => {
          setData(res.data);
          navigate("/");
        });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1.2rem",
        padding: "1rem",
        maxWidth: "500px",
        margin: "20px auto",
        // "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
    >
      <h1 className="text-3xl font-bold ms-5 text-slate-600 text-center">
        ADD YOUR BLOG
      </h1>
      <TextField
        required
        id="title"
        label="Title"
        // defaultValue="Title"
        onChange={handleChange}
      />
      <TextField
        required
        id="introduction"
        multiline
        minRows={3}
        maxRows={5}
        label="Introduction"
        // defaultValue="Introduction"
        onChange={handleChange}
      />
      <TextField
        required
        id="content"
        label="Content"
        multiline
        minRows={5}
        maxRows={10}
        // defaultValue="Content"
        onChange={handleChange}
      />
      <TextField
        id="bulletPoints"
        label="Bullet Points"
        // defaultValue="Bullet Points"
        onChange={handleChange}
      />
      <TextField
        id="refrenceLinks"
        label="Refrence Links"
        // defaultValue="Refrence Links"
        onChange={handleChange}
      />
      <Button
        variant="contained"
        sx={{
          backgroundColor: "teal",
          color: "white",
          width: "200px",
        }}
        onClick={handleSubmit}
      >
        {loading ? "Loading..." : "Add Blog"}
      </Button>
    </Box>
  );
};
export default CreateBlog;
