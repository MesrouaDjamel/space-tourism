import NavLinks from "./NavLinks";

const MobileMenu = ({toggleMenu}:{toggleMenu: () => void}) => {
  return (
    <div className="md:hidden w-[15.875rem] z-50 flex flex-col min-h-full bg-[rgba(255, 255, 255, 0.05)] backdrop-blur-2xl absolute top-0 right-0">
      <svg
        onClick={toggleMenu}
        className="self-end mr-6 mt-8 cursor-pointer"
        width="20"
        height="21"
      >
        <g fill="#D0D6F9" fillRule="evenodd">
          <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
          <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
        </g>
      </svg>
      <div className="pl-8 pt-12">
        <NavLinks />
      </div>
    </div>
  );
}

export default MobileMenu