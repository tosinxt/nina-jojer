import styles from './PartnerLogos.module.css';

const logos = [
  { src: '/logos/mtn.svg',    alt: 'MTN',                            w: 73,  h: 72 },
  { src: '/logos/lbs.svg',    alt: 'Lagos Business School',          w: 77,  h: 41,  dark: true },
  { src: '/logos/bt.svg',     alt: 'BT',                             w: 42,  h: 42 },
  { src: '/logos/nepad.svg',  alt: 'NEPAD',                          w: 51,  h: 39 },
  { src: '/logos/galaxy.svg', alt: 'Galaxy Backbone',                w: 71,  h: 53 },
  { src: '/logos/serco.svg',  alt: 'Serco',                          w: 65,  h: 27 },
  { src: '/logos/sesg.svg',   alt: 'Nigerian Economic Summit Group', w: 70,  h: 47 },
  { src: '/logos/abc.svg',    alt: 'American Business Council',      w: 161, h: 45, blend: true },
];

// Double the logos list dynamically to support a seamless, infinite loop marquee
const doubleLogos = [...logos, ...logos];

export default function PartnerLogos() {
  return (
    <section className={styles.partnerLogos}>
      <div className={styles.container}>
        <p className={styles.tagline}>
          {"Trusted by Africa's most important institutions"}
        </p>
        
        <div className={styles.logosViewport}>
          {/* Gradient overlays to create a majestic fade effect at the scroll bounds */}
          <div className={styles.leftFade} aria-hidden="true" />
          <div className={styles.rightFade} aria-hidden="true" />
          
          <div className={styles.logosMarqueeTrack}>
            {doubleLogos.map((logo, index) => (
              <div
                key={`${logo.alt}-${index}`}
                className={`${styles.logoItem} ${logo.dark ? styles.darkBg : ''}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.w}
                  height={logo.h}
                  style={{
                    display: 'block',
                    width: logo.w,
                    height: logo.h,
                    objectFit: 'contain',
                    ...(logo.blend
                      ? { mixBlendMode: 'multiply' as const, filter: 'brightness(1.15) contrast(1.2)' }
                      : logo.dark
                      ? {}
                      : { filter: 'grayscale(1) brightness(0)' }),
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
