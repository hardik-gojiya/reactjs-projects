import { useState } from "react";
import "./App.css";

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("male");
  const [subject, setSubjects] = useState({
    english: true,
    maths: false,
    science: false,
  });
  const [resume, setResume] = useState("");
  const [url, setUrl] = useState("");
  const [choice, setChoice] = useState("");
  const [about, setAbout] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      firstName,
      lastName,
      email,
      contact,
      gender,
      subject,
      resume,
      url,
      about
    );
  };
  const handleReset = (e) => {
    setFirstName(""),
      setLastName(""),
      setEmail(""),
      setContact(""),
      setAbout(""),
      setGender("male"),
      setSubjects({
        english: true,
        maths: false,
        science: false,
      }),
      setResume(""),
      setUrl(""),
      setChoice("");
  };

  const handleSubjChange = (e) => {
    setSubjects((prev) => ({
      ...prev,
      [e]: !prev[e],
    }));
  };

  return (
    <>
      <div className="main ">
        <h1 className="text-center">Form In React</h1>
        <label>First Name*</label>
        <input
          type="text"
          placeholder="Enter Your First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <label>Last Name*</label>
        <input
          type="text"
          placeholder="Enter Your Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <label>Email*</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Your Email"
          required
        />
        <label>Contact*</label>
        <input
          type="tel"
          value={contact}
          placeholder="Enter Your Contact"
          onChange={(e) => setContact(e.target.value)}
          required
        />
        <label>Gender*</label>
        <label htmlFor="gender">
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
            required
          />
          Male
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
            required
          />
          FeMale
          <input
            type="radio"
            id="other"
            name="gender"
            value="other"
            checked={gender === "other"}
            onChange={(e) => setGender(e.target.value)}
            required
          />
          Other
        </label>
        <label>Your Favourite Subjects</label>
        <label htmlFor="favsubj">
          <input
            type="checkbox"
            name="favsubj"
            checked={subject.english === true}
            onChange={(e) => handleSubjChange("english")}
          />
          English
          <input
            type="checkbox"
            name="favsubj"
            checked={subject.maths === true}
            onChange={(e) => handleSubjChange("maths")}
          />
          Maths
          <input
            type="checkbox"
            name="favsubj"
            checked={subject.science === true}
            onChange={(e) => handleSubjChange("science")}
          />
          Science
        </label>
        <label>Upload Resume*</label>
        <input
          type="file"
          value={resume}
          onChange={(e) => setResume(e.target.value)}
          required
        />
        <label>Enter URL*</label>
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <label>Select Your Choice</label>
        <select value={choice} name="choice" id="choice">
          <option value="basic">basic</option>
          <option value="advance">advance</option>
        </select>
        <label>About</label>
        <textarea
          value={about}
          name="about"
          id="about"
          placeholder="About Your Self"
          onChange={(e) => setAbout(e.target.value)}
        ></textarea>
        <label htmlFor="submit-reset">Submit or Reset</label>
        <label>
          <button onClick={handleSubmit}>Submit</button>
          <button onClick={handleReset}>Reset</button>
        </label>
      </div>
    </>
  );
}
