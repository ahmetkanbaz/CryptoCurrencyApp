import {AiOutlineRight} from 'react-icons/ai'
const OurServices = () => {
  return (
    <div className='col-lg-3 col-md-6 col-12'>
      <h5 className="mb-4">Our Services</h5>
      <div className="d-flex gap-3 align-items-center opacity-50">
        <AiOutlineRight size='1.2rem' />
        <span className='footerLinkSpan'>Currency Wallet</span>
      </div>
      <div className="d-flex gap-3 align-items-center opacity-50 mt-2">
        <AiOutlineRight size='1.2rem' />
        <span className='footerLinkSpan'>Currency Transaction</span>
      </div>
      <div className="d-flex gap-3 align-items-center opacity-50 my-2">
        <AiOutlineRight size='1.2rem' />
        <span className='footerLinkSpan'>Bitcoin Investment</span>
      </div>
      <div className="d-flex gap-3 align-items-center opacity-50">
        <AiOutlineRight size='1.2rem' />
        <span className='footerLinkSpan'>Token Sale</span>
      </div>
    </div>
  )
}

export default OurServices