'use client';

import { useState, type FormEvent, type ChangeEvent } from 'react';
import Reveal from '@/components/ui/Reveal';
import { BRAND, PROJECT_TYPES } from '@/lib/constants';

type FormData = {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
};

const EMPTY: FormData = { name: '', email: '', phone: '', projectType: '', message: '' };

export default function Contact() {
  const [form, setForm]           = useState<FormData>(EMPTY);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      style={{ backgroundColor: '#1a1714', padding: '8rem 2rem' }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Eyebrow */}
        <Reveal>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.875rem',
              marginBottom: '5rem',
            }}
          >
            <div style={{ width: '36px', height: '1px', backgroundColor: '#b87941', flexShrink: 0 }} />
            <span
              style={{
                fontFamily: 'var(--font-dm-mono), monospace',
                fontSize: '0.58rem',
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color: '#b87941',
              }}
            >
              Let&apos;s Work Together
            </span>
          </div>
        </Reveal>

        {/* Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <div>
              <Reveal delay={100}>
                <h2
                  id="contact-heading"
                  style={{
                    fontFamily: 'var(--font-cormorant), Georgia, serif',
                    fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)',
                    fontWeight: 300,
                    color: '#f5f2ed',
                    lineHeight: 1.15,
                    marginBottom: '1.5rem',
                  }}
                >
                  Start a conversation.
                </h2>
              </Reveal>
              <Reveal delay={200}>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9375rem',
                    fontWeight: 300,
                    color: 'rgba(245, 242, 237, 0.55)',
                    lineHeight: 1.85,
                    maxWidth: '400px',
                    margin: 0,
                  }}
                >
                  Whether you have a fully formed vision or just the seed of an idea, we&apos;d love to
                  hear from you. Every great project begins with a conversation.
                </p>
              </Reveal>
            </div>

            {/* Contact Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {[
                {
                  label: 'Email',
                  value: BRAND.email,
                  href: `mailto:${BRAND.email}`,
                },
                {
                  label: 'Phone',
                  value: BRAND.phone,
                  href: `tel:${BRAND.phone.replace(/\s/g, '')}`,
                },
                {
                  label: 'Studio',
                  value: BRAND.address,
                  href: null,
                },
              ].map(({ label, value, href }, idx) => (
                <Reveal key={label} delay={300 + idx * 80}>
                  <div>
                    <div
                      style={{
                        fontFamily: 'var(--font-dm-mono), monospace',
                        fontSize: '0.52rem',
                        letterSpacing: '0.22em',
                        textTransform: 'uppercase',
                        color: 'rgba(184, 121, 65, 0.7)',
                        marginBottom: '0.5rem',
                      }}
                    >
                      {label}
                    </div>
                    {href ? (
                      <a
                        href={href}
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.9375rem',
                          fontWeight: 300,
                          color: 'rgba(245, 242, 237, 0.7)',
                          textDecoration: 'none',
                          transition: 'color 0.2s ease',
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.color = '#f5f2ed';
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.color =
                            'rgba(245, 242, 237, 0.7)';
                        }}
                      >
                        {value}
                      </a>
                    ) : (
                      <p
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.9375rem',
                          fontWeight: 300,
                          color: 'rgba(245, 242, 237, 0.5)',
                          margin: 0,
                        }}
                      >
                        {value}
                      </p>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div>
            <Reveal delay={200}>
              {submitted ? (
                /* ── Thank You State ── */
                <div
                  style={{
                    padding: '3rem 2rem',
                    border: '1px solid rgba(184, 121, 65, 0.2)',
                    textAlign: 'center',
                    backgroundColor: 'rgba(26, 23, 20, 0.4)',
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      border: '1px solid #b87941',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.5rem',
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <path
                        d="M4 10l4.5 4.5L16 6"
                        stroke="#b87941"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-cormorant), Georgia, serif',
                      fontSize: '2rem',
                      fontWeight: 300,
                      color: '#f5f2ed',
                      marginBottom: '0.75rem',
                    }}
                  >
                    Message received.
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.875rem',
                      fontWeight: 300,
                      color: 'rgba(245, 242, 237, 0.5)',
                      margin: 0,
                      lineHeight: 1.8,
                    }}
                  >
                    Thank you for reaching out. We will be in touch within 48 hours.
                  </p>
                </div>
              ) : (
                /* ── Contact Form ── */
                <form
                  id="contact-form"
                  onSubmit={handleSubmit}
                  noValidate
                  style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}
                >
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact-name" className="contact-label">
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={handleChange}
                        className="contact-input"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="contact-label">
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={handleChange}
                        className="contact-input"
                      />
                    </div>
                  </div>

                  {/* Phone + Project Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact-phone" className="contact-label">
                        Phone <span style={{ opacity: 0.5 }}>(Optional)</span>
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="+91 00000 00000"
                        value={form.phone}
                        onChange={handleChange}
                        className="contact-input"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-project-type" className="contact-label">
                        Project Type *
                      </label>
                      <select
                        id="contact-project-type"
                        name="projectType"
                        required
                        value={form.projectType}
                        onChange={handleChange}
                        className="contact-input"
                      >
                        <option value="" disabled>
                          Select a type
                        </option>
                        {PROJECT_TYPES.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="contact-label">
                      Project Brief *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about your project, site, timeline, and any specific requirements..."
                      value={form.message}
                      onChange={handleChange}
                      className="contact-input"
                      style={{ resize: 'vertical', minHeight: '140px' }}
                    />
                  </div>

                  {/* Submit */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                    <button
                      id="contact-submit-btn"
                      type="submit"
                      className="btn-primary"
                    >
                      Send Enquiry
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path
                          d="M1 6h10M7 2l4 4-4 4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <p
                      style={{
                        fontFamily: 'var(--font-dm-mono), monospace',
                        fontSize: '0.5rem',
                        letterSpacing: '0.14em',
                        color: 'rgba(245, 242, 237, 0.25)',
                        margin: 0,
                      }}
                    >
                      We respond within 48 hours
                    </p>
                  </div>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
