import React from "react";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { IoCloseCircleOutline } from "react-icons/io5";

const Contacts = () => {
  const [activeContact, setActiveContact] = React.useState(null);
  const [showForm, setShowForm] = React.useState(false);

  const contacts = useSelector((store) => store?.contact?.contacts);
  const dipatch = useDispatch();

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleHideForm = () => {
    setShowForm(false);
  };

  return (
    <div className="text-black">
      <Header />
      <h1 className="text-2xl text-bold mb-8">Contacts</h1>
      <button
        className="bg-green-800 rounded-lg text-white p-2 px-4"
        onClick={handleShowForm}
      >
        Create Contact
      </button>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 text-center">
        {contacts?.map((contact, index) => (
          <div
            key={contact?.id}
            className="relative bg-blue-300 p-4 rounded-lg text-xl flex flex-col gap-4"
          >
            <div>
              <span className="font-bold">First Name:</span>{" "}
              {contact?.firstName}
            </div>
            <div>
              <span className="font-bold">Last Name:</span> {contact?.lastName}
            </div>
            <div>
              <span className="font-bold">isActive</span>{" "}
              {contact?.active ? "True" : "False"}
            </div>
            <div className="flex justify-between w-full mt-4 gap-2">
              <button className="bg-blue-900 text-white p-2 w-full rounded-lg">
                Edit
              </button>
              <button className="bg-red-700 text-white p-2 w-full rounded-lg">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
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
          <form onClick={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-4 max-w-[500px] bg-white p-8 rounded-lg shadow-2xl">
              <div className="flex gap-4 items-center">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="bg-gray-200 p-2 rounded-lg"
                />
              </div>
              <div className="flex gap-4 items-center">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="bg-gray-200 p-2 rounded-lg"
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
                      className="mr-2"
                    />
                    Active
                  </label>
                  <label htmlFor="active-false" className="flex items-center">
                    <input
                      type="radio"
                      name="active"
                      id="active-false"
                      value="false"
                      className="mr-2"
                    />
                    Inactive
                  </label>
                </div>
              </div>
              <div className="w-full">
                <button className="bg-green-800 text-white p-2 rounded-lg w-full">
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
