import './NewsletterSignup.css';

function NewsletterSignup() {
    return (
        <>
        <section className='sz-ss'>
            <h2>Get Notified</h2>
            <p>We'll keep you up to date on new and emerging technologies and how to make them work for you.</p>
            <form action="">
                <div className="input-group">
                    <input type="email" className='form-control' placeholder='Email address' required />
                    <div className="input-group-append">
                        <button type='submit' className='btn btn-primary'>Sign Up</button>
                    </div>
                </div>
            </form>
        </section>
        </>
    )
}

export default NewsletterSignup;