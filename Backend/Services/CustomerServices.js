const CustomerRepo = require("../Repositories/CustomerRepository");

///////////////////////////////Profile////////////////////////////

async function viewProfile(id) {
    try{
        const customer = await CustomerRepo.getUserById(id);

        return customer;
    } catch(error) {
        throw new Error(`Error Fetching Profile: ${JSON.stringify(error)}`);
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
module.exports = {
    viewProfile,
    editProfile
}