import React from 'react'
import { Link } from 'react-router-dom'

export const Landing = () => (
    <main>
        <div className="landing__signin">
            <p>Keep your team <em>happy and engaged</em></p>
            <p>Automate <em>check-ins</em> with your team in Slack.</p>
            <Link to="/onboard"><p>SIGN IN WITH SLACK</p></Link>
        </div>
        <div className="landing__how">
            <p>Automatically send <em>scheduled messages</em> to your team in <em>Slack</em>!</p>
            <p>IMAGE</p>
            <p>Use our suggested messages, or create your own. Select which team members to send them to.</p>
            <p>Get started in <em>60 seconds</em>!</p>
            <p>IMAGE</p>
        </div>
        <div className="landing__signinbottom">
            <p>Get started with your manager one on ones</p>
            <Link to="/onboard"><a>Sign Up Free</a></Link>
        </div>
    </main>
)