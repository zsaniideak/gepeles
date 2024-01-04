function gepeles(szoveg) {
    if (typeof szoveg !== "string" || szoveg === "")       
        return "HIBA!";

    const felhasznalok = szoveg.split(";").map(felhasznalonev => felhasznalonev.trim());    

    if (felhasznalok.length === 1)              
        return `${felhasznalok[0]} eppen gepel...`;

    if (felhasznalok.length === 2)  
        return `${felhasznalok[0]} es ${felhasznalok[1]} eppen gepel...`;

    return `${felhasznalok[0]}, ${felhasznalok[1]} es ${felhasznalok.length - 2} tovabbi felhasznalo eppen gepel...`;
}