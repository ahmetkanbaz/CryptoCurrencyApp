import {AccordionWrapper} from './AccordionStyle'
const Accordion = () => {
  const accordionDatas = [
    {
      id: "collapseOne",
      title: "How to build a website?",
      body: "Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.",
    },
    {
      id: "collapseTwo",
      title: "How long will it take to get a new website?",
      body: "Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.",
    },
    {
      id: "collapseThree",
      title: "Do you only create HTML websites?",
      body: "Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.",
    },
    {
      id: "collapseFour",
      title: "Will my website be mobile-friendly?",
      body: "Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.",
    },
    {
      id: "collapseFive",
      title: "Will you maintain my site for me?",
      body: "Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.",
    },
    {
      id: "collapseSix",
      title: "I’m on a strict budget. Do you have any low cost options?",
      body: "Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.",
    },
    {
      id: "collapseSeven",
      title: "Will you maintain my site for me?",
      body: "Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.",
    },
    {
      id: "collapseEight",
      title: "I’m on a strict budget. Do you have any low cost options?",
      body: "Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.",
    },
  ];
  return (
    <AccordionWrapper>
      <div className="accordion" id="faqsAccordion">
        {accordionDatas.map((accordionData, index) => (
          <div className="accordion-item my-3 border-top" key={index}>
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed fw-bold opacity-50"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${accordionData.id}`}
                aria-expanded="false"
              >
                {accordionData.title}
              </button>
            </h2>
            <div
              id={accordionData.id}
              className="accordion-collapse collapse"
              data-bs-parent="#faqsAccordion"
            >
              <div className="accordion-body opacity-50 p-4">{accordionData.body}</div>
            </div>
          </div>
        ))}
      </div>
    </AccordionWrapper>
  );
};

export default Accordion;
