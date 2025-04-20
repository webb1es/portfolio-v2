"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: ''
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    description: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const projectTypes = [
    { value: '', label: 'Select Project Type' },
    { value: 'web-application', label: 'Custom Web Application Development' },
    { value: 'frontend', label: 'Frontend Architecture & Development' },
    { value: 'consultation', label: 'Technical Consultation & Code Reviews' },
    { value: 'performance', label: 'Application Performance Optimization' },
    { value: 'custom', label: 'Custom Project' }
  ];

  const budgetRanges = [
    { value: '', label: 'Select Budget Range (Optional)' },
    { value: 'under-5k', label: 'Under $5,000' },
    { value: '5k-10k', label: 'Between $5,000 - $10,000' },
    { value: '10k-25k', label: 'Between $10,000 - $25,000' },
    { value: '25k-50k', label: 'Between $25,000 - $50,000' },
    { value: '50k-plus', label: 'Over $50,000' },
    { value: 'not-sure', label: 'Not sure yet' }
  ];

  const timelineOptions = [
    { value: '', label: 'Select Timeline (Optional)' },
    { value: 'asap', label: 'As soon as possible' },
    { value: '1-month', label: 'Within 1 month' },
    { value: '3-months', label: 'Within 3 months' },
    { value: 'flexible', label: 'Flexible / Not sure yet' }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...formErrors };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
      valid = false;
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Project description is required';
      valid = false;
    }

    setFormErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    try {
      // In a real app, you'd send the form data to your backend or a service like Formspree
      // await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      
      // Simulate network request
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        description: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-surface p-8 rounded-lg border border-border shadow-lg">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-gradient rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold mb-4">Message Received!</h1>
              <p className="text-foreground-secondary mb-8">Thank you for reaching out. I'll get back to you within 24 hours.</p>
              
              <div className="space-y-4">
                <p>In the meantime, you might want to:</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/work" className="px-6 py-3 bg-surface hover:bg-surface-hover border border-border rounded-md transition duration-200 text-center">
                    Browse My Work
                  </Link>
                  <Link href="/blog" className="px-6 py-3 bg-surface hover:bg-surface-hover border border-border rounded-md transition duration-200 text-center">
                    Read My Articles
                  </Link>
                </div>
                <div className="pt-4">
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="text-accent-primary hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Let's Work Together</h1>
            <p className="text-xl text-foreground-secondary text-center mb-12">
              Have a project in mind? I'm currently available for new opportunities.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Form */}
              <div className="lg:col-span-2 bg-surface p-8 rounded-lg border border-border">
                <h2 className="text-2xl font-bold mb-6">Contact Form</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name <span className="text-error">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border ${formErrors.name ? 'border-error' : 'border-border'} rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent-primary`}
                        placeholder="Your name"
                      />
                      {formErrors.name && <p className="mt-1 text-sm text-error">{formErrors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email <span className="text-error">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border ${formErrors.email ? 'border-error' : 'border-border'} rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent-primary`}
                        placeholder="your.email@example.com"
                      />
                      {formErrors.email && <p className="mt-1 text-sm text-error">{formErrors.email}</p>}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent-primary"
                      placeholder="Your company or organization"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent-primary"
                    >
                      {projectTypes.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent-primary"
                      >
                        {budgetRanges.map(option => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium mb-2">
                        Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent-primary"
                      >
                        {timelineOptions.map(option => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium mb-2">
                      Project Description <span className="text-error">*</span>
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-4 py-2 border ${formErrors.description ? 'border-error' : 'border-border'} rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent-primary`}
                      placeholder="Tell me about your project, goals, and any specific requirements..."
                    ></textarea>
                    {formErrors.description && <p className="mt-1 text-sm text-error">{formErrors.description}</p>}
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary-gradient text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity disabled:opacity-70 flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : 'Send Message'}
                  </button>
                </form>
              </div>
              
              {/* Contact Details */}
              <div className="bg-surface p-8 rounded-lg border border-border">
                <h2 className="text-2xl font-bold mb-6">Contact Details</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Email Me Directly</h3>
                    <a href="mailto:contact@example.com" className="text-accent-primary hover:underline flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      contact@example.com
                    </a>
                    <p className="text-foreground-secondary text-sm mt-1">I typically respond within 24 hours</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Schedule a Call</h3>
                    <Link 
                      href="#booking"
                      className="inline-flex items-center bg-transparent border border-accent-primary text-foreground px-4 py-2 rounded-md font-medium hover:bg-accent-primary/10 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                      </svg>
                      Book a 30-min Consultation
                    </Link>
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <h3 className="text-lg font-semibold mb-2">Current Availability</h3>
                    <div className="flex items-center">
                      <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                      <span>Available for new projects</span>
                    </div>
                    <p className="text-foreground-secondary text-sm mt-1">Currently accepting new projects starting June 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking System */}
      <div id="booking" className="py-16 bg-surface-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Schedule a Consultation</h2>
            <p className="text-foreground-secondary mb-8">
              Book a 30-minute video call to discuss your project and how I can help.
            </p>
            
            <div className="bg-surface p-8 rounded-lg border border-border">
              <p className="mb-4">
                Use the calendar below to find a time that works for you. Before booking, please be prepared to share:
              </p>
              <ul className="list-disc pl-5 mb-6 text-left">
                <li>Brief description of your project</li>
                <li>Your timeline and budget expectations</li>
                <li>Any specific technologies or requirements</li>
              </ul>
              
              {/* Cal.com embed placeholder */}
              <div className="border-2 border-dashed border-border rounded-lg p-10 flex flex-col items-center justify-center">
                <p className="text-foreground-secondary mb-4">Booking Calendar Embed</p>
                <p className="text-sm text-foreground-secondary mb-4">(Cal.com or similar scheduling tool would be embedded here)</p>
                <button className="bg-primary-gradient text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity">
                  Open Scheduling Calendar
                </button>
              </div>
              
              <div className="mt-6 text-sm text-foreground-secondary">
                <p>After booking, you'll receive a confirmation email with the meeting link and a calendar invitation.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About/Credentials */}
      <div className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">About Me</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-1">
                <div className="bg-surface p-4 rounded-lg border border-border mb-6">
                  <div className="aspect-square rounded-lg bg-surface-secondary mb-4"></div>
                  <h3 className="text-xl font-bold">Your Name</h3>
                  <p className="text-foreground-secondary">Senior Software Engineer</p>
                </div>
                
                <div className="bg-surface p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-bold mb-4">Certifications & Education</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                      <div>
                        <span className="font-medium">AWS Certified Solutions Architect</span>
                        <p className="text-sm text-foreground-secondary">Amazon Web Services, 2022</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                      </svg>
                      <div>
                        <span className="font-medium">B.S. Computer Science</span>
                        <p className="text-sm text-foreground-secondary">University of Technology, 2018</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="md:col-span-2">
                <div className="bg-surface p-6 rounded-lg border border-border mb-6">
                  <h3 className="text-xl font-bold mb-4">Professional Background</h3>
                  <p className="mb-4">
                    I'm a senior software engineer with over 8 years of experience creating high-performance web applications that solve real business problems. My focus is on delivering measurable results for clients through clean, maintainable code and thoughtful architecture decisions.                    
                  </p>
                  <p>
                    Throughout my career, I've specialized in helping businesses optimize their digital presence, automate workflows, and create customer-focused applications that drive growth. I pride myself on clear communication, reliable delivery, and building solutions that provide tangible ROI.
                  </p>
                </div>
                
                <div className="bg-surface p-6 rounded-lg border border-border mb-6">
                  <h3 className="text-xl font-bold mb-4">Areas of Expertise</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Frontend Development</h4>
                      <ul className="list-disc list-inside text-foreground-secondary space-y-1">
                        <li>React & Next.js architecture</li>
                        <li>Modern JavaScript (ES6+) & TypeScript</li>
                        <li>Performance optimization</li>
                        <li>Responsive design with Tailwind CSS</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Backend Development</h4>
                      <ul className="list-disc list-inside text-foreground-secondary space-y-1">
                        <li>Node.js API development</li>
                        <li>Database design & optimization</li>
                        <li>Authentication & authorization</li>
                        <li>Serverless architecture</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-surface p-6 rounded-lg border border-border">
                  <h3 className="text-xl font-bold mb-4">My Work Approach</h3>
                  <div className="space-y-4">
                    <p>
                      I believe in a collaborative, transparent approach to development. Every project begins with a thorough understanding of your business goals and user needs, which guides all technical decisions.                      
                    </p>
                    <p>
                      My development process emphasizes clear communication, regular updates, and adaptability. I'm not just building features—I'm solving business problems and creating value through technology.                      
                    </p>
                    <p>
                      When you work with me, you get more than just a developer. You get a technical partner invested in your success who will guide you through technical decisions with clarity and focus on delivering measurable results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-surface-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              {/* FAQ Item */}
              <div className="bg-surface p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">What is your typical engagement process?</h3>
                <p className="text-foreground-secondary">
                  My process typically involves 4 main phases: initial consultation and requirements gathering, proposal and planning, development with regular updates and reviews, and finally, deployment and support. This ensures clear expectations, collaborative decision-making, and successful outcomes.
                </p>
              </div>
              
              {/* FAQ Item */}
              <div className="bg-surface p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">How do you handle payments?</h3>
                <p className="text-foreground-secondary">
                  For most projects, I use a milestone-based payment structure, with 30% due upfront, 30% at the midpoint, and 40% upon completion. For longer engagements, monthly billing may be arranged. I accept payments via bank transfer, credit card, or PayPal.
                </p>
              </div>
              
              {/* FAQ Item */}
              <div className="bg-surface p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">How long does a typical project take?</h3>
                <p className="text-foreground-secondary">
                  Project timelines vary depending on complexity and scope. A simple website might take 3-4 weeks, while a custom web application could take 2-4 months. I'll provide a detailed timeline estimate during the proposal phase, and keep you updated throughout the development process.
                </p>
              </div>
              
              {/* FAQ Item */}
              <div className="bg-surface p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">How do you communicate during projects?</h3>
                <p className="text-foreground-secondary">
                  I maintain clear, consistent communication throughout projects. This includes weekly progress meetings (via video call), a dedicated Slack channel for quick questions, and regular email updates. You'll always know where your project stands and what's being worked on.
                </p>
              </div>
              
              {/* FAQ Item */}
              <div className="bg-surface p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">Do you provide maintenance and support?</h3>
                <p className="text-foreground-secondary">
                  Yes, I offer maintenance plans after project completion. These include regular updates, security patches, bug fixes, and minor feature additions. Support plans can be monthly or quarterly depending on your needs, ensuring your application remains secure and functional.
                </p>
              </div>
              
              {/* FAQ Item */}
              <div className="bg-surface p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">Can you work with my existing team?</h3>
                <p className="text-foreground-secondary">
                  Absolutely! I frequently collaborate with in-house teams, providing specialized expertise while integrating smoothly with your existing workflows. I'm comfortable using your preferred project management tools and adapting to your team's processes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
