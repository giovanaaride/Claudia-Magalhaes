import { useEffect } from 'react';

const SchemaOrg = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'schema-org-script';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Cláudia Magalhães — Personal Chef",
      "description": "Personal chef com mais de 15 anos de experiência no Rio de Janeiro, especializada em produção para eventos, empresas e refeições sob encomenda na Zona Norte.",
      "url": window.location.origin,
      "telephone": "+5521999999999",
      "email": "contato@claudiamagalhaes.com.br",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Rio de Janeiro",
        "addressRegion": "RJ",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -22.9068,
        "longitude": -43.1729
      },
      "areaServed": [
        { "@type": "AdministrativeArea", "name": "Zona Norte" },
        { "@type": "AdministrativeArea", "name": "Méier" },
        { "@type": "AdministrativeArea", "name": "Tijuca" }
      ],
      "knowsAbout": [
        "Gastronomia Profissional",
        "Produção de refeições em larga escala",
        "Segurança Alimentar",
        "Buffet para eventos",
        "Personal Chef"
      ],
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "18:00"
        }
      ],
      "sameAs": [
        "https://instagram.com/claudiamagalhaeschef"
      ],
      "image": `${window.location.origin}/logo.png`,
      "priceRange": "$$",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "reviewCount": "2000"
      }
    });
    
    // Check if script already exists to avoid duplicates
    if (!document.getElementById('schema-org-script')) {
      document.head.appendChild(script);
    }

    // Cleanup: remove the script if the component is unmounted
    return () => {
      const existingScript = document.getElementById('schema-org-script');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return null;
};

export default SchemaOrg;
