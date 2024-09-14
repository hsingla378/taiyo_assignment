import React from "react";
import ContactDetails from "./ContactDetails";
import { IoMdCloseCircle } from "react-icons/io";

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
    <div>
      {contacts.length ? (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4 text-center">
          {contacts?.map((contact) => (
            <ContactDetails
              key={contact.id}
              contact={contact}
              handleShowForm={handleShowForm}
              handleDeleteContact={handleDeleteContact}
            />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-between gap-4 border p-4 rounded-lg border-blue-500 max-w-96 m-auto">
          <div>
            <IoMdCloseCircle className="text-5xl" />
          </div>
          <div className="text-left text-lg flex flex-col gap-2">
            <p>No Contacts Found</p>
            <p>Please add contact from Create Contact Button</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactList;
