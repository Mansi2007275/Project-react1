/**function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      <p>📧 Email: yadavmansi0111207@gmail.com</p>
      <p>📱 Phone: 9911702129</p>
      <p>
        🌐 GitHub: <a href="#">github.com/yourusername</a>
      </p>
      <p>
        🔗 LinkedIn: <a href="#"></a>
      </p>
    </div>
  );
}

export default Contact;**/
function Contact() {
  const containerStyle = {
    maxWidth: "500px",
    margin: "40px auto",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f9f9f9",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
  };

  const headingStyle = {
    fontSize: "28px",
    marginBottom: "20px",
    color: "#333",
  };

  const textStyle = {
    fontSize: "18px",
    margin: "10px 0",
    color: "#555",
  };

  const linkStyle = {
    color: "#0077b5",
    textDecoration: "none",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}> Contact</h2>
      <p style={textStyle}> Email: yadavmansi0111207@gmail.com</p>
      <p style={textStyle}> Phone: 9911702129</p>
      <p style={textStyle}>
        GitHub:{" "}
        <a
          style={linkStyle}
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/Mansi2007275
        </a>
      </p>
      <p style={textStyle}>
        LinkedIn:{" "}
        <a
          style={linkStyle}
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.linkedin.com/in/mansi-yadav-2007/
        </a>
      </p>
    </div>
  );
}

export default Contact;
