import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: "Oracle India Private Limited",
      role: "Analyst - Customer Data",
      duration: "April 2024 - Feb 2026",
      responsibilities: [
        "Designed and developed integrations using Oracle Integration Cloud to connect cloud and on-premise enterprise applications.",
        "Built and configured REST and SOAP based integrations to enable secure data exchange between systems.",
        "Developed scheduled, event-driven, and real-time integrations using OIC orchestration capabilities.",
        "Implemented data mappings, transformations, and routing logic to support business workflows and system integrations.",
        "Configured and managed connectors/adapters for ERP, CRM, databases, and third-party APIs.",
        "Troubleshooted integration failures, payload issues, and connectivity errors using OIC monitoring.",
        "Implemented secure integrations using OAuth, Basic Auth, and certificate-based security.",
        "Collaborated with functional teams and solution architects to gather requirements and design scalable solutions."
      ]
    },
    {
      company: "Adecco India Private Limited",
      client: "Oracle India Private Limited",
      role: "Business Analyst I",
      duration: "June 2023 - March 2024",
      responsibilities: [
        "Assisted in testing, debugging, and deploying integration flows across multiple environments.",
        "Created and maintained technical documentation, integration specifications, and operational runbooks for client environments.",
        "Monitored integration runs and analyzed logs to troubleshoot errors and failures.",
        "Supported the development of scheduled and real-time integration flows for diverse business processes."
      ]
    },
    {
      company: "Maayasthra",
      role: "Cloud Engineer",
      duration: "June 2022 - June 2023",
      responsibilities: [
        "Designed, deployed, and maintained cloud infrastructure on AWS and OCI to support scalable applications.",
        "Implemented IaC using Terraform to automate provisioning of compute, networking, and storage.",
        "Containerized and deployed applications using Docker and Kubernetes to enable scalable microservices.",
        "Built and maintained CI/CD pipelines using Git-based workflows and automation tools.",
        "Designed secure cloud networking architectures including VPC/VCN design, subnets, routing, and load balancing.",
        "Configured IAM roles, policies, and access controls to enforce lowest-privilege access."
      ]
    },
    {
      company: "Oracle India Private Ltd",
      role: "Analyst - Global Customer Data",
      duration: "Sep 2021 - May 2022",
      responsibilities: [
        "Worked with OIC adapters and connectors to integrate SaaS applications and external APIs.",
        "Assisted in testing and deploying integrations across development and testing environments.",
        "Documented integration workflows, configurations, and troubleshooting steps.",
        "Collaborated with senior developers and functional teams to implement integration solutions."
      ]
    }
  ];

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <h2 className="section-title text-gradient">Work Experience</h2>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content glass">
                <div className="timeline-header">
                  <h3 className="timeline-role">{exp.role}</h3>
                  <span className="timeline-duration text-gradient-alt">{exp.duration}</span>
                </div>
                <h4 className="timeline-company">
                  {exp.company} {exp.client && <span className="timeline-client">| Client: {exp.client}</span>}
                </h4>
                <ul className="timeline-responsibilities">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
