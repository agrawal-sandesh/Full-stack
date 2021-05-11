import React from "react";
class Contact extends React.Component{
    render(){
        return(
            <React.Fragment>
            <h2 className="text-info">Get in touch with us</h2><br/>
            <h3>We're open from 9:00 AM to 9:00 PM all 7 days!</h3><br/>
            <h4>Or contact us at:</h4><br/>
            <div>
                <ul>
                <li>Email: sandesh2509@gmail.com</li>
                <li>Patron Help: +91 77730-98001</li>
                </ul>
            </div>
            </React.Fragment>
        )
    }
}
export default Contact
