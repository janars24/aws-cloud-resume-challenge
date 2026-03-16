import React from 'react';
import './Skills.css';

const Skills = () => {
  const categories = [
    {
      title: "Integration Platforms",
      skills: [
        "Oracle Integration Cloud (OIC)",
        "REST & SOAP integrations",
        "OIC Adapters & Connectors",
        "Orchestration & Data Mapping",
        "Event-driven integrations",
        "Postman",
        "SMTP Servers"
      ]
    },
    {
      title: "Cloud Platforms",
      skills: [
        "AWS (EC2, S3, VPC, ALB, ASG)",
        "AWS (CloudFront, Route 53, IAM)",
        "AWS (Lambda, DynamoDB)",
        "Oracle Cloud Infrastructure (OCI)",
        "OCI (VCN, Compute, Object Storage)",
        "Keycloak (Open-Source IAM)"
      ]
    },
    {
      title: "Networking & Security",
      skills: [
        "VPC / VCN Architecture",
        "Subnets, NAT/IGW",
        "Security Groups & NACLs",
        "IAM & Access Controls",
        "TLS/HTTPS",
        "Secrets Management"
      ]
    }
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title text-gradient">Core Skills</h2>
        
        <div className="skills-grid">
          {categories.map((category, index) => (
            <div key={index} className="skill-card glass">
              <h3 className="skill-category-title">{category.title}</h3>
              <ul className="skill-list">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="skill-item">
                    <span className="skill-bullet"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
