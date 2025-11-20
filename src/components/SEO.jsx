import { Helmet } from 'react-helmet'

export default function SEO() {
  const ldLocalBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Zorgkwekerij Plant en Tuin Noordbroek',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Hoofdstraat 1',
      addressLocality: 'Noordbroek',
      postalCode: '9635 AA',
      addressCountry: 'NL'
    },
    telephone: '+31501234567',
    email: 'info@zorgkwekerij-noordbroek.nl',
    areaServed: 'Midden-Groningen',
    openingHours: 'Mo-Fr 09:00-16:00'
  }

  const ldOrg = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zorgkwekerij Plant en Tuin Noordbroek',
    url: window.location.origin,
    sameAs: []
  }

  return (
    <Helmet>
      <title>Zorgkwekerij Plant en Tuin Noordbroek</title>
      <meta name="description" content="Actieve agrarische dagbesteding in Noordbroek: kwekerij, dierenverzorging en facilitaire diensten." />
      <script type="application/ld+json">{JSON.stringify(ldLocalBusiness)}</script>
      <script type="application/ld+json">{JSON.stringify(ldOrg)}</script>
    </Helmet>
  )
}
