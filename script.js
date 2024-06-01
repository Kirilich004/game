function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

// На странице выбора уровней:

let levelPassedOne = getCookie('levelPassedOne');
let levelPassedTwo = getCookie('levelPassedTwo');

// Если все уровни пройдены, удаляем класс "disable" у ссылки на второй уровень
if (levelPassedOne === 'true') {
    document.getElementById('level2link').classList.remove('disable');
}

if (levelPassedTwo === 'true') {
    document.getElementById('level3link').classList.remove('disable');
}
