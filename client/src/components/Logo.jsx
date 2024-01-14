import workLogo from "../assets/images/workNestLogo.png";

const Logo = () => {
  return (
    <div className="work_logo">
      <img src={workLogo} alt="jobify" className="logo" />
      <h4 className="workWord">WorkNest</h4>
    </div>
  );
};

export default Logo;
