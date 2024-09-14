import React from "react";
import ContactDetails from "./ContactDetails";

// Define the structure of a contact object
type Contact = {
  id: number;
  firstName: string;
  lastName: string;
  active: boolean;
};

// Define the structure of the props
type ContactListProps = {
  contacts: Contact[];
  handleShowForm: (contact: Contact) => void;
  handleDeleteContact: (id: number) => void;
};

const ContactList: React.FC<ContactListProps> = ({
  contacts,
  handleShowForm,
  handleDeleteContact,
}) => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 text-center">
      {contacts?.map((contact) => (
        <ContactDetails
          key={contact.id}
          contact={contact}
          handleShowForm={handleShowForm}
          handleDeleteContact={handleDeleteContact}
        />
      ))}
    </div>
  );
};

export default ContactList;
