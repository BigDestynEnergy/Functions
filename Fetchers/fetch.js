
const getData = async (url) => {
    try{
        const response = await fetch(url);

        if(!response.ok){
            throw new Error(`Request failed: ${response.status}`);
        }

        return response.json();
    } catch(err){
        console.log(err);
    }
    finally{
        console.log("Request timed out.");
    }
}