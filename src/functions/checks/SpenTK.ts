import axios from "axios";

export const SpenTK = async (link: string) => {

    if (!link || link === "") {
        throw "Link not provided! || SpenTK.ts"
    }

    // make a request to the SpenTK API
    const response = await axios.get(`https://spen.tk/api/v1/isScamLink?link=${link}`)

   if (response.data.result) {
        return true;
    }

    return false;
}