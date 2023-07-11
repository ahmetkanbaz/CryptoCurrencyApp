import { BsTwitter, BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { BiLogoLinkedin } from "react-icons/bi";
const FollowUs = () => {
  const socialsIcons = [
    { icon: <BsTwitter /> },
    { icon: <FaFacebookF /> },
    { icon: <BsYoutube /> },
    { icon: <BiLogoLinkedin /> },
  ];
  return (
    <div className="col-lg-3 col-md-6 col-12">
      <h5 className="mb-4">Follow Us</h5>
      <div className="d-flex gap-1">
        {socialsIcons.map((socialIcon, index) => (
          <div
            className="border rounded-circle border-info d-flex align-items-center justify-content-center p-2 socialIcon"
            key={index}
          >
            {socialIcon.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FollowUs;
