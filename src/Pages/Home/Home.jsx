import './Home.css'

function Home() {
    return (
        <>
        <div className="content-section content-section-rows-2">
            <div className="content-section-text-main text-center">
                <h1><span>Developing <strong>Integrations</strong>,</span> <span>Automating <strong>Workflows</strong>,</span> <span>Building <strong>Solutions</strong>.</span></h1>
                <p>With the power of technology, we live in a world where people can focus on more important tasks by letting machines automate the boring stuff. Let us help you transform your workflows and business processes to make use of technology and free your staff to grow the business.</p>
            </div>

            <div className="form-input">
                <p>Signup for our newsletter for access to resources and information regarding emerging technologies and best practices.</p>
                
                <form id="newsletter-signup-form">
                    <div className="form-group">
                        <label htmlFor="newsletter-signup-email">Email address</label>
                        <input type="email" className="form-control" id="newsletter-signup-email" />
                    </div>

                    <button type="submit" className="btn btn-primary">Signup</button>
                </form>
            </div>
        </div>
        </>
    )
}

export default Home;