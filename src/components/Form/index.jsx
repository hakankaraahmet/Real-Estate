import React from "react";

const Form = () => {
  return (
    <form action="" className="w-full max-w-2xl">
      <div className="flex flex-col mb-6 md:flex-row">
        <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
          <label className="block mb-2 text-sm font-bold tracking-wider text-gray-700 uppercase">
            First Name
          </label>
          <input
            className="block w-full px-4 py-3 mb-3 text-gray-700 border border-green-500 rounded outline-none "
            type="text"
            placeholder="Jane"
          />
          <p className="text-sm italic text-green-500 ">
            Please Fill Out This Field
          </p>
        </div>
        <div className="w-full px-3 md:w-1/2">
          <label className="block mb-2 text-sm font-bold tracking-wider text-gray-700 uppercase">
            Last Name
          </label>
          <input
            className="block w-full px-4 py-3 text-gray-700 border border-green-500 rounded outline-none "
            type="text"
            placeholder="Doe"
          />
        </div>
      </div>
      <div className="flex mb-6">
        <div className="w-full px-3">
          <label className="block mb-2 text-sm font-bold tracking-wider text-gray-700 uppercase">
            Email
          </label>
          <input
            className="block w-full px-4 py-3 mb-3 text-gray-700 border border-green-500 rounded outline-none "
            type="email"
            placeholder="example@example.com"
          />
          <p className="text-sm italic text-gray-700 ">
            Please Fill Out This Field
          </p>
        </div>
      </div>
      <div className="flex mb-6">
        <div className="w-full px-3">
          <label className="block mb-2 text-sm font-bold tracking-wider text-gray-700 uppercase">
            Message
          </label>
          <textarea
            className="block w-full h-48 px-4 py-3 mb-3 text-gray-700 border border-green-500 rounded outline-none appearance-none resize-none"
            type="text"
          />
          <p className="text-sm italic text-gray-700 ">
            Please Fill Out This Field
          </p>
        </div>
      </div>
      <div className="md:flex md:items-center">
        <div className="w-full px-3 ">
          <button className="px-4 py-2 text-white bg-green-400 rounded shadow">
            Send
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
