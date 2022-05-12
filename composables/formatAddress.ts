const formatAddress = (address) => {
  let firstDigit = address.slice(0, 3);
  let lastDigit = address.slice(-3);
  let addressForm = firstDigit + "..." + lastDigit;

  return addressForm;
};

export default formatAddress;
