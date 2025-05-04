export default function ContactMap() {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-4 overflow-hidden">
        <div className="rounded-xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.9253595647847!2d77.43895426090056!3d23.28216167890504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c69cce0d44e81%3A0x5ea670d5840a116b!2sThesis%20Logix!5e0!3m2!1sen!2sin!4v1736077527327!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg shadow-inner"
            title="ThesisLogix Office Location"
          ></iframe>
        </div>
      </div>
    )
  }
  