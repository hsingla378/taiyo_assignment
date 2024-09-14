import React from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";
import Sidebar from "../components/Sidebar";
import { AppDispatch, RootState } from "../utils/store";

// Define the structure of a contact object
type Contact = {
  id: number;
  firstName: string;
  lastName: string;
  active: boolean;
};

// Define the initial form state type
interface FormData {
  firstName: string;
  lastName: string;
  active: boolean;
}

const Contacts: React.FC = () => {
  const [editMode, setEditMode] = React.useState(false);
  const [activeContact, setActiveContact] = React.useState<Contact | null>(
    null
  );
  const [showForm, setShowForm] = React.useState(false);
  const [formData, setFormData] = React.useState<FormData>({
    firstName: "",
    lastName: "",
    active: true,
  });

  // Use selectors and dispatch from Redux
  const contacts = useSelector(
    (store: RootState) => store?.contact?.contacts
  ) as Contact[];
  const dispatch: AppDispatch = useDispatch();

  // Handle adding a new contact
  const handleAddContact = () => {
    if (!formData.firstName || !formData.lastName) {
      alert("Please fill in all fields");
      return;
    }

    if (editMode && activeContact) {
      // Dispatch update contact action
      dispatch({
        type: "contact/updateContact",
        payload: {
          ...activeContact,
          ...formData,
        },
      });
      toast.success("Contact updated successfully");
    } else {
      // Dispatch add contact action
      dispatch({
        type: "contact/addContact",
        payload: {
          id: contacts?.length + 1,
          ...formData,
        },
      });
      toast.success("Contact added successfully");
    }

    // Reset the form and hide popup
    setFormData({
      firstName: "",
      lastName: "",
      active: false,
    });
    setShowForm(false);
    setEditMode(false);
    setActiveContact(null);
  };

  // Handle form data change events
  const handleFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;

    // Convert the value to boolean if the input is a radio button for 'active'
    let newValue: string | boolean = value;
    if (type === "radio" && name === "active") {
      newValue = value === "true"; // Convert to boolean
    }

    // Update the form data
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  // Show the contact creation or edit form
  const handleShowForm = (contact?: Contact) => {
    if (contact) {
      setEditMode(true);
      setActiveContact(contact);
      setFormData({
        firstName: contact.firstName,
        lastName: contact.lastName,
        active: contact.active,
      });
    } else {
      setEditMode(false);
      setFormData({
        firstName: "",
        lastName: "",
        active: true,
      });
    }
    setShowForm(true);
  };

  // Hide the contact form
  const handleHideForm = () => {
    setShowForm(false);
    setEditMode(false);
    setActiveContact(null);
  };

  // Handle deleting a contact
  const handleDeleteContact = (id: number) => {
    dispatch({
      type: "contact/deleteContact",
      payload: id,
    });
    toast.success("Contact deleted successfully");
  };

  return (
    <div className="text-black grid md:grid-cols-12">
      <Sidebar className="md:col-span-2 md:h-[100vh] md:fixed md:max-w-[300px]" />
      <div className="md:col-span-10 p-6 md:p-10 md:ml-[300px] md:w-full">
        <div className="w-full flex items-center justify-center mb-8">
          <button
            className="bg-green-800 rounded-lg text-white p-2 px-4"
            onClick={() => handleShowForm()}
          >
            Create Contact
          </button>
        </div>
        <ContactList
          contacts={contacts}
          handleShowForm={handleShowForm}
          handleDeleteContact={handleDeleteContact}
        />
        {/* Contact creation/edit form */}
        <ContactForm
          showForm={showForm}
          handleHideForm={handleHideForm}
          handleFormData={handleFormData}
          handleAddContact={handleAddContact}
          editMode={editMode}
          formData={formData}
        />
      </div>
    </div>
  );
};

export default Contacts;
