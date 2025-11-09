import { ImageWithFallback } from './figma/ImageWithFallback';

interface SpoolCardProps {
  title: string;
  description: string;
  imageUrl: string;
  index: number;
}

function SpoolCard({ title, description, imageUrl, index }: SpoolCardProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Image Container */}
      <div style={{ position: 'relative', marginBottom: '2rem', width: '100%' }}>
        <div
          className="spool-image-container"
          style={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '1rem',
            boxShadow:
              '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            transition: 'all 0.5s ease',
          }}
        >
          <div style={{ position: 'relative', paddingBottom: '60%', overflow: 'hidden' }}>
            <ImageWithFallback
              src={imageUrl}
              alt={title}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center 46%',
                transition: 'transform 0.6s ease',
                borderRadius: '1rem',
              }}
              className="spool-image"
            />
          </div>

          {/* Subtle border */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              border: '2px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '1rem',
              pointerEvents: 'none',
            }}
          ></div>
        </div>

        {/* Decorative accent */}
        <div
          style={{
            position: 'absolute',
            [index === 0 ? 'bottom' : 'top']: '-1.5rem',
            [index === 0 ? 'left' : 'right']: '-1.5rem',
            width: '8rem',
            height: '8rem',
            background: 'linear-gradient(to bottom right, #fb923c, #ea580c)',
            borderRadius: '9999px',
            zIndex: -1,
            filter: 'blur(48px)',
            opacity: 0.12,
          }}
        ></div>
      </div>

      {/* Text Content */}
      <div style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
        {/* Decorative line */}
        <div
          style={{
            width: '4rem',
            height: '0.25rem',
            background: 'linear-gradient(to right, #f97316, #fdba74)',
            marginBottom: '1.25rem',
            borderRadius: '9999px',
          }}
        ></div>

        <h2
          style={{
            color: '#ea580c',
            marginBottom: '0.5rem',
            fontSize: '1.5rem',
            lineHeight: 1.5,
          }}
        >
          {title}
        </h2>

        <p className="paragraph-text">{description}</p>
      </div>

      <style>{`
        .spool-image-container:hover {
          transform: translateY(-6px);
          box-shadow: 0 25px 30px -10px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        .spool-image-container:hover .spool-image {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
}

export function SpoolPage() {
  const spools = [
    {
      title: 'Wooden Spool',
      description:
        'Our wooden spools are handcrafted with fine-grained wood carrying the charm of craftsmanship. Each one holds our creations with care, giving every ribbon and trim a touch of grace.',
      imageUrl: '/products/spools/woodenspool-2.png',
    },
    {
      title: 'Paper Spool',
      description:
        'Our paper spools reflect a softer, contemporary sensibility — crafted to hold each ribbon with quiet care and intention.',
      imageUrl: '/products/spools/paperspool-2.jpg',
    },
  ];

  return (
    <>
      <style>{`
        .spool-container {
          position: relative;
          padding-top: calc(4rem + 50px);
          padding-bottom: 4rem;
          padding-left: 1.5rem;
          padding-right: 1.5rem;
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: linear-gradient(to bottom, #ffffff 0%, rgba(255, 247, 237, 0.3) 50%, #ffffff 100%);
          overflow: hidden;
        }

        .background-decorative {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .bg-blob-1 {
          position: absolute;
          top: 25%;
          left: -8rem;
          width: 24rem;
          height: 24rem;
          background: rgba(254, 215, 170, 0.2);
          border-radius: 9999px;
          filter: blur(48px);
        }

        .bg-blob-2 {
          position: absolute;
          bottom: 25%;
          right: -8rem;
          width: 24rem;
          height: 24rem;
          background: rgba(253, 186, 116, 0.2);
          border-radius: 9999px;
          filter: blur(48px);
        }

        .main-wrapper {
          max-width: 80rem;
          margin-left: auto;
          margin-right: auto;
          position: relative;
          width: 100%;
        }

        .header-section {
          text-align: center;
          margin-bottom: 3.5rem;
        }

        .header-title {
          margin-bottom: 1rem;
          font-size: 3rem;
          color: #292524;
          font-weight: 400;
          line-height: 1.5;
        }


        .header-description,
        .paragraph-text,
        .footer-text {
          color: #57534e;      
          font-size: 1.125rem;       
          line-height: 1.625;        
        }


        .header-description {
          max-width: 42rem;
          margin-left: auto;
          margin-right: auto;
        }

        .cards-grid {
          display: grid;
          gap: 2.5rem;
          max-width: 72rem;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 3rem;
          align-items: start;
        }

        @media (min-width: 768px) {
          .cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .cards-grid {
            gap: 4rem;
          }
        }

        .footer-section {
          text-align: center;
          padding-top: 2rem;
          border-top: 1px solid rgba(251, 146, 60, 0.1);
        }

        .footer-text {
          color: #9ca3af;
          letter-spacing: 0.025em;
        }
      `}</style>

      <section className="spool-container">
        <div className="background-decorative">
          <div className="bg-blob-1"></div>
          <div className="bg-blob-2"></div>
        </div>

        <div className="main-wrapper">
          {/* Header */}
          <div className="header-section">
            <h1 className="header-title">Spool Collection</h1>
            <p className="header-description">
              Our ribbons and trims arrive beautifully-wrapped on premium spools. The artisan touch prevents creases,
              maintains the ribbon’s tension and drape, and gives your package, project, or display an immediate boutique
              look. Perfect for gifting and retail display — every spool is ready to showcase.
            </p>
          </div>

          {/* Cards */}
          <div className="cards-grid">
            {spools.map((spool, index) => (
              <SpoolCard
                key={spool.title}
                title={spool.title}
                description={spool.description}
                imageUrl={spool.imageUrl}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
