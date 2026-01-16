export default function StructuredData() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "additionalType": "ProfessionalService",
    "name": "BKEEP",
    "description": "Professional bookkeeping services exclusively for dental clinics in Canada",
    "url": "https://bkeep.ca",
    "logo": "https://bkeep.ca/Logo.png",
    "image": "https://bkeep.ca/og-image.png",
    "email": "info@bkeep.ca",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2585 Skymark Ave",
      "addressLocality": "Mississauga",
      "addressRegion": "ON",
      "postalCode": "L4W 4L5",
      "addressCountry": "CA"
    },
    "serviceType": "Bookkeeping and Accounting Services",
    "areaServed": {
      "@type": "Country",
      "name": "Canada"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Dental Clinics"
    },
    "priceRange": "$$",
    "knowsAbout": [
      "Dental Practice Bookkeeping",
      "CRA Compliance",
      "Financial Reporting",
      "Expense Benchmarking",
      "Profit & Loss Analysis"
    ],
    "slogan": "Helping Dental Clinics Reduce Overspending and Unlock Hidden Profit Opportunities"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is your service CRA compliant?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all our bookkeeping follows CRA regulations and best practices for Canadian dental practices."
        }
      },
      {
        "@type": "Question",
        "name": "How do the benchmark reports work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We compare your clinic's expenses to similar practices in your province, helping you identify areas for optimization."
        }
      },
      {
        "@type": "Question",
        "name": "What software do you use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We use QuickBooks Online integrated with dental practice management software for seamless data flow."
        }
      },
      {
        "@type": "Question",
        "name": "How secure is my data?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We use bank-level encryption and follow strict privacy protocols to protect all your financial information."
        }
      },
      {
        "@type": "Question",
        "name": "Can I access my reports anytime?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you have 24/7 digital access to all your financial reports and documents through our secure portal."
        }
      }
    ]
  };

  const eventSponsorshipSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "ODA New Dentist Symposium 2025",
    "startDate": "2025-05-02T09:00:00-04:00",
    "endDate": "2025-05-03T17:00:00-04:00",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": "Metro Toronto Convention Centre",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "255 Front Street West",
        "addressLocality": "Toronto",
        "addressRegion": "ON",
        "postalCode": "M5V 2W6",
        "addressCountry": "CA"
      }
    },
    "image": [
      "https://www.bkeep.ca/Logo.png"
    ],
    "description": "The ODA New Dentist Symposium is a premier event for new dentists in Ontario, featuring expert speakers, networking opportunities, and industry insights. BKEEP is proud to sponsor this event.",
    "organizer": {
      "@type": "Organization",
      "name": "Ontario Dental Association",
      "url": "https://www.oda.ca"
    },
    "sponsor": {
      "@type": "Organization",
      "name": "BKEEP",
      "description": "Professional bookkeeping services exclusively for dental clinics"
    },
    "performer": {
      "@type": "PerformingGroup",
      "name": "ODA Industry Experts"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://www.oda.ca/events/new-dentist-symposium/",
      "price": "0",
      "priceCurrency": "CAD",
      "availability": "https://schema.org/InStock",
      "validFrom": "2024-12-01T00:00:00-05:00"
    },
    "url": "https://www.oda.ca/events/new-dentist-symposium/"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSponsorshipSchema) }}
      />
    </>
  );
}
