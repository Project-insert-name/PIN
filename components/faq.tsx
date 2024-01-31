import {Accordion, AccordionItem} from "@nextui-org/react";

export default function FAQ() {
  const defaultContent = "This is an item.";
  const accordionData = [
    { key: "1", title: "Hva er Project<Insert Name>(PIN)?", content: defaultContent },
    { key: "2", title: "Hvordan funker det?", content: defaultContent },
    { key: "3", title: "Må jeg være en god programmerer?", content: defaultContent },
    { key: "4", title: "Kan alle joine?", content: defaultContent },
    { key: "5", title: "Kan jeg prøve først?", content: defaultContent },
  ];

  const itemClasses = {
    base: "text-white",
    title: "text-white",
  };
  
  return (
    <section id="contact" className="relative h-screen w-full bg-sky-700 md:flex items-center pt-[12vh]">
        <div className="w-[90%] md:w-[40%] p-4 md:p-12">
          <h2 
            className="h-[6vh] w-max text-3xl bg-gradient-to-r from-amber-200 to-cyan-300 text-transparent bg-clip-text">
              Spørsmål
          </h2>
          <p>Finner du ikke svar her, send oss gjerne melding på Discord/Facebook/osv.</p>
          <div className="h-[10vh] md:h-[20vh] relative">
            <button className="absolute bottom-0 z-10 border-2 border-sky-400 border-opacity-25 px-6 py-3 rounded-3xl hover:bg-sky-400 hover:text-sky-950 duration-150">
              Send melding
            </button>
          </div>
        </div>
        <div className="w-[90%] md:w-1/2 h-1/2 flex p-4 pt-12 md:p-12 relative">
        <Accordion 
          className="absolute z-10"
          itemClasses={itemClasses}>
          {accordionData.map((item) => (
            <AccordionItem
              key={item.key}
              aria-label={`Accordion ${item.key}`}
              title={item.title}
            >
              {item.content}
            </AccordionItem>
          ))}
        </Accordion>
        </div>
        <div>
          <div className="absolute w-6 h-6 rounded-full bg-amber-400 bg-opacity-60 top-[5%] md:top-[18%] left-[10%] md:left-[70%]"></div>
          <div className="absolute w-12 h-12 rounded-full bg-white bg-opacity-60 top-[27%] left-[70%] md:left-[12%]"></div>
          <div className="absolute w-8 h-8 rounded-full bg-blue-200 bg-opacity-60 top-[90%] md:top-[80%] left-[33%]"></div>
        </div>
      </section>
  )};