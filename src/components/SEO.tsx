import { useEffect } from 'react';

type SEOProps = {
  title: string;
  description: string;
  canonicalPath?: string;
  noindex?: boolean;
};

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement('meta');
    if (attributes.name) element.setAttribute('name', attributes.name);
    if (attributes.property) element.setAttribute('property', attributes.property);
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
}

export function SEO({ title, description, canonicalPath, noindex = false }: SEOProps) {
  useEffect(() => {
    const fullTitle = `${title} | Award Mortgage Solutions`;
    const path = canonicalPath ?? window.location.pathname;
    const canonicalUrl = `${window.location.origin}${path}`;

    document.title = fullTitle;
    upsertMeta('meta[name="description"]', { name: 'description', content: description });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: fullTitle });
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description });
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl });
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary' });
    upsertMeta('meta[name="robots"]', {
      name: 'robots',
      content: noindex ? 'noindex, nofollow' : 'index, follow',
    });

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    let structuredData = document.head.querySelector<HTMLScriptElement>('script[data-site-schema="award-mortgage"]');
    if (!structuredData) {
      structuredData = document.createElement('script');
      structuredData.type = 'application/ld+json';
      structuredData.setAttribute('data-site-schema', 'award-mortgage');
      document.head.appendChild(structuredData);
    }
    structuredData.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FinancialService',
      name: 'Award Mortgage Solutions',
      url: window.location.origin,
      telephone: '+611300688799',
      areaServed: {
        '@type': 'Country',
        name: 'Australia',
      },
      description,
    });
  }, [title, description, canonicalPath, noindex]);

  return null;
}
