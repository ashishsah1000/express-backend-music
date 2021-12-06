export default class httpService {
    // constructor() {

    // }

    get(url) {
        return fetch(url, {
          method: "GET",
          // headers: { "content-type": "application/json" }
        })
          .then((response) => response.json())
          .then((res) => {
            console.log(res);
            // setData(res);
            return res;
          })
          .catch((err) => console.log(err));
      };

    post(url, data) {
        return fetch("http://localhost:3000/a/focus/create/",{
            method : 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(res => { 
            // setButtonText("Add other job")
            console.log("response received : ", res)
            return res;
        })
        .catch((err)=>console.log(err));
    }
}