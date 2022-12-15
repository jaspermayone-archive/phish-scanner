import axios from "axios";
export const Walshy = async (link) => {
    const checkWalshyAPI = await axios.post("https://bad-domains.walshy.dev/check", {
        domain: link,
    });
    if (checkWalshyAPI.data.badDomain) {
        return true;
    }
    else {
        return false;
    }
};
