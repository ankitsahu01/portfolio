const Greeting = () => {
  const hrs = new Date().getHours();
  if (hrs >= 4 && hrs < 12) return "Good morning";
  else if (hrs >= 12 && hrs < 17) return "Good afternoon";
  else return "Good evening";
};

export default Greeting;
