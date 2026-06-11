import Reveal from './Reveal';
import { client } from '@/sanity/client';
import { partnerLogosQuery } from '@/sanity/queries';
import styles from './PartnerLogos.module.css';

type Logo = {
  src: string;
  alt: string;
  w?: number | null;
  h?: number | null;
  dark?: boolean | null;
  blend?: boolean;
  fullColor?: boolean | null;
};

const fallbackLogos: Logo[] = [
  { src: '/logos/mtn.svg',    alt: 'MTN',                            w: 73,  h: 72  },
  { src: '/logos/lbs.svg',    alt: 'Lagos Business School',          w: 65,  h: 27,  dark: true },
  { src: '/logos/bt.svg',     alt: 'BT',                             w: 42,  h: 42  },
  { src: '/logos/nepad.svg',  alt: 'NEPAD',                          w: 116, h: 52  },
  { src: '/logos/galaxy.svg', alt: 'Galaxy Backbone',                w: 79,  h: 51  },
  { src: '/logos/serco.svg',  alt: 'Serco',                          w: 65,  h: 27  },
  { src: '/logos/sesg.svg',   alt: 'Nigerian Economic Summit Group', w: 70,  h: 47  },
  { src: '/logos/abc.svg',    alt: 'American Business Council',      w: 160, h: 45, blend: true },
];

export default async function PartnerLogos() {
  let logos: Logo[] = [];
  try {
    logos = await client.fetch<Logo[]>(partnerLogosQuery, {}, { next: { revalidate: 60 } });
  } catch { /* Sanity not configured */ }

  if (!logos?.length) logos = fallbackLogos;

  const track = [...logos, ...logos];

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <Reveal>
          <p className={styles.tagline}>{"Trusted by Africa's most important institutions"}</p>
        </Reveal>

        <Reveal delay={150}>
          <div className={styles.viewport}>
            <div className={styles.fade} aria-hidden="true" />
            <div className={styles.track}>
              {track.map((logo, i) => (
                <div
                  key={`${logo.alt}-${i}`}
                  className={`${styles.item} ${logo.dark ? styles.darkBg : ''}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.w ?? undefined}
                    height={logo.h ?? 48}
                    style={{
                      display: 'block',
                      width: logo.w ?? 'auto',
                      height: logo.h ?? 48,
                      objectFit: 'contain',
                      ...(logo.blend
                        ? { mixBlendMode: 'multiply' as const }
                        : logo.dark || logo.fullColor
                        ? {}
                        : { filter: 'grayscale(1) brightness(0)' }),
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
