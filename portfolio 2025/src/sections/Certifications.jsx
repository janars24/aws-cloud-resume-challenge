import React from 'react';
import './Certifications.css';

const Certifications = () => {
  const certs = [
    {
      title: "AWS Certified Solutions Architect Associate",
      id: "f192b83527084e879c019127f0500d4c",
      icon: "aws-icon"
    },
    {
      title: "AWS Certified Cloud Practitioner",
      id: "ZGKF3LEKZBV4QP9W",
      icon: "aws-icon"
    },
    {
      title: "OCI 2025 Foundations Associate",
      link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=E2C7810FDE9A950BDBC0447B0D36B487BB37922CE89785769B845528D8169CF7",
      icon: "oci-icon"
    },
    {
      title: "OCI 2025 Certified AI Foundations Associate",
      link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=F6F8718E42D73E63B12ED472CEF807B91089ABA1CDA46FC866C8AA3886A14F24",
      icon: "oci-icon"
    },
    {
      title: "HashiCorp Certified: Terraform Associate (003)",
      id: "0788c483-196e-48ad-b918-4a86a3d952c5",
      icon: "terraform-icon"
    }
  ];

  return (
    <section id="certifications" className="certifications section">
      <div className="container">
        <h2 className="section-title text-gradient">Certifications & Education</h2>
        
        <div className="cert-edu-grid">
          <div className="certifications-container">
            <h3 className="sub-heading">Certifications</h3>
            <div className="cert-grid">
              {certs.map((cert, index) => (
                <div key={index} className="cert-card glass">
                  <div className={`cert-icon ${cert.icon}`}></div>
                  <h4 className="cert-title">
                    {cert.link ? (
                      <a href={cert.link} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'underline'}}>
                        {cert.title}
                      </a>
                    ) : cert.title}
                  </h4>
                  {cert.id && <p className="cert-id">ID: {cert.id}</p>}
                </div>
              ))}
            </div>
          </div>
          
          <div className="education-container">
            <h3 className="sub-heading">Education</h3>
            <div className="edu-card glass">
              <div className="edu-icon">🎓</div>
              <h4 className="edu-degree">Bachelor of Technology (B.Tech) in Aerospace</h4>
              <p className="edu-university">SASTRA Deemed to be University, Thanjavur</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
