

import React, { forwardRef, useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { GithubIcon } from './icons/GithubIcon';
import { EmailIcon } from './icons/EmailIcon';
import { FacebookIcon } from './icons/FacebookIcon';
import MacWindow from './MacWindow';

const socialLinks = [
    { Icon: FacebookIcon, href: 'https://www.facebook.com/cjustineolavario18', name: 'Facebook' },
    { Icon: EmailIcon, href: 'mailto:carljustine.olavario0418@gmail.com', name: 'Email' },
    { Icon: GithubIcon, href: 'https://github.com/ceed-jay', name: 'GitHub' },
];

const Contact = forwardRef<HTMLElement>((props, ref) => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

    const validate = () => {
        const newErrors = { name: '', email: '', message: '' };
        let isValid = true;
        if (!formData.name) {
            newErrors.name = 'Name is required.';
            isValid = false;
        }
        if (!formData.email) {
            newErrors.email = 'Email is required.';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid.';
            isValid = false;
        }
        if (!formData.message) {
            newErrors.message = 'Message is required.';
            isValid = false;
        }
        setErrors(newErrors);
        return isValid;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            setIsSubmitting(true);
            setSubmitStatus(null);

            try {
                // IMPORTANT: Replace with your own Formspree endpoint!
                // Go to https://formspree.io/ to create a new form and get your endpoint.
                const response = await fetch('https://formspree.io/f/xvgvrqzw', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                if (response.ok) {
                    setSubmitStatus('success');
                    setFormData({ name: '', email: '', message: '' });
                } else {
                    throw new Error('Network response was not ok.');
                }
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
                setSubmitStatus('error');
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    return (
        <section ref={ref} id="contact">
            <MacWindow title="Get In Touch - Mail">
                <div className="max-w-3xl mx-auto">
                    <ScrollReveal>
                        <form onSubmit={handleSubmit} noValidate className="space-y-6">
                            <div>
                                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className={`w-full p-3 bg-white border rounded-md focus:outline-none focus:ring-2 transition ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'}`}/>
                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                            </div>
                            <div>
                                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className={`w-full p-3 bg-white border rounded-md focus:outline-none focus:ring-2 transition ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'}`}/>
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                            </div>
                            <div>
                                <textarea name="message" placeholder="Your Message" rows={5} value={formData.message} onChange={handleChange} className={`w-full p-3 bg-white border rounded-md focus:outline-none focus:ring-2 transition resize-none ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'}`}></textarea>
                                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                            </div>
                            <div className="text-center">
                                <button type="submit" disabled={isSubmitting} className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed">
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </div>
                            {submitStatus === 'success' && <p className="text-green-500 text-center mt-4">Message sent successfully!</p>}
                            {submitStatus === 'error' && <p className="text-red-500 text-center mt-4">Failed to send message. Please try again.</p>}
                        </form>
                    </ScrollReveal>
                    <ScrollReveal>
                        <div className="flex justify-center space-x-4 sm:space-x-6 mt-12">
                            {socialLinks.map(({Icon, href, name}) => (
                                <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={name} className="text-gray-600 hover:text-blue-500 transition-all duration-300 transform hover:scale-125 hover:[filter:drop-shadow(0_0_8px_theme(colors.blue.500))]">
                                    <Icon />
                                </a>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </MacWindow>
        </section>
    );
});

export default Contact;