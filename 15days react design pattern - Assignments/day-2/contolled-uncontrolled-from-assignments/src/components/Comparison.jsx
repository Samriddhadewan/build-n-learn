const Comparison = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">
        Controlled vs Uncontrolled Components
      </h1>

      {/* Definitions */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Definitions</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Controlled Components:</strong> Form inputs where React
            state is the single source of truth. Value is controlled via{" "}
            <code>useState</code> or similar hooks.
          </li>
          <li>
            <strong>Uncontrolled Components:</strong> Form inputs where the DOM
            itself holds the state, accessed with <code>ref</code>.
          </li>
        </ul>
      </div>

      {/* Comparison Table */}
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border border-gray-300 w-full text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Aspect</th>
              <th className="border border-gray-300 px-4 py-2">Controlled</th>
              <th className="border border-gray-300 px-4 py-2">Uncontrolled</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Code Style</td>
              <td className="border px-4 py-2">
                Requires <code>useState</code>, explicit event handlers.
              </td>
              <td className="border px-4 py-2">
                Simpler, uses <code>ref</code> to read values.
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Validation</td>
              <td className="border px-4 py-2">
                Easy, validation logic inside <code>onChange</code> or{" "}
                <code>onSubmit</code>.
              </td>
              <td className="border px-4 py-2">
                Harder, must manually read values via <code>ref</code> before
                validation.
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Reset</td>
              <td className="border px-4 py-2">
                Simple: reset state → inputs reset automatically.
              </td>
              <td className="border px-4 py-2">
                Manual: must set <code>ref.current.value</code> to reset.
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Readability</td>
              <td className="border px-4 py-2">
                Clear data flow, predictable.
              </td>
              <td className="border px-4 py-2">
                Less boilerplate, but harder to track changes.
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Complexity</td>
              <td className="border px-4 py-2">
                More boilerplate but scalable.
              </td>
              <td className="border px-4 py-2">
                Simple for small forms, messy for large apps.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Example Snippets */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Code Examples</h2>

        <p className="mb-2 font-medium">Controlled:</p>
        <pre className="bg-gray-900 text-white text-sm p-3 rounded-md overflow-x-auto">
          {`const [name, setName] = useState("");
<input value={name} onChange={(e) => setName(e.target.value)} />`}
        </pre>

        <p className="mt-4 mb-2 font-medium">Uncontrolled:</p>
        <pre className="bg-gray-900 text-white text-sm p-3 rounded-md overflow-x-auto">
          {`const inputRef = useRef();
<input ref={inputRef} />
<button onClick={() => console.log(inputRef.current.value)}>Log</button>`}
        </pre>
      </div>
    </div>
  );
};

export default Comparison;
