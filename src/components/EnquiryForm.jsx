export default function EnquiryForm() {
  return (
    <form className="enquiry-form">
      <h3>Enquiry Form</h3>
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Email" required />
      <textarea placeholder="Your Message" required></textarea>
      <button type="submit">Submit</button>
    </form>
  );
}
