import Card from '@material-tailwind/react/Card';
import CardImage from '@material-tailwind/react/CardImage';
import CardBody from '@material-tailwind/react/CardBody';
import Icon from '@material-tailwind/react/Icon';
import H4 from '@material-tailwind/react/Heading4';
import H6 from '@material-tailwind/react/Heading6';
import LeadText from '@material-tailwind/react/LeadText';
import Paragraph from '@material-tailwind/react/Paragraph';
import StatusCard from 'components/landing/StatusCard';
import Teamwork from 'assets/img/teamwork.jpeg';

export default function WorkingSection() {
    return (
        <section className="pb-20 bg-gray-100 -mt-32">
            <div className="container max-w-7xl mx-auto px-4">
                <div className="flex flex-wrap relative z-50">
                    <StatusCard color="orange" icon="coffee" title="Equipe de desenvolvimento">
                        Contamos com otimos desenvolvedores, utilizando as tecnologias atuais e mais otimizadas para o desempenho
                    </StatusCard>
                    <StatusCard
                        color="green"
                        icon="fingerprint"
                        title="Indentidade"
                    >
                        Tenha um site com identidade, algo unico, apenas vc vai ter um site com um design unico, com textos e design só seus, tudo sob medida
                    </StatusCard>
                    <StatusCard
                        color="teal"
                        icon="speed"
                        title="Hospedagem"
                    >
                        Usamos as melhores hospedagens do Mercado, para manter seu site funcionando 24 horas por dia, e sempre com uma velocidade instantanea !
                    </StatusCard>
                </div>

                <div className="flex flex-wrap items-center mt-32">
                    <div className="w-full md:w-5/12 px-4 mx-auto">
                        <div className="text-blue-gray-800 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                            <Icon name="people" size="3xl" />
                        </div>
                        <H4 color="gray">Clientes em todo o mundo</H4>
                        <LeadText color="blueGray">
                            Trabalhamos com clientes de todo o mundo, cada cliente com um site unico, criado apenas para ele, 
                            garantimos que a qualidade seja maior do que o cliente espera.
                        </LeadText>
                        <LeadText color="blueGray">
                            Temos um time de design, responsavel por mostrar aos nossos programadores como deve ser o rosto do seu site, e como ele deve ser unico e rapido, um site da SabreCyber, é capaz de presuadir qualquer cliente, para qualquer segmento do mercado, apenas nos de as informações e veja a magica acontecer
                        </LeadText>
                    </div>

                    <div className="w-full md:w-4/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
                        <Card>
                            <CardImage alt="CardImage" src={Teamwork} />
                            <CardBody>
                                <H6 color="gray">Por que a SabreCyber ?</H6>
                                <Paragraph color="blueGray">
                                    Nossa empresa, preza por manter um ambiente de trabalho confortavel, e quer um melhor do que o lugar que o colaborador preferir ? 
                                    Sim, por isso, nossos designers e desenvolvedores, trabalham de qualquer lugar do mundo, por isso temos eles sempre dedicados e entusiasmados para um proximo desafio, que é criar um site com identidade
                                </Paragraph>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
