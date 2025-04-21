import Contact1 from "../nopage/contact/contact1"

export const metadata = {
    title: 'Contact | CosmoTarot & Healing',
    description: "Get in touch with CosmoTarot & Healing for tarot readings, chakra healing, and spiritual guidance. I'm here to connect and help you on your journey ✨",
  
    openGraph: {
      title: 'Contact | CosmoTarot & Healing',
      description: "Reach out for tarot guidance, healing sessions, or any questions you may have. I'm available globally 🌍",
      url: 'https://www.cosmostarothealing.com/contact-us',
      siteName: 'CosmoTarot & Healing',
      images: [
        {
          url: 'https://www.cosmostarothealing.com/Logo.png', // Replace with actual OG image URL
          width: 1200,
          height: 630,
          alt: 'CosmoTarot & Healing Contact',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
  
    twitter: {
      card: 'summary_large_image',
      title: 'Contact | CosmoTarot & Healing',
      description: "Let's connect for spiritual guidance, tarot, and healing services.",
      images: ['https://www.cosmostarothealing.com/Logo.png'], // Replace with actual
    },
  
    metadataBase: new URL('https://www.cosmostarothealing.com'),
  };
  

export default function Page(){
    return(
        <>
        <Contact1/>
        </>
    )
};