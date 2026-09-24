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
        "10": { nombre: "Kelly", pases: 1, ninos: 0 }
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
