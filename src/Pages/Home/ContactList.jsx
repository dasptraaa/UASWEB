// ContactList.jsx

import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ContactList() {
  const [contactList, setContactList] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    // Fetch data from the server when the component mounts
    axios.get("http://localhost/api/contact")
      .then((response) => {
        setContactList(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching contact data:", error);
      });
  }, []);

  const handleShowDetails = (contact) => {
    // Set the selected contact for displaying details
    setSelectedContact(contact);
  };

  return (
    <div>
      <h2>Pesan</h2>
      <ul>
        {contactList.map((contact) => (
          <li key={contact.id}>
            <strong>{contact.firstname} {contact.lastname}</strong>
            <br />
            Email: {contact.email}
            <br />
            Phone Number: {contact.phonenumber}
            <br />
            Message: {contact.message}
            <br />
            {/* Button to show details */}
            <button onClick={() => handleShowDetails(contact)}>Show Message</button>
          </li>
        ))}
      </ul>

      {/* Display details for the selected contact */}
      {selectedContact && (
        <div>
          <h3>Pesan</h3>
          <strong>{selectedContact.firstname} {selectedContact.lastname}</strong>
          <br />
          Email: {selectedContact.email}
          <br />
          Phone Number: {selectedContact.phonenumber}
          <br />
          Message: {selectedContact.message}
        </div>
      )}
    </div>
  );
}
