import React from "react";
import "./Contact.css"; // Import your CSS file

export const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-heading">Contact Us</h2>
      <p>
        If you have any questions or inquiries, please feel free to get in
        touch with us.
      </p>
      <div className="contact-info">
        <p>Email: contact@example.com</p>
        <p>Phone: +1 (123) 456-7890</p>
        <p>Address: 123 Main Street, City, Country</p>
      </div>
      {/* Add a contact form component here */}
    </div>
  );
};
