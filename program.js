const user = { id: 123, profile: { name: "John Doe", address: { city: "Los Angeles" } } };


let  user1={ id=flase || "Information not availabel", 
             profile:{ name= ""|| "Information not available", 
                       address:{ city= ""|| "Information not available",
                                 zipcode = false|| "Information not available"}}}=user;
display = (...userInfo) => ` User ${name} (ID: ${id}) lives in ${city} (ZIP: ${zipcode}) `; 

console.log(display(user1))