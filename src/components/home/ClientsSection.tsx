'use client';

import Image from 'next/image';

type ClientLogo = {
  name: string;
  logoUrl: string;
  boxWidth?: number;
  boxHeight?: number;
  scale?: number;
};

const clientsRow1: ClientLogo[] = [
  { name: 'Fundacion-Vibremos', logoUrl: '/images/clients-logos/Fvibremos.png', boxWidth: 220, scale: 1.15 },
  {
    name: 'Secretaria-de-Desarrollo-Economico,-Competitividad-y-Fomento-del-Empleo',
    logoUrl: '/images/clients-logos/gobernacion_desarrollo.png',
    boxWidth: 260,
    scale: 1.35,
  },
  { name: 'CVC', logoUrl: '/images/clients-logos/cvc.png', boxWidth: 160, scale: 1.2 },
  { name: 'Policia-Metropolitana-de-Cali', logoUrl: '/images/clients-logos/policia_nacional.png', boxWidth: 160, scale: 1.35 },
  { name: 'Secretaria-deTurismo-de-Cali', logoUrl: '/images/clients-logos/gobernacion_turismo.png', boxWidth: 260, scale: 1.2 },
  { name: 'Beneficencia-del-Valle-del-Cauca', logoUrl: '/images/clients-logos/beneficencia_valle.png', boxWidth: 160, scale: 1.10 },
  { name: 'Indervalle', logoUrl: '/images/clients-logos/indervalle.png', boxWidth: 160, scale: 1.25 },
  { name: 'Siesa', logoUrl: '/images/clients-logos/siesa.png', boxWidth: 200, scale: 1.15 },
  { name: 'Telepacifico', logoUrl: '/images/clients-logos/telepacifico.png', boxWidth: 160, scale: 1.35 },
];

const clientsRow2: ClientLogo[] = [
  { name: 'Secretaria-de-Vivienda-del-Valle-del-Cauca', logoUrl: '/images/clients-logos/gobernacion_vivienda.png', boxWidth: 260, scale: 1.2 },
  { name: 'Colegio-Ideas', logoUrl: '/images/clients-logos/c_ideas.png', boxWidth: 160, scale: 1.2 },
  { name: 'Inciva', logoUrl: '/images/clients-logos/inciva.png', boxWidth: 160, scale: 1.15 },
  { name: 'Dagma', logoUrl: '/images/clients-logos/dagma.png', boxWidth: 200, scale: 1.0 },
  { name: 'ILV', logoUrl: '/images/clients-logos/ilv.png', boxWidth: 160, scale: 1.2 },
  { name: 'Sena', logoUrl: '/images/clients-logos/sena.png', boxWidth: 160, scale: 1.15 },
  { name: 'Algreco', logoUrl: '/images/clients-logos/algreco.png', boxWidth: 160, scale: 1.2 },
  { name: 'Icesi', logoUrl: '/images/clients-logos/u_icesi.png', boxWidth: 180, scale: 1.35 },
];

const fullClientsRow1 = [...clientsRow1, ...clientsRow1];
const fullClientsRow2 = [...clientsRow2, ...clientsRow2];

function LogoItem({ client }: { client: ClientLogo }) {
  const boxWidth = client.boxWidth ?? 180;
  const boxHeight = client.boxHeight ?? 100;
  const baseScale = client.scale ?? 1;

  return (
    <div
      className="client-logo"
      style={
        {
          ['--logo-w' as any]: `${boxWidth}px`,
          ['--logo-h' as any]: `${boxHeight}px`,
        } as React.CSSProperties
      }
    >
      <div className="client-logo-hover">
        <div className="client-logo-inner" style={{ transform: `scale(${baseScale})` }}>
          <div className="client-logo-box">
            <Image
              src={client.logoUrl}
              alt={client.name}
              fill
              sizes={`${boxWidth}px`}
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ClientsSection() {
  return (
    <section id="clients" className="py-12 lg:py-16">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-off-white">
            Ellos confían en nosotros
          </h2>
        </div>
      </div>

      <div className="flex flex-col gap-12">
        <div className="clients-marquee">
          <div className="clients-track">
            {fullClientsRow1.map((client, index) => (
              <LogoItem key={`${client.name}-${index}`} client={client} />
            ))}
          </div>
        </div>

        <div className="clients-marquee">
          <div className="clients-track clients-track-reverse">
            {fullClientsRow2.map((client, index) => (
              <LogoItem key={`${client.name}-${index}`} client={client} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}