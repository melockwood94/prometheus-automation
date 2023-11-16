import { Link } from 'react-router-dom';
import './Home.css'
import MailboxIcon from '../../assets/MailboxIcon';

function Home() {
    return (
        <>
        <div className="content-block content-block--vertical">
            <section className="content-block__text-block text-center">
                <h1>Developing <span className='text-primary'><strong>Integrations</strong></span>,</h1>
                <h1>Automating <span className='text-primary'><strong>Workflows</strong></span>, and</h1>
                <h1>Building <span className='text-primary'><strong>Solutions</strong></span>.</h1>
            </section>

            <section className="content-block__text-block text-center sz-m">
                <p>With the power of technology, we live in a world where people can focus on more important tasks by letting machines automate the boring stuff. Let us help you transform your workflows and business processes to make use of technology and free your staff to grow the business.</p>
            </section>

            <section className='content-block__action'>
                <Link to="/contact" className='btn btn-outline-primary'>Let's get in touch!</Link>
            </section>
        </div>

        <div className="content-block content-block--horizontal">
            {/* Todo: Build out a content block for products, offerings, or something related. */}
        </div>

        <div className="content-block content-block--horizontal">
            <section className='content-block__icon'>
                <MailboxIcon />
            </section>

            <section className='content-block__form sz-ss'>
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
        </div>
        </>
    )
}

export default Home;