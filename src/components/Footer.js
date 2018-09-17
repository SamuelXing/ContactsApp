import React from 'react';
import { Button } from 'react-bootstrap';

const Footer = () => (
    <div className = "footer">
        <p>Copyright@2018 
            <Button href="https://github.com/SamuelXing" bsStyle = "link" bsSize = "large">
            SamuelXing
            </Button>
        </p>
    </div>
);

export default Footer;