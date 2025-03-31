export const obtenerApi = async () => {
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': import.meta.env.VITE_API_KEY,
        'x-rapidapi-host': 'the-vegan-recipes-db.p.rapidapi.com'
      }
    };
  
    try {
      const response = await fetch(import.meta.env.VITE_BASE_URL, options);
      const data = await response.json();
      console.log('Success - Conexión exitosa', data);
      return data; // Retornamos los datos obtenidos
    } catch (error) {
      console.log('Hubo un error', error);
      return null;
    }
  };
  