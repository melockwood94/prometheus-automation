import "./Contact.css";

function Contact() {
    return (
        <>
        <div className="card contact-form">
            <div className="card-body">
                <h5 className="card-title">Contact Us</h5>
                <p className="card-text">Let us know how we can help.</p>
                <form action="">
                    <div className="form-group">
                        <label htmlFor="contact-name">Name</label>
                        <input type="text" id="contact-name" className="form-control" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contact-email">Email address</label>
                        <input type="email" id="contact-email" className="form-control" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contact-notes">What would you like to chat about?</label>
                        <textarea name="contact-notes" id="contact-notes" cols="30" rows="10" className="form-control"></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary contact-form__submit">Send</button>
                </form>
            </div>
        </div>
        </>
    )
}

export default Contact;