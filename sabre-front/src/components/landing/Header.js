import H2 from "@material-tailwind/react/Heading2";
import LeadText from "@material-tailwind/react/LeadText";
import Icon from "@material-tailwind/react/Icon";

export default function Header() {
  return (
    <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-screen">
      <div className="bg-landing-background bg-cover bg-center absolute top-0 w-full h-full" />
      <div className="container max-w-8xl relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <H2 color="white">
              Tenha uma presença online{" "}
              <Icon
                family="font-awesome"
                name="fab fa-hotjar"
                size="4xl"
                color="white"
              />
            </H2>

            <div className="text-gray-200">
              <LeadText color="gray-200">
                Um site bem feito, pode garantir conquistar muitos clientes, e quem não quer clientes novos ?
                Nossa empresa se responsabiliza em criar sites atrativos e persuasivos, para seu serviço, marca, produto ou oque você queira divulgar
              </LeadText>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
