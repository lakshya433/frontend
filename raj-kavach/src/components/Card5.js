// Card2.js
import React from 'react';
import Card from './Card';
import './Card5.css'; // Styles specific to Card 2

const Card5 = ({ onClick, selected, special }) => {
  return (
    <Card
      title="Home"
      content={<span>1. Online Shopping Scam Warning: Unrealistic Discounts<br />Beware of online stores offering unrealistically steep discounts. Scammers create fake websites to lure buyers into making payments for products that never arrive. Always verify the legitimacy of online sellers and double-check customer reviews<br /><br />2. Social Media Impersonation Alert: Fake Charity Accounts<br />Stay vigilant on social media platforms. Scammers create fake charity accounts, posing as legitimate organizations during disasters. Verify donation channels directly with the official charity website to ensure your contributions reach those in need.<br /><br />3. Job Scam Advisory: Work-from-Home Frauds<br />Be cautious of "work-from-home" job offers requiring upfront payments or personal information. Scammers exploit job seekers by promising high-paying positions with minimal effort. Research companies and job offers thoroughly before providing any details.<br/><br/><pre><a href="https://sancharsaathi.gov.in/InternationalCall/ReportIntCall.jsp">Report Incoming International Call With Indian Number (RICWIN)</a>| National police helpline number is 112.<br/><a href="https://cybercrime.gov.in/Accept.aspx">National Cyber Crime Reporting Portal</a>                         |  National women helpline number is 181.<br/>                                                              |  Cyber Crime Helpline is 1930. 

      </pre> 
      </span>}
      
      className="card5" // Add specific class for Card 5
      onClick={onClick}
      selected={selected}
    />
  );
};

export default Card5;
