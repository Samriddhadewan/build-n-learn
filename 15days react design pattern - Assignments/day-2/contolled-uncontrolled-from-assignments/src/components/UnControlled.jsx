import { useRef } from "react";

const UnControlled = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const HandleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;

    if (!name) {
      nameRef.current.focus();
      return;
    }
    if (!email.includes("@")) {
      emailRef.current.focus();
      return;
    }
    if (!message) {
      messageRef.curr1ent.focus();
      return;
    }

    console.log("form submitted : ", { name, email, message });
  };

  return (
    <div
      onSubmit={HandleSubmit}
      className="flex items-center justify-center border "
    >
      <form className="flex flex-col w-[300px] border p-4 my-2">
        <input
          ref={nameRef}
          type="text"
          className="border rounded-2xl p-2 my-3"
          placeholder="name"
        />
        <input
          ref={emailRef}
          type="email"
          className="border rounded-2xl p-2 my-3"
          placeholder="email"
        />
        <textarea
          ref={messageRef}
          type="text"
          className="border rounded-2xl p-2 my-3"
          placeholder="message"
        />
        <button
          type="submit"
          className="bg-purple-500 cursor-pointer text-white p-1 rounded-lg"
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default UnControlled;
