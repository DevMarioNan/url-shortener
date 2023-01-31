import axios from "axios";

const base = "https://gotiny.cc/api	";

const options ={
    headers: {
        "Content-Type": "application/json"
    }
}

export const shorten = async (url) => {
    const res = await axios(
        {
            method: "POST",
            url: base,
            data: {
                input:url
            },
            options
        }
    );
    return res;
}