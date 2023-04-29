export async function getAuthenticationData(name, password) {
    let data = {
        correoElectronico: name,
        password: password
    }

    const url = 'http://localhost:3001/login';
    const options = {
        method: "POST",
        credentials:"include",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }
    const rawResponse = await fetch(url, options)
    const response = await rawResponse.json();
    return response;
}

export async function tokenValidation(){
    const url = 'http://localhost:3001/auth';
    const options = {
        method: "GET",
        credentials:"include",
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const rawResponse = await fetch(url, options)
    const response = await rawResponse.json();
    return response;
}

export async function tokenID(){
    const url = 'http://localhost:3001/id';
    const options = {
        method: "GET",
        credentials:"include",
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const rawResponse = await fetch(url, options)
    const response = await rawResponse.json();
    return response;
}

export async function sessionDelete() {
    const url = 'http://localhost:3001/logout';
    const options = {
        method: "POST",
        credentials:"include",
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const rawResponse = await fetch(url, options)
    const response = await rawResponse.json();
    window.location.replace('/');
    return response;
}

export async function userViaticos(){
    const id_user = await tokenID();
    const url = 'http://localhost:3001/user/' + JSON.stringify(id_user);
    console.log(url);
    const options = {
        method: "GET",
        credentials:"include",
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const rawResponse = await fetch(url, options)
    const response = await rawResponse.json();
    return response;
}
