//     const token = 
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MTY4MTc5YzAyY2UyMWQ2OGQ5NGQ4YyIsImlhdCI6MTY5NzUyOTE2NCwiZXhwIjoxNjk3NjE1NTY0fQ.IXtace4duGuIqhYVJnFACJl_yJ_TKqDvfu_aUuFphuw";



// const fetchTest= async() => {

//     try {
//         const response = await fetch("http://localhost:3001/api/v1/user/profile", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
       
//         });
  
//         if (response.ok) {
//           const userData = await response.json();
//           console.log(userData.body.token);
//           console.log("recuperation :", userData);
//         } else {
//           console.error("Échec de la requête fetch :", response.status, response.statusText);
//         }
//       } catch (error) {
//         console.error("Erreur lors de la requête fetch :", error);
//       }
//     }



// method: "POST",
//   headers: {
    
//   },
//   body: JSON.stringify({
//     "email": "tony@stark.com",
//     "password": "password123"
//   }),
// });
// const formData = {
//   email: "sasddo@gmail.com",
//   password: "pasddsword123",
//   firstName: "saddso",
//   lastName: "rirddir",
//   userName: "sasddori",

// Encodez les données du formulaire en utilisant encodeURIComponent
// const encodedFormData = Object.keys(formData)
//   .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(formData[key])}`)
//   .join("&");

// const fetchTest = async () => {
//     const token = 
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MTY4MTc5YzAyY2UyMWQ2OGQ5NGQ4YyIsImlhdCI6MTY5NzUyOTE2NCwiZXhwIjoxNjk3NjE1NTY0fQ.IXtace4duGuIqhYVJnFACJl_yJ_TKqDvfu_aUuFphuw";


//     const formData = new FormData();
//     formData.append("email", "saso@gmail.com");
//     formData.append("password", "password123");
//     formData.append("firstName", "saso");
//     formData.append("lastName", "ririr");
//     formData.append("userName", "sasori");
  
  
//     try {
//       const response = await fetch("http://localhost:3001/api/v1/user/signup", {
//         method: "POST",
//         headers: {
//             "accept": "application/json",
//             "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: formData,
//       });
  
//       if (response.ok) {
//         const userData = await response.json();
//         console.log("Utilisateur ajouté :", userData);
//       } else {
//         console.error(
//           "Échec de la requête fetch :",
//           response.status,
//           response.statusText
//         );
//       }
//     } catch (error) {
//       console.error("Erreur lors de la requête fetch :", error);
//     }
//   };
  
//   export default fetchTest;
  
//     const token = 
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MTY4MTc5YzAyY2UyMWQ2OGQ5NGQ4YyIsImlhdCI6MTY5NzUyOTE2NCwiZXhwIjoxNjk3NjE1NTY0fQ.IXtace4duGuIqhYVJnFACJl_yJ_TKqDvfu_aUuFphuw";



const fetchTestPut= async(token, data) => {

    try {
        const response = await fetch("http://localhost:3001/api/v1/user/profile", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(data)
       
        });
  
        if (response.ok) {
          const userData = await response.json();
          console.log("recuperation :", userData);
        } else {
          console.error("Échec de la requête fetch :", response.status, response.statusText);
        }
      } catch (error) {
        console.error("Erreur lors de la requête fetch :", error);
      }
    }
    export default fetchTestPut;