/**function Education() {
  return (
    <div>
      <h2>Education</h2>
      <ul>
        <li>
          <strong>ABES Engineering College</strong> – B.Tech CSE (1st Year)
        </li>
        <li>
          <strong>Fatima Convent Sr. Secondary School</strong> – 12th Passed
        </li>
      </ul>
    </div>
  );
}

export default Education;**/
function Education() {
  const containerStyle = {
    maxWidth: "600px",
    margin: "40px auto",
    padding: "25px",
    borderRadius: "20px",
    background: "linear-gradient(135deg, #e0f7fa, #ffffff)",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
  };

  const headingStyle = {
    fontSize: "28px",
    color: "#2c3e50",
    marginBottom: "20px",
    textAlign: "center",
    borderBottom: "2px solid #00acc1",
    display: "inline-block",
    paddingBottom: "5px",
  };

  const listStyle = {
    listStyle: "none",
    padding: 0,
    margin: 0,
  };

  const itemStyle = {
    background: "#ffffff",
    margin: "15px 0",
    padding: "15px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  };

  const strongStyle = {
    color: "#00796b",
    fontSize: "18px",
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}> Education</h2>
      <ul style={listStyle}>
        <li
          style={itemStyle}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.03)")
          }
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <strong style={strongStyle}>ABES Engineering College</strong> – B.Tech
          CSE (1st Year)
        </li>
        <li
          style={itemStyle}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.03)")
          }
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <strong style={strongStyle}>
            Fatima Convent Sr. Secondary School
          </strong>{" "}
          – 12th Passed
        </li>
      </ul>
    </div>
  );
}

export default Education;
