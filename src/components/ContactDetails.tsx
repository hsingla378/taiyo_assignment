import React from "react";
import { Contact } from "../utils/types";

// Define the structure of the props
type ContactDetailsProps = {
  contact: Contact;
  handleShowForm: (contact: Contact) => void;
  handleDeleteContact: (id: number) => void;
};

const ContactDetails: React.FC<ContactDetailsProps> = ({
  contact,
  handleShowForm,
  handleDeleteContact,
}) => {
  return (
    <div
      key={contact?.id}
      className="relative bg-blue-300 p-4 rounded-lg text-xl flex flex-col gap-4"
    >
      <div>
        <span className="font-bold">First Name:</span> {contact?.firstName}
      </div>
      <div>
        <span className="font-bold">Last Name:</span> {contact?.lastName}
      </div>
      <div>
        <span className="font-bold">isActive:</span>{" "}
        {contact?.active ? "True" : "False"}
      </div>
      <div className="flex justify-between w-full mt-4 gap-2">
        <button
          className="bg-blue-900 text-white p-2 w-full rounded-lg"
          onClick={() => handleShowForm(contact)} // Open form in edit mode
        >
          Edit
        </button>
        <button
          className="bg-red-700 text-white p-2 w-full rounded-lg"
          onClick={() => handleDeleteContact(contact?.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ContactDetails;
