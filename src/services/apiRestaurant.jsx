const API_URL = "https://react-fast-pizza-api.onrender.com/api";

export async function getMenu() {
    const res = await fetch(`${API_URL}/menu`);

    // fetch won't throw error on 400 errors (e.g when URL is wrong), so 
    // that we need to do it manually. This will then go into the catch block,
    // where the message is set

    if(!res.ok) throw Error("failed getting menu");

    const { data } = await res.json();
    return data;
}

export async function getOrder(id) {
    const res = await fetch(`${API_URL}/order/${id}`);
    if(!res.ok) throw Error(`Couldn't find order #${id}`);

    const { data } = await res.json();
    return data;
}

export async function createOrder(newOrder) {
    try {
        const res = await fetch(`${API_URL}/order`, {
         method: "POST",
         body: JSON.stringify(newOrder),
         headers: {
              "Content-Type": "application/json",
         },
        });
        console.log(res);
        console.log("Order Created");
        if(!res.ok) throw Error();
        const {data} = res.json();
        return data;
    }catch(err){
        console.log(err);
        throw Error("Failed creating your order");
    }
}


export async function updateOrder(id, updateObj) {
    try {
       const res = await fetch(`${API_URL}/order/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(updateObj),
        headers: {
            'Content-Type': 'application/json',
          },
       });

       if(!res.ok) throw Error();
       // We don;t need the data, so we don't return any response
    } catch(err) {
        throw Error(`Failed updating your order ${err}`);
    }
}
 



