const Footer = () => {
  return (
    <div className="bg-slate-50 text-slate-700 border-t shadow-sm shadow-black p-5">
      <p
        style={{
          textAlign: "center",
        }}
      >
        &copy; {new Date().getFullYear()} Karan Joshi
      </p>
    </div>
  );
};
export default Footer;
