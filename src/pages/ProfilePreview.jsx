import React from "react";
import '../styles/profilepreviewpage.css';
import { useFormData } from "../../services/formContext";

function ProfilePreview() {

    const { formData } = useFormData();

  return (
    <>

      <div className="wrapper1">
        <br/>
        <br/>
      <h1>{formData.fullName || "Your Name Here"}</h1>

        <div className="info">
          <h3>Email</h3>
          <p>{formData.email || "Email not provided"}</p>
        </div>

        {formData.showContact && (
          <div className="info">
            <h3>Contact</h3>
            <p>{formData.contact || "Contact not provided"}</p>
          </div>
        )}

        <div className="info">
          <h3>Bio</h3>
          <p>{formData.bio || "No bio available"}</p>
        </div>

        <div className="info">
          <h3>Skills</h3>
          <p>{formData.skills || "No skills listed"}</p>
        </div>

        <div className="info">
          <h3>GitHub URL</h3>
          <p>{formData.github || "GitHub link not available"}</p>
        </div>

        <div className="info">
          <h3>LinkedIn URL</h3>
          <p>{formData.linkedin || "LinkedIn link not available"}</p>
        </div>

        <div className="info">
          <h3>Portfolio URL</h3>
          <p>{formData.portfolio || "Portfolio link not available"}</p>
        </div>

        <div className="info">
          <h3>Project URL</h3>
          <p>{formData.project || "Project link not available"}</p>
        </div>
      </div>
    </>
  );
}

export default ProfilePreview;
