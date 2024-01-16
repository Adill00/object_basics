// 2
const personalProfile = {
    firstName: 'Adil',
    lastName: 'Aliyev',
    age: 19, 
    favouriteLanguage: 'Java',
    contactInfo: {
      email: 'a.aliyev4@ufaz.az',
      phone: '50 552 55 22' 
    }
  };

// 3
personalProfile['occupation'] = 'Developer';

personalProfile.contactInfo['address'] = 'Z.Xelil 40A, Yasamal';


// 4
console.log('Personal Profile:', personalProfile);


// heresinden bir dene 1-1
console.log('First Name:', personalProfile.firstName);
console.log('Last Name:', personalProfile['lastName']);

console.log('Age:', personalProfile.age);
console.log('Favourite Language:', personalProfile['favouriteLanguage']);

console.log('Email:', personalProfile.contactInfo.email);
console.log('Phone:', personalProfile.contactInfo['phone']);

console.log('Occupation:', personalProfile.occupation);
console.log('Address:', personalProfile.contactInfo['address']);

