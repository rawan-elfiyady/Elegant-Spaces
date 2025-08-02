const CustomerRepo = require("../Repositories/CustomerRepository");
const AddressRepo = require("../Repositories/AddressesRepository");

///////////////////////////////Profile////////////////////////////

async function viewProfile(id) {
  try {
    const customer = await CustomerRepo.getUserById(id);
    console.log("Customer fetched:", JSON.stringify(customer, null, 2));
    return customer;
  } catch (error) {
    // Better error logging
    console.error("Error in viewProfile:", error);

    // If error has a message (like most Error objects), show that
    const errorMessage = error?.message || "Unknown error";
    throw new Error(`Error Fetching Profile: ${errorMessage}`);
  }
}

async function editProfile(id, updates) {
  try {
    const updated = await CustomerRepo.editProfile(id, updates);

    return updated;
  } catch (error) {
    throw new Error(`Error Editing Profile ${error.message}`);
  }
}

///////////////////////////////Addresses////////////////////////////

async function addAddress(address){
  try{
    const addressData = await AddressRepo.addAddress(address);
    return addressData;
  } catch(error) {
    const errorMessage = error?.message || "Unknown error";
    throw new Error(`Error Fetching Profile: ${errorMessage}`);
  }
}

async function getAddress(id) {
  try{
    const address = await AddressRepo.getAddressById(id);
    return address;

  } catch(error) {
    const errorMessage = error?.message || "Unknown error";
    throw new Error(`Error Fetching Profile: ${errorMessage}`);
  }
}

async function getUserAddresses(id) {
  try{
    const address = await AddressRepo.getUserAddresses(id);
    return address;
  } catch(error) {
    const errorMessage = error?.message || "Unknown error";
    throw new Error(`Error Fetching Profile: ${errorMessage}`);
  } 
}

async function editAddress(id, updates) {
  try {
    const updated = await AddressRepo.editAddress(id,updates);
    return updated;
  } catch (error) {
    const errorMessage = error?.message || "Unknown error";
    throw new Error(`Error Fetching Profile: ${errorMessage}`);
  }
}

async function removeAddress(id){
  try {
    return await AddressRepo.removeAddress(id);
  } catch (error) {
    const errorMessage = error?.message || "Unknown error";
    throw new Error(`Error Fetching Profile: ${errorMessage}`);
  }
}

module.exports = {
  viewProfile,
  editProfile,
  addAddress,
  getAddress,
  getUserAddresses,
  editAddress,
  removeAddress
};
