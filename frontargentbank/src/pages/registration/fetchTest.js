


const fetchTest= async() => {

    try {
        const response = await fetch("http://localhost:3001/api/v1/user/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            "email": "tony@stark.com",
            "password": "password123"
          }),
        });
  
        if (response.ok) {
          const userData = await response.json();
          console.log(userData.body.token);
          console.log("Utilisateur ajouté :", userData);
        } else {
          console.error("Échec de la requête fetch :", response.status, response.statusText);
        }
      } catch (error) {
        console.error("Erreur lors de la requête fetch :", error);
      }
    }



export default fetchTest;
