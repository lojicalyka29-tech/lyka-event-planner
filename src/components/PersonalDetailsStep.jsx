function PersonalDetailsStep({ customer, onChange }) {
  return (
    <section className="step">
      <h2>Personal Details</h2>
      <div className="grid two">
        <label>
          Full Name
          <input value={customer.name} onChange={(e) => onChange({ name: e.target.value })} />
        </label>
        <label>
          Contact Number
          <input value={customer.phone} onChange={(e) => onChange({ phone: e.target.value })} />
        </label>
        <label className="full">
          Email Address
          <input type="email" value={customer.email} onChange={(e) => onChange({ email: e.target.value })} />
        </label>
        <label className="full">
          Special Requests
          <textarea
            rows="4"
            value={customer.requests}
            placeholder="Optional notes..."
            onChange={(e) => onChange({ requests: e.target.value })}
          />
        </label>
      </div>
    </section>
  )
}

export default PersonalDetailsStep
