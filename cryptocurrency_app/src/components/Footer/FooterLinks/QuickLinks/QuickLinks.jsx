import {AiOutlineRight} from 'react-icons/ai'
const QuickLinks = () => {
  return (
    <div className='col-lg-3 col-md-6 col-12'>
      <h5 className="mb-4">Quick Links</h5>
      <div className="d-flex gap-3 align-items-center opacity-50">
        <AiOutlineRight size='1.2rem' />
        <span className='footerLinkSpan'>About Us</span>
      </div>
      <div className="d-flex gap-3 align-items-center opacity-50 mt-2">
        <AiOutlineRight size='1.2rem' />
        <span className='footerLinkSpan'>Contact Us</span>
      </div>
      <div className="d-flex gap-3 align-items-center opacity-50 my-2">
        <AiOutlineRight size='1.2rem' />
        <span className='footerLinkSpan'>Our Services</span>
      </div>
      <div className="d-flex gap-3 align-items-center opacity-50">
        <AiOutlineRight size='1.2rem' />
        <span className='footerLinkSpan'>Terms & Condition</span>
      </div>
    </div>
  )
}

export default QuickLinks