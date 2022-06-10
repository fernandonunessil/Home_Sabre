import Title from 'components/landing/Title';
import ContactCard from 'components/landing/ContactCard';
import Form from 'components/landing/Form';

export default function ContactSection() {
    return (
        <section className="pb-20 relative block bg-gray-100">
            <div className="container max-w-7xl mx-auto px-4 lg:pt-24">
                <Title heading="Que tal construirmos algo juntos ?">
                    Juntos, podemos contruir um futuro, sabia que toda ideia inovadora, ganha um BÔNUS, a cada ideia inovadora do seu negocio, damos um bonus de impulsionamento.
                </Title>

                <div className="flex flex-wrap -mt-12 justify-center">
                    <ContactCard icon="stars" title="Como funciona o BÔNUS ?">
                        Pegamos o site criado por nos, e colocamos ele na ferramenta de anuncio do Google, o Google Ads
                    </ContactCard>
                    <ContactCard icon="insert_chart" title="Google Ads">
                       Usamos o Google ADS, e colocamos seu site no topo das pesquisas, durante um mes, apôs esse mês
                    </ContactCard>
                    <ContactCard icon="refresh" title="Reativar Bônus">
                    você pode pedir para reativar os anuncios, sera cobrada uma taxa de R$ 100,00 + Valor dos anuncios no Google Ads
                    </ContactCard>
                </div>

                <Form />
            </div>
        </section>
    );
}
