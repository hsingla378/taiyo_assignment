import React from "react";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { IoCloseCircleOutline } from "react-icons/io5";
import toast from "react-hot-toast";

// Define the structure of a contact object
interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  active: boolean;
}

// Define the initial form state type
interface FormData {
  firstName: string;
  lastName: string;
  active: boolean;
}

const Contacts: React.FC = () => {
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
    (store: any) => store?.contact?.contacts
  ) as Contact[];
  const dispatch = useDispatch();

  // Handle adding a new contact
  const handleAddContact = () => {
    if (!formData.firstName || !formData.lastName) {
      alert("Please fill in all fields");
      return;
    }

    dispatch({
      type: "contact/addContact",
      payload: {
        id: contacts?.length + 1,
        ...formData,
      },
    });

    // Reset the form data
    setFormData({
      firstName: "",
      lastName: "",
      active: false,
    });

    toast.success("Contact added successfully");
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

  // Show the contact creation form
  const handleShowForm = () => {
    setShowForm(true);
  };

  // Hide the contact creation form
  const handleHideForm = () => {
    setShowForm(false);
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
    <div className="text-black">
      <Header />
      <h1 className="text-2xl font-bold mb-8">Contacts</h1>
      <button
        className="bg-green-800 rounded-lg text-white p-2 px-4"
        onClick={handleShowForm}
      >
        Create Contact
      </button>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 text-center">
        {contacts?.map((contact) => (
          <div
            key={contact.id}
            className="relative bg-blue-300 p-4 rounded-lg text-xl flex flex-col gap-4"
          >
            <div>
              <span className="font-bold">First Name:</span> {contact.firstName}
            </div>
            <div>
              <span className="font-bold">Last Name:</span> {contact.lastName}
            </div>
            <div>
              <span className="font-bold">isActive:</span>{" "}
              {contact.active ? "True" : "False"}
            </div>
            <div className="flex justify-between w-full mt-4 gap-2">
              <button className="bg-blue-900 text-white p-2 w-full rounded-lg">
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
        ))}
      </div>

      {/* Contact creation form */}
      <div
        className={`h-screen w-screen absolute top-0 left-0 bottom-0 right-0 justify-center items-center ${
          showForm ? "flex" : "hidden"
        }`}
      >
        <div className="relative">
          <button
            className="text-black absolute right-2 top-2 text-xl"
            onClick={handleHideForm}
          >
            <IoCloseCircleOutline />
          </button>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-4 max-w-[500px] bg-white p-8 rounded-lg shadow-2xl">
              <div className="flex gap-4 items-center">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="bg-gray-200 p-2 rounded-lg"
                  onChange={handleFormData}
                  value={formData.firstName}
                />
              </div>
              <div className="flex gap-4 items-center">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="bg-gray-200 p-2 rounded-lg"
                  onChange={handleFormData}
                  value={formData.lastName}
                />
              </div>
              <div className="flex gap-12 items-center my-4">
                <label>Status</label>
                <div className="flex flex-col gap-2">
                  <label htmlFor="active-true" className="flex items-center">
                    <input
                      type="radio"
                      name="active"
                      id="active-true"
                      value="true"
                      checked={formData?.active === true}
                      onChange={handleFormData}
                    />
                    Active
                  </label>
                  <label htmlFor="active-false" className="flex items-center">
                    <input
                      type="radio"
                      name="active"
                      id="active-false"
                      value="false"
                      checked={formData?.active === false}
                      onChange={handleFormData}
                    />
                    Inactive
                  </label>
                </div>
              </div>
              <div className="w-full">
                <button
                  className="bg-green-800 text-white p-2 rounded-lg w-full"
                  onClick={handleAddContact}
                >
                  Save Contact
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
