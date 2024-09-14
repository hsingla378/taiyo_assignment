import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

type ContactFormProps = {
  showForm: boolean;
  handleHideForm: () => void;
  handleFormData: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddContact: () => void;
  formData: {
    firstName: string;
    lastName: string;
    active: boolean;
  };
  editMode: boolean;
};

const ContactForm: React.FC<ContactFormProps> = ({
  showForm,
  handleHideForm,
  handleFormData,
  handleAddContact,
  formData,
  editMode,
}) => {
  return (
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
                {editMode ? "Save Editted Contact" : "Save Contact"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
