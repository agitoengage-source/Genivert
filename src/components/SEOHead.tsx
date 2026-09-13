import React, { useEffect } from 'react';
import { PageRoute } from '../types';

interface SEOHeadProps {
  activeRoute: PageRoute;
}

export const SEOHead: React.FC<SEOHeadProps> = ({ activeRoute }) => {
  useEffect(() => {
    let title = "GENIVERT SYSTEMS LTD | Intelligent Power Infrastructure & Solar Solutions - Uganda";
    let desc = "Genivert Systems Ltd designs, installs, maintains, and manages intelligent electrical and energy infrastructure for universities, hospitals, hotels, and industrial clients across Uganda and East Africa.";

    switch (activeRoute) {
      case 'home':
        title = "GENIVERT SYSTEMS LTD | Powering Institutions. Engineering Reliability.";
        desc = "Leading Uganda electrical engineering company and solar energy provider for schools, hospitals, hotels, data centers, and industrial facilities.";
        break;
      case 'about':
        title = "About GENIVERT SYSTEMS LTD | Institutional Power Infrastructure Engineering";
        desc = "Company profile, mission, ERA licensing, and engineering capabilities of Genivert Systems Ltd in Kampala, Uganda.";
        break;
      case 'solutions':
        title = "Engineering Solutions | Switchgear, Generators, UPS & Power Quality Uganda";
        desc = "Turnkey electrical engineering, heavy generator ATS maintenance, online double conversion UPS, voltage stabilizers, and PFC capacitor banks in Kampala.";
        break;
      case 'solaris':
        title = "AD IMPERIUM SOLARIS | Institutional Hybrid Solar & Battery Storage Uganda";
        desc = "The renewable energy division of Genivert Systems Ltd providing TOPCon hybrid solar microgrids, LiFePO4 batteries, and solar thermal hot water systems.";
        break;
      case 'industries':
        title = "Industries Served | Solar for Schools, Hospitals, Hotels & Banking Uganda";
        desc = "Tailored power infrastructure solutions for universities, referral hospitals, safari lodges, commercial banks, and manufacturing plants.";
        break;
      case 'projects':
        title = "Completed Projects | Institutional Solar & Critical Power Case Studies";
        desc = "Explore completed microgrids, hospital medical UPS installations, and industrial power quality engineering projects across East Africa.";
        break;
      case 'hsqe':
        title = "HSQE Excellence | Zero Harm & High-Voltage Electrical Safety Policy";
        desc = "Health, safety, quality, and environmental protocols compliant with ERA guidelines and ISO 9001 / ISO 45001 engineering standards.";
        break;
      case 'resources':
        title = "Resources & Downloads | Corporate Profile & Solar Feasibility Guide";
        desc = "Download official Genivert Systems company profiles, solar brochures, energy assessment guides, and technical whitepapers.";
        break;
      case 'contact':
        title = "Contact Genivert Systems Ltd | Kampala, Uganda Engineering Desk";
        desc = "Contact Genivert Systems Ltd in Kampala, Uganda via email genivertsystems@gmail.com or phone for site audits and quotation requests.";
        break;
    }

    document.title = title;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', desc);
  }, [activeRoute]);

  return null;
};
