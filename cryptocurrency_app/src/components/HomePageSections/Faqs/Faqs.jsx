import UpperSection from '../../../common/UpperSection/UpperSection'
import Accordion from './Accordion/Accordion';
const Faqs = () => {
  return (
    <div className="py-5">
      <div className="container py-5">
        <UpperSection title='FAQs' subTitle='Frequently Asked Questions' />
        <Accordion />
      </div>
    </div>
  );
};

export default Faqs;
