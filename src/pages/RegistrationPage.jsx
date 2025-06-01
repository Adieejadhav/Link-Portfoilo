import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import '../styles/registrationPage.css';
import { useFormData } from "../../services/formContext";

function RegistrationPage() {

  const { setFormdata } = useFormData();
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful},
    reset
  } = useForm();
  


    const onSubmit = (data) => {
    console.log("Form submitted:", data);
    setFormdata(data); // Appends instead of replaces
    reset();
    navigate("/profilePreview");
  };


  return (
    <>
      <h1>Create Your Account</h1>

      <div className="wrapper">
        <form onSubmit={handleSubmit(onSubmit)} className="form-container" noValidate>
          
          <fieldset className="section">
            <legend>Personal Info</legend>

            <label htmlFor="fullName">Full Name</label>
            <input
              id="fullName"
              type="text"
              placeholder="Full Name"
              {...register("fullName", { required: "Full name is required", minLength: {value: 3, message: "Minimum 3 characters"} })}
            />
            {errors.fullName && <p className="error">{errors.fullName.message}</p>}

            <label htmlFor="bio">Bio</label>
            <textarea
              id="bio"
              rows="4"
              placeholder="Add your bio here"
              {...register("bio", { maxLength: {value: 300, message: "Max 300 characters"} })}
            />
            {errors.bio && <p className="error">{errors.bio.message}</p>}

            <label htmlFor="skills">Skills</label>
            <textarea
              id="skills"
              rows="3"
              placeholder="Add your skills here"
              {...register("skills", { maxLength: {value: 200, message: "Max 200 characters"} })}
            />
            {errors.skills && <p className="error">{errors.skills.message}</p>}

            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
              })}
            />
            {errors.email && <p className="error">{errors.email.message}</p>}

            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              type="tel"
              placeholder="10-digit phone number"
              {...register("phone", {
                required: "Phone number is required",
                pattern: { value: /^[0-9]{10}$/, message: "Enter a valid 10-digit phone number" },
              })}
            />
            {errors.phone && <p className="error">{errors.phone.message}</p>}
          </fieldset>

          <fieldset className="section">
            <legend>Social Links & Preferences</legend>

            <label htmlFor="github">GitHub URL</label>
            <input
              id="github"
              type="url"
              placeholder="GitHub URL"
              {...register("github", {
                pattern: {
                  value: /^(https?:\/\/)?(www\.)?github\.com\/[a-zA-Z0-9_-]+\/?$/,
                  message: "Enter a valid GitHub URL",
                },
              })}
            />
            {errors.github && <p className="error">{errors.github.message}</p>}

            <label htmlFor="linkedin">LinkedIn URL</label>
            <input
              id="linkedin"
              type="url"
              placeholder="LinkedIn URL"
              {...register("linkedin", {
                pattern: {
                  value: /^(https?:\/\/)?([\w]+\.)?linkedin\.com\/.*$/,
                  message: "Enter a valid LinkedIn URL",
                },
              })}
            />
            {errors.linkedin && <p className="error">{errors.linkedin.message}</p>}

            <label htmlFor="portfolio">Portfolio URL</label>
            <input
              id="portfolio"
              type="url"
              placeholder="Portfolio URL"
              {...register("portfolio", {
                pattern: {
                  value: /^(https?:\/\/)?([\w]+\.)?[\w-]+\.[a-z]{2,}.*$/,
                  message: "Enter a valid URL",
                },
              })}
            />
            {errors.portfolio && <p className="error">{errors.portfolio.message}</p>}

            <label htmlFor="projects">Show Your Projects</label>
            <input
              id="projects"
              type="text"
              placeholder="Link or description"
              {...register("projects")}
            />

            <div className="checkbox-group">
              <input
                id="showContact"
                type="checkbox"
                {...register("showContactInfo")}
              />
              <label htmlFor="showContact">Show Contact Info</label>
            </div>
          </fieldset>

          <button type="submit" disabled={isSubmitting} className="submit-btn">
            {isSubmitting ? "Submitting..." : "Create Account"}
          </button>

          {isSubmitSuccessful && <p className="success-msg">Profile created successfully!</p>}
        </form>
      </div>
    </>
  );
}

export default RegistrationPage;
