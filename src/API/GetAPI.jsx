// https://restcountries.com/v3.1/all
const AllCard_URL = "https://restcountries.com/v3.1/all";
const ByName_URL = "https://restcountries.com/v3.1/name/";
const Card = {
  AllCard: () => AllCard_URL,
  ByName: (name) => `${ByName_URL}${name}`,
};
export default Card;
