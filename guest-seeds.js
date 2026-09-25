(function () {
    const guestDirectorySeed = {
        "1": { nombre: "Kayla", pases: 1, ninos: 0 },
        "2": { nombre: "Harrison", pases: 1, ninos: 0 },
        "3": { nombre: "Bailee", pases: 1, ninos: 0 },
        "4": { nombre: "Jaxson", pases: 1, ninos: 0 },
        "5": { nombre: "Tommy", pases: 1, ninos: 0 },
        "6": { nombre: "Riley", pases: 1, ninos: 0 },
        "7": { nombre: "McKenna", pases: 1, ninos: 0 },
        "8": { nombre: "Owen", pases: 1, ninos: 0 },
        "9": { nombre: "Mikal", pases: 1, ninos: 0 },
        "10": { nombre: "Kelly", pases: 1, ninos: 0 },
        "11": { nombre: "Kat", pases: 1, ninos: 0 },
        "12": { nombre: "Angel", pases: 1, ninos: 0 },
        "13": { nombre: "Ben", pases: 1, ninos: 0 },
        "14": { nombre: "Anna & Juan", pases: 2, ninos: 0 },
        "15": { nombre: "Christian", pases: 1, ninos: 0 },
        "16": { nombre: "Touria", pases: 1, ninos: 0 },
        "17": { nombre: "Whitney", pases: 1, ninos: 0 },
        "18": { nombre: "Benji", pases: 1, ninos: 0 },
        "19": { nombre: "Diego", pases: 1, ninos: 0 },
        "20": { nombre: "Miggy", pases: 2, ninos: 0 },
        "21": { nombre: "Ray", pases: 1, ninos: 0 },
        "22": { nombre: "Joe de Matei", pases: 2, ninos: 0 },
        "23": { nombre: "Gino", pases: 1, ninos: 0 },
        "24": { nombre: "Tatiana", pases: 1, ninos: 0 },
        "25": { nombre: "Nicole", pases: 1, ninos: 0 },
        "26": { nombre: "Marjorie", pases: 2, ninos: 0 },
        "27": { nombre: "Sergio Meza y Esposa", pases: 2, ninos: 0 },
        "28": { nombre: "Ashley", pases: 2, ninos: 0 },
        "29": { nombre: "Natalie", pases: 1, ninos: 0 },
        "30": { nombre: "Katie", pases: 1, ninos: 0 },
        "31": { nombre: "Stacy", pases: 1, ninos: 0 },
        "32": { nombre: "Juan", pases: 1, ninos: 0 },
        "33": { nombre: "Olvido", pases: 1, ninos: 0 },
        "34": { nombre: "Pam", pases: 1, ninos: 0 },
        "35": { nombre: "Landon", pases: 1, ninos: 0 },
        "36": { nombre: "Brady", pases: 1, ninos: 0 },
        "37": { nombre: "Jasmine", pases: 1, ninos: 0 },
        "38": { nombre: "Nick & Savanna", pases: 2, ninos: 0 },
        "39": { nombre: "Estalin", pases: 1, ninos: 0 },
        "40": { nombre: "Rosa", pases: 1, ninos: 0 },
        "41": { nombre: "Adriana", pases: 1, ninos: 0 },
        "42": { nombre: "Eileen", pases: 1, ninos: 0 },
        "43": { nombre: "Ailani", pases: 1, ninos: 0 },
        "44": { nombre: "Ana Lucia y Luis Balladares", pases: 2, ninos: 0 },
        "45": { nombre: "Xxxxx", pases: 1, ninos: 0 },
        "46": { nombre: "Xxxxx", pases: 1, ninos: 0 },
        "47": { nombre: "Nicole", pases: 1, ninos: 0 },
        "48": { nombre: "Leysha", pases: 1, ninos: 0 },
        "49": { nombre: "Gustavo", pases: 1, ninos: 0 },
        "50": { nombre: "Rebeca", pases: 1, ninos: 0 },
        "51": { nombre: "Tatiana Morales", pases: 1, ninos: 0 },
        "52": { nombre: "Lori Maslowski", pases: 1, ninos: 0 },
        "53": { nombre: "Sara Frazier", pases: 1, ninos: 0 },
        "54": { nombre: "Sareyah Dad", pases: 1, ninos: 0 },
        "55": { nombre: "Melissa Perazzo", pases: 1, ninos: 0 },
        "56": { nombre: "Marjorie Trott", pases: 2, ninos: 0 },
        "57": { nombre: "Estalin & Rafaela", pases: 2, ninos: 0 }
    };

    const guestDirectoriesByEvent = {
        tonylopez2026: guestDirectorySeed
    };

    window.LocalGuestSeeds = {
        ...(window.LocalGuestSeeds || {}),
        ...guestDirectoriesByEvent
    };

    window.getLocalGuestDirectoryForEvent = function (eventId) {
        const safeEventId = String(eventId || "").trim();
        return guestDirectoriesByEvent[safeEventId] || {};
    };
}());
