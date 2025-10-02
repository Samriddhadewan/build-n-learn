import { useRef, useState } from "react";

const Controlled = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name) {
      nameRef.current.focus();
      return;
    }
    if (!form.email.includes("@")) {
      emailRef.current.focus();
      return;
    }
    if (!form.message) {
      messageRef.current.focus();
      return;
    }

    console.log("form submitted :", form);
  };

  return (
    <div className="flex items-center  justify-center border ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-[300px] border p-4 my-2"
      >
        <input
          ref={nameRef}
          type="text"
          className="border rounded-2xl p-2 my-3"
          placeholder="name"
          onChange={handleChange}
          value={form.name}
          name="name"
        />
        <input
          ref={emailRef}
          type="email"
          className="border rounded-2xl p-2 my-3"
          placeholder="email"
          onChange={handleChange}
          value={form.email}
          name="email"
        />
        <textarea
          ref={messageRef}
          type="text"
          className="border rounded-2xl p-2 my-3"
          placeholder="message"
          onChange={handleChange}
          value={form.message}
          name="message"
        />
        <button
          type="submit"
          className="cursor-pointer bg-purple-500 text-white p-1 rounded-lg"
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default Controlled;
