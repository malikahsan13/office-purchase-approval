import "./App.css";
import logo from "./cs-logo.jpg";

function App() {
  return (
    <div className="container">

      {/* PRINT HEADER */}
      <div className="print-header">
        <img src={logo} alt="CARESOFT Logo" className="logo" />
        <h2>CARESOFT</h2>
        <p>Office Purchase & Approval Request Form</p>
      </div>

      {/* FORM */}
      <div className="form">
        <label>Requester Name</label>
        <input type="text" />
        <div className="print-line"></div>

        <label>Department</label>
        <select>
          <option></option>
          <option>Admin</option>
          <option>Finance</option>
          <option>HR</option>
          <option>IT</option>
          <option>Operations</option>
        </select>
        <div className="print-line"></div>

        <label>Item / Service Required</label>
        <input type="text" />
        <div className="print-line"></div>

        <label>Purpose / Justification</label>
        <textarea />
        <div className="print-line large"></div>

        <label>Estimated Amount</label>
        <input type="text" />
        <div className="print-line"></div>


        <label>Urgency Level</label>
        <select>
          <option></option>
          <option>Low</option>
          <option>Medium</option>
          <option>High (Immediate)</option>
        </select>
        <div className="print-line"></div>

        <label>Preferred Purchase Date</label>
        <input type="date" />
        <div className="print-line"></div>

        <label>Additional Notes</label>
        <textarea />
        <div className="print-line large"></div>
      </div>

      {/* SIGNATURE SECTION (PRINT ONLY) */}
      <div className="signature-section">
        <div>
          <p>Requested By</p>
          <div className="line"></div>
          <p>Date</p>
        </div>

        <div>
          <p>Approved By (Manager)</p>
          <div className="line"></div>
          <p>Date</p>
        </div>
      </div>

      {/* PRINT BUTTON ONLY */}
      <div className="no-print">
        <button onClick={() => window.print()}>🖨 Print Form</button>
      </div>

    </div>
  );
}

export default App;