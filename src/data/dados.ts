import {faker} from "@faker-js/faker"



export const products = Array.from({length:5}).map(() => {
   const firstName = faker.person.firstName()
   const lastName=faker.person.lastName()


   const randomCategory = faker.helpers.arrayElement(['nature', 'wild', 'technology', 'animals']) 


    return{
    id:faker.number.int({min:1,  max:100}),
    fullName:faker.person.fullName({ firstName: firstName, lastName: lastName }),
    firstName:firstName,
    lastName:lastName,
    avatar:faker.image.avatar(),
    username:faker.internet.userName({firstName:firstName,lastName:lastName}),
    text:faker.hacker.phrase(),
    image:faker.image.urlLoremFlickr({category:randomCategory,width:900,height:600}) // 'https://loremflickr.com/128/480?lock=1234'

   }
})