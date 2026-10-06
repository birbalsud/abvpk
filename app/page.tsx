'use client';

import { useState } from 'react';
import {
  ArrowRight, Award, BarChart3, Building2, CheckCircle2, ChevronDown,
  FileCheck2, Landmark, Menu, Scale, ShieldCheck, Users, X, ExternalLink,
  MapPin, Phone, Mail, BookOpen, Globe2
} from 'lucide-react';

const partners = [
  { name: 'CA Abhishek Kumar Jha', role: 'Working Partner · Head Office', location: 'New Delhi', branch: 'Head Office', image: '/images/partners/abhishek.webp' },
  { name: 'CA Kalpana Shailendra Thakur', role: 'Working Partner', location: 'Faridabad', branch: 'Amarnagar Branch', image: '/images/partners/kalpana.webp' },
  { name: 'CA Birbal Suredia', role: 'Working Partner', location: 'Faridabad', branch: 'Sector 86 Branch', image: '/images/partners/birbal.webp' },
  { name: 'CA Vaibhav Shukla', role: 'Working Partner', location: 'Faridabad', branch: 'Sector 30 Branch', image: '/images/partners/vaibhav.webp' },
  { name: 'CA Sanjay Kumar Prasad', role: 'Working Partner', location: 'Faridabad', branch: 'Surajkund Branch', image: '/images/partners/sanjay.webp' },
];

const branches = [
  {
    tag: 'HEAD OFFICE', city: 'New Delhi', partner: 'CA Abhishek Kumar Jha',
    address: '205, Ground Floor, Gali No. 3, Govindpuri, Near Kalkaji Depot, Opp. Kotak Mahindra Bank, New Delhi, Delhi – 110019',
    image: 'https://images.unsplash.com/photo-1666718623429-4d0fe8a1662c?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=82&w=1600',
    maps: 'https://www.google.com/maps/search/?api=1&query=205%20Ground%20Floor%20Gali%20No%203%20Govindpuri%20Near%20Kalkaji%20Depot%20New%20Delhi%20110019'
  },
  {
    tag: 'BRANCH', city: 'Faridabad · Amarnagar', partner: 'CA Kalpana Shailendra Thakur',
    address: 'House No. 4, Block 8, 2nd Floor, Front Side, Batra Hospital, Spring Field Colony, Amarnagar, Faridabad, Haryana – 121003',
    image: 'https://images.unsplash.com/photo-1667646639478-5a5f8a20a0fd?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=82&w=1600',
    maps: 'https://www.google.com/maps/search/?api=1&query=House%20No%204%20Block%208%20Spring%20Field%20Colony%20Amarnagar%20Faridabad%20121003'
  },
  {
    tag: 'BRANCH', city: 'Faridabad · Sector 86', partner: 'CA Birbal Suredia',
    address: 'Office No. 09, Arya Market, Sai Dham Marg, Opp. Euro International School, Sector 86, Faridabad, Haryana – 121002',
    image: 'https://images.unsplash.com/photo-1781578486440-44c592ab1cde?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=82&w=1600',
    maps: 'https://www.google.com/maps/search/?api=1&query=Office%20No%209%20Arya%20Market%20Sai%20Dham%20Marg%20Sector%2086%20Faridabad%20121002'
  },
  {
    tag: 'BRANCH', city: 'Faridabad · Sector 30', partner: 'CA Vaibhav Shukla',
    address: 'Shop No. 2, Basement, Shukla Complex, Dheeraj Nagar, Atmadpur, Sector 30, Faridabad, Haryana – 121003',
    image: 'https://images.unsplash.com/photo-1774853102013-d51ac73f52a5?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=82&w=1600',
    maps: 'https://www.google.com/maps/search/?api=1&query=Shop%20No%202%20Shukla%20Complex%20Dheeraj%20Nagar%20Atmadpur%20Sector%2030%20Faridabad%20121003'
  },
  {
    tag: 'BRANCH', city: 'Faridabad · Surajkund', partner: 'CA Sanjay Kumar Prasad',
    address: 'F-2/275, Shiv Durga Vihar, Lakkarpur, Surajkund, Faridabad, Haryana – 121009',
    image: 'https://images.unsplash.com/photo-1651418476229-504131aea546?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=82&w=1600',
    maps: 'https://www.google.com/maps/search/?api=1&query=F-2%2F275%20Shiv%20Durga%20Vihar%20Lakkarpur%20Surajkund%20Faridabad%20121009'
  },
];

const services = [
  ['Audit & Assurance', 'Statutory, internal and special audit support with a structured, review-driven approach.', FileCheck2],
  ['Income Tax & Advisory', 'Income-tax compliance, tax planning, assessments, notices and advisory for businesses and individuals.', Scale],
  ['GST & Indirect Tax', 'GST registration, returns, reconciliations, notices, advisory and ongoing compliance.', Landmark],
  ['Accounting & MIS', 'Bookkeeping, finalisation, management reporting and decision-ready financial information.', BarChart3],
  ['Corporate & MCA', 'Company, LLP and corporate compliance support from incorporation through recurring filings.', Building2],
  ['Business Advisory', 'Practical support for structuring, controls, finance processes, compliance and growth decisions.', Award],
];

const insights = [
  {
    tag: 'INCOME TAX', date: '14 Sep 2026',
    title: 'ITR-1 to ITR-7 for AY 2026-27 are available for filing.',
    text: 'The Income Tax Department portal currently lists ITR-1 through ITR-7 as available for AY 2026-27 through online and offline utilities.',
    href: 'https://www.incometax.gov.in/iec/foportal/',
    source: 'Income Tax Department'
  },
  {
    tag: 'INCOME TAX', date: '2026',
    title: 'Foreign Assets of Small Taxpayers Disclosure Scheme, 2026.',
    text: 'The official e-Filing portal has enabled the one-time FADS 2026 filing route for eligible taxpayers to disclose specified foreign assets and foreign income.',
    href: 'https://www.incometax.gov.in/iec/foportal/',
    source: 'Income Tax Department'
  },
  {
    tag: 'MCA', date: '16 Feb 2026',
    title: 'New ROC mapping took effect for Haryana and other jurisdictions.',
    text: 'MCA announced updated ROC and RD mappings, including the movement of Haryana-registered companies and LLPs to ROC Haryana.',
    href: 'https://mca.gov.in/content/mca/global/en/home.html',
    source: 'Ministry of Corporate Affairs'
  },
  {
    tag: 'EPFO', date: '2026',
    title: 'EPFO member portal highlights e-Nomination under the EPF Scheme, 2026.',
    text: 'The current EPFO member portal provides access to UAN services and highlights filing of nominations as mandatory during service.',
    href: 'https://unifiedportal-mem.epfindia.gov.in/memberinterface/',
    source: 'Employees’ Provident Fund Organisation'
  },
];

const govtLinks = [
  ['Income Tax e-Filing', 'https://www.incometax.gov.in/iec/foportal/', 'Income-tax returns, forms and taxpayer services'],
  ['GST Portal', 'https://www.gst.gov.in/', 'GST registration, returns and taxpayer services'],
  ['MCA21', 'https://mca.gov.in/content/mca/global/en/home.html', 'Companies, LLP and corporate filings'],
  ['EPFO', 'https://www.epfindia.gov.in/', 'Provident fund and social-security services'],
  ['Udyam Registration', 'https://udyamregistration.gov.in/', 'Official MSME registration portal'],
  ['ICAI', 'https://www.icai.org/', 'Institute of Chartered Accountants of India'],
];

export default function Home() {
  const [open, setOpen] = useState<number | null>(null);
  const [menu, setMenu] = useState(false);

  return <main>
    <header className="nav-wrap">
      <div className="nav container">
        <a href="#home" className="brand"><span className="brand-mark">A</span><span><b>ABVPK</b><small>& ASSOCIATES</small></span></a>
        <nav className={menu ? 'nav-links open' : 'nav-links'}>
          <a href="#about" onClick={() => setMenu(false)}>About</a>
          <a href="#services" onClick={() => setMenu(false)}>Services</a>
          <a href="#partners" onClick={() => setMenu(false)}>Partners</a>
          <a href="#branches" onClick={() => setMenu(false)}>Branches</a>
          <a href="#insights" onClick={() => setMenu(false)}>Insights</a>
          <a className="nav-cta" href="#contact" onClick={() => setMenu(false)}>Enquire <ArrowRight size={16}/></a>
        </nav>
        <button className="menu-btn" onClick={() => setMenu(!menu)} aria-label="Toggle menu">{menu ? <X/> : <Menu/>}</button>
      </div>
    </header>

    <section id="home" className="hero">
      <div className="hero-bg" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">CHARTERED ACCOUNTANTS · NEW DELHI & FARIDABAD</p>
          <h1>One firm.<br/><em>Five partner-led offices.</em></h1>
          <p className="hero-text">ABVPK & Associates is a multi-partner professional firm serving clients through a connected office network across New Delhi and Faridabad.</p>
          <div className="hero-actions"><a className="btn primary" href="#services">Explore services <ArrowRight size={17}/></a><a className="btn ghost" href="#branches">Find a branch</a></div>
          <div className="hero-proof"><span><strong>05</strong> Working partners</span><span><strong>05</strong> Offices</span><span><strong>01</strong> Connected firm</span></div>
        </div>
        <div className="hero-card">
          <div className="hero-card-image" />
          <div className="hero-card-content"><span>PARTNERSHIP-LED SERVICE</span><h3>Professional depth with local accessibility.</h3><p>Each office is associated with a designated partner, keeping senior professional involvement close to the client relationship.</p></div>
        </div>
      </div>
    </section>

    <section id="about" className="section about">
      <div className="container split"><div><p className="eyebrow">ABOUT THE FIRM</p><h2>A partnership structure built for accountability and continuity.</h2></div><div><p className="lead">The supplementary partnership deed records five working partners, a Head Office in New Delhi and four branch offices in Faridabad.</p><p>Our operating model combines partner-level responsibility with a common firm identity, allowing clients to access taxation, audit, GST, accounting and advisory capabilities through the branch closest to them.</p><a className="text-link" href="#partners">Meet the partners <ArrowRight size={16}/></a></div></div>
      <div className="container stat-row"><div><b>01</b><span>Head Office</span></div><div><b>04</b><span>Faridabad branches</span></div><div><b>05</b><span>Working partners</span></div><div><b>01</b><span>Firm-wide identity</span></div></div>
    </section>

    <section id="services" className="section dark"><div className="container"><div className="section-head"><div><p className="eyebrow light">WHAT WE DO</p><h2>Core professional services for businesses and individuals.</h2></div><p>From recurring compliance to audit and advisory assignments, services are organised around practical financial and regulatory needs.</p></div><div className="service-grid">{services.map(([title,desc,Icon],i)=><article className="service" key={i}><span className="service-icon"><Icon size={22}/></span><span className="service-no">0{i+1}</span><h3>{title as string}</h3><p>{desc as string}</p><a href="#contact">Discuss your requirement <ArrowRight size={15}/></a></article>)}</div></div></section>

    <section id="partners" className="section"><div className="container"><div className="section-head"><div><p className="eyebrow">OUR PARTNERS</p><h2>Five partners. Distinct branch responsibility.</h2></div><p>Partner names and branch associations below are taken from the supplementary partnership deed. Residential and other private personal information is not published.</p></div><div className="partner-grid">{partners.map((p,i)=><article className="partner" key={i}><img src={p.image} alt={p.name}/><div className="partner-info"><span>{p.branch}</span><h3>{p.name}</h3><p>{p.role} · {p.location}</p><a href="#contact">Enquire with the firm <ArrowRight size={14}/></a></div></article>)}</div></div></section>

    <section id="branches" className="section branches"><div className="container"><div className="section-head"><div><p className="eyebrow">OUR BRANCH NETWORK</p><h2>Five offices. One connected firm.</h2></div><p>Addresses below follow the supplementary partnership deed. The photographs are illustrative stock photography only and do not represent the actual premises.</p></div><div className="branch-list">{branches.map((b,i)=><article className="branch" key={i}><div className="branch-image"><img src={b.image} alt="Illustrative office photography"/><span>{b.tag}</span></div><div className="branch-body"><p className="branch-city">{b.city}</p><h3>{b.partner}</h3><p>{b.address}</p><div className="branch-actions"><a href={b.maps} target="_blank" rel="noreferrer">Open in Maps <ExternalLink size={14}/></a><button onClick={() => setOpen(open === i ? null : i)}>{open === i ? 'Hide details' : 'Branch details'} <ChevronDown size={15}/></button></div>{open === i && <div className="branch-more"><CheckCircle2 size={16}/> Designated partner · Client management · Quality review · Branch-level compliance</div>}</div></article>)}</div></div></section>

    <section id="insights" className="section insights"><div className="container"><div className="section-head"><div><p className="eyebrow">LATEST INSIGHTS</p><h2>Current regulatory updates, not placeholder blogs.</h2></div><p>Selected from current official government portals and kept separate from branch photography.</p></div><div className="insight-grid">{insights.map((item,i)=><article key={i}><div className="insight-meta"><span>{item.tag}</span><time>{item.date}</time></div><h3>{item.title}</h3><p>{item.text}</p><a href={item.href} target="_blank" rel="noreferrer">Read official update <ExternalLink size={14}/></a><small>Source: {item.source}</small></article>)}</div></div></section>

    <section id="contact" className="contact"><div className="container contact-grid"><div><p className="eyebrow light">START A CONVERSATION</p><h2>Tell us what you need help with.</h2><p>Choose a requirement and use the enquiry form. Branch selection can be added once the firm's public contact details are finalised.</p><div className="contact-points"><div><ShieldCheck size={19}/><span>Professional & confidential</span></div><div><Users size={19}/><span>Partner-led service model</span></div><div><Building2 size={19}/><span>New Delhi & Faridabad network</span></div></div></div><form className="form" onSubmit={(e)=>e.preventDefault()}><input required placeholder="Your name"/><input required placeholder="Email / mobile"/><select defaultValue="" required><option value="" disabled>Select requirement</option><option>Income Tax & Advisory</option><option>GST & Indirect Tax</option><option>Audit & Assurance</option><option>Accounting & MIS</option><option>Corporate & MCA</option><option>Business Advisory</option></select><textarea placeholder="Tell us briefly about your requirement" rows={5}/><button className="btn primary" type="submit">Submit enquiry <ArrowRight size={17}/></button><small className="form-note">Connect this form to the firm's email/CRM endpoint before production launch.</small></form></div></section>

    <section className="govt"><div className="container"><div className="section-head"><div><p className="eyebrow">OFFICIAL PORTALS</p><h2>Useful government & professional links.</h2></div><p>Direct links to official portals commonly used for tax, GST, corporate, PF, MSME and professional compliance.</p></div><div className="govt-grid">{govtLinks.map(([name,href,desc],i)=><a key={i} href={href} target="_blank" rel="noreferrer" className="govt-card"><span className="govt-icon"><Globe2 size={18}/></span><div><b>{name}</b><p>{desc}</p></div><ExternalLink size={15}/></a>)}</div></div></section>

    <footer><div className="container footer-top"><div><a href="#home" className="brand footer-brand"><span className="brand-mark">A</span><span><b>ABVPK</b><small>& ASSOCIATES</small></span></a><p>Chartered Accountants<br/>New Delhi · Faridabad</p><p className="footer-note">Public website content is based on the firm's supplementary partnership deed and current official portal information.</p></div><div><b>Explore</b><a href="#about">About</a><a href="#services">Services</a><a href="#partners">Partners</a><a href="#branches">Branches</a></div><div><b>Services</b><a href="#services">Tax & Advisory</a><a href="#services">GST</a><a href="#services">Audit</a><a href="#services">Accounting</a></div><div><b>Resources</b><a href="#insights">Latest updates</a><a href="#branches">Branch locations</a><a href="#contact">Enquiry</a><a href="https://www.icai.org/" target="_blank" rel="noreferrer">ICAI <ExternalLink size={12}/></a></div></div><div className="container footer-bottom"><span>© 2026 ABVPK & Associates. All rights reserved.</span><span>Firm name is subject to applicable ICAI approval/registration as stated in the supplementary deed.</span></div><div className="container image-credit">Illustrative photography: Unsplash — Pyx Photography, Hemant Kanojiya, Sartori Holdings LLC, FlippingBook, VD Photography and Omkar Jori. Images are not photographs of the firm's premises.</div></footer>
  </main>;
}
