import { Config } from "./Config";
import CryptoJS from 'crypto-js'

export const encrypt = (mssg) => {
    var encryptedAES = CryptoJS.AES.encrypt(mssg, Config.message_secret).toString();
    return encryptedAES;
}

export const decrypt = (encryptMssg) => {
    var decryptedAES = CryptoJS.AES.decrypt(encryptMssg, Config.message_secret).toString(CryptoJS.enc.Utf8);
    return decryptedAES;
}

export const getDateAndTime = (dateObj) => {
    let date = new Date(dateObj);
    var year = date.getFullYear();
    var mes = date.getMonth()+1;
    var dia = date.getDate();
    var fecha =`${dia}-${mes}-${year}`;
    return fecha;
}