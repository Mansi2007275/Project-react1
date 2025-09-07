/**function Home() {
  return (
    <div>
      <h1>Mansi Yadav</h1>
      <p>Web Developer | 1st Year Student</p>
      <p>Email: yadavmansi0111207@gmail.com | Phone: 9911702129</p>
    </div>
  );
}

export default Home;**/

function Home() {
  return (
    <div className="home">
      <div className="profile-card">
        <h1 className="name">Mansi Yadav</h1>
        <p className="title"> Web Developer | 2nd Year Student</p>
        <p className="contact">yadavmansi0111207@gmail.com | 9911702129</p>
      </div>

      <style>
        {`
          .home {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 90vh;
            background: linear-gradient(135deg,grey,  #FFCDA2);
            color: white;
            text-align: center;
            font-family: "Segoe UI", sans-serif;
          }
          .profile-card {
            background: rgba(255,255,255,0.1);
            padding: 40px 60px;
            border-radius: 15px;
            box-shadow: 0px 8px 20px rgba(0,0,0,0.2);
            backdrop-filter: blur(8px);
          }
          .name {
            font-size: 2.5rem;
            margin-bottom: 10px;
          }
          .title {
            font-size: 1.2rem;
            margin-bottom: 15px;
            font-style: italic;
          }
          .contact {
            font-size: 1rem;
            background: rgba(255,255,255,0.2);
            padding: 10px;
            border-radius: 8px;
            display: inline-block;
          }
        `}
      </style>
    </div>
  );
}

export default Home;
