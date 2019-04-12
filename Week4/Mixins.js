const user = {
    name: null,
    adress: null,
    city: null, 
    state: null, 
    zipcode: null, 
    avatar: null, 
}

function getProfileUpdate() {
    console.log('Update profile')
    return updateProf = {
        name: "Hugo",
        address: "1925 E.7th",
        city: "Charlotte",
        state: "NC",
        zipcode: "28204",
        avatar: "img.jpg"
    }
}

function updateProfile() {
    Object.assign(user(getProfileUpdate));

}


console.log(updateProfile);