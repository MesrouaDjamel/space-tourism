const NavDestination = () => {
 const navDestination = [
    {
      name: "Moon",
      id: 1,
    },
    {
      name: "Mars",
      id: 2,
    },
    {
      name: "Europa",
      id: 3,
    },
    {
      name: "Titan",
      id: 4,
    }
  ];
  return <ul className="flex flex-row gap-8">
    {navDestination.map((destination) => (
      <li className="cursor-pointer" key={destination.id}>
        {destination.name}
        </li>
    ))}
  </ul>;
};

export default NavDestination;
