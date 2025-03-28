
const AboutUs = () => {
  return (
    <div>
      <br></br>
      <div style={{ backgroundColor: "whitesmoke" }} className="about-section">
        <h1>About Us Page</h1>
        ● Technologies :- Java,JavaScript
       <br></br>
        
          ● FrameWork and Libraries used:- Spring Boot, Bootstrap, React JS.,MySql 8.0
          <br></br>
        ● Description:
      
          ➢ Led the development of a Airline Reaservation System, enabling users to book tickets, view  airports and view planes , and view booked tickets and download.{" "}
        
          {" "}
          <br></br>
          ➢ Conceptualized and finalized the application's concept through
          effective brainstorming sessions.{" "}
          <br></br>
        
          ➢ Achieved seamless integration of various technologies to deliver a
          user-friendly and feature-rich platform.
        
      </div>

      <h2 style={{ textAlign: "", backgroundColor: "" }}>Our Team</h2>
      <div className="row">
        <div className="column">
          <div style={{ backgroundColor: "whitesmoke" }} className="card">
            <div style={{ display: "flex", justifyContent: "center" }}>

            <img
                src={"./images2/photo.png"}
                alt="shubham"
                style={{ width: "150px" }}
              />
            </div>
            <div className="container">
              <h2>Shubham Chavhan</h2>
              <p>
                Recent graduate and aspiring Full-Stack Developer eager to
                contribute technical skills and passion for innovation to a
                dynamic organization. Committed to continuous learning and
                embracing new technologies to drive impactful solutions.
              </p>
              <p>chavhanshubham19@gmail.com</p>
              <p>Contact NO : 9156088633</p>
           </div>
          </div>
        </div>

      </div>
      <div className="row">
        <div className="column">
          <div style={{ backgroundColor: "whitesmoke" }} className="card">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
               src={"./images2/vrushya.jpg"}
                alt="Rushikesh"
                style={{ width: "150px" }}
              />
            </div>
            <div className="container">
              <h2>Rushikesh Dhawale</h2>
              <p>
                Recent graduate and aspiring Full-Stack Developer eager to
                contribute technical skills and passion for innovation to a
                dynamic organization. Committed to continuous learning and
                embracing new technologies to drive impactful solutions.
              </p>
              <p>rushikeshdhawale008@gmail.com</p>
              <p>Contact NO :7350587078</p>
            </div>
          </div>
        </div>

        <div className="row">
        <div className="column">
          <div style={{ backgroundColor: "whitesmoke" }} className="card">
            <div style={{ display: "flex", justifyContent: "center" }}>
             <img src="./images2/kaniyaa.jpg" alt="kaniyaa"style={{ width: "150px" }}/> 
            </div>
            <div className="container">
              <h2>Kaniyaa Navandar</h2>
              <p>
                Recent graduate and aspiring Full-Stack Developer eager to
                contribute technical skills and passion for innovation to a
                dynamic organization. Committed to continuous learning and
                embracing new technologies to drive impactful solutions.
              </p>
              <p>Kanhaiyanavandarkn@gmail.com</p>
              <p>Contact NO : 9011616061</p>
            </div>
          </div>
        </div>

        
      </div>

      <div className="row">
        <div className="column">
          <div style={{ backgroundColor: "whitesmoke" }} className="card">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={"./images2/omkar2.jpg"}
                alt="Mike"
                style={{ width: "150px" }}
              />
            </div>
            <div className="container">
              <h2>Onkar Kulkarni</h2>
              <p>
                Recent graduate and aspiring Full-Stack Developer eager to
                contribute technical skills and passion for innovation to a
                dynamic organization. Committed to continuous learning and
                embracing new technologies to drive impactful solutions.
              </p>
              <p>kulkarnio421@gmail.com</p>
              <p>Contact NO :8208748116</p>
            </div>
          </div>
        </div>

       
      </div>
      </div>
    </div>
    
  );
};

export default AboutUs;
