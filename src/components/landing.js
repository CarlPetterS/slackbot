import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/landing-page.css'

export const Landing = () => (
    <main>
        <div className="landing__signin">
            <h1>Keep your team <em>happy and engaged</em></h1>
            <p>Automate <em>check-ins</em> with<br/>your team in Slack.</p>
            <Link to="/onboard">
                <img alt="Add to Slack" height="60" width="260"
                 src="https://platform.slack-edge.com/img/sign_in_with_slack.png"
                 srcSet="https://platform.slack-edge.com/img/sign_in_with_slack.png 1x, https://platform.slack-edge.com/img/sign_in_with_slack@2x.png 2x" />
            </Link>
        </div>
        <div className="landing__how">
            <h1>Automatically send <em>scheduled messages</em> to your team in <em>Slack</em>!</h1>
            <div className="how__slackimage">SLACKIMAGE</div>
            <p>Use our suggested messages, or create your own. Select which team members to send them to.</p>
            <p>Get started in <em>60 seconds</em>!</p>
            <div className="how__onboardimage">ONBOARDIMAGE</div>
        </div>
        <div className="landing__signinbottom">
            <h1>Get started with your<br/>manager one on ones</h1>
            <Link to="/onboard">Sign Up Free</Link>
        </div>
    </main>
)
