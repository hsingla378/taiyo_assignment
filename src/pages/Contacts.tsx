import React from "react";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";

const Contacts = () => {
  const [activeContact, setActiveContact] = React.useState(null);
  const contacts = useSelector((store) => store?.contact?.contacts);
  const dipatch = useDispatch();

  console.log("contacts", contacts);

  return (
    <div className="text-black">
      <Header />
      <h1 className="text-2xl text-bold mb-8">Contacts</h1>
      <button className="bg-green-800 rounded-lg text-white p-2 px-4">
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
    </div>
  );
};

export default Contacts;
