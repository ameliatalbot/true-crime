async function tiktokYes() {
    const response = await fetch('/api/v1/contacts/addTiktokYes', {
        method: 'POST',
        body: '',
        headers: {'Content-Type': 'application/json'}            
    });
}

async function tiktokNo() {
    const response = await fetch('/api/v1/contacts/addTiktokNo', {
        method: 'POST',
        body: '',
        headers: {'Content-Type': 'application/json'}            
    });
}

async function tiktokEh() {
    const response = await fetch('/api/v1/contacts/addTiktokMaybe', {
        method: 'POST',
        body: '',
        headers: {'Content-Type': 'application/json'}            
    });
}

function tiktokError() {
    document.body.style.background = "none";
    document.body.style.backgroundColor = "red";
    document.getElementById("ilikeit").style.display = "none";
    document.getElementById("neitherlikeordislike").style.display = "none";
    document.getElementById("idontlikeit").style.display = "none";

}

async function redditYes() {
    const response = await fetch('/api/v1/contacts/addRedditYes', {
        method: 'POST',
        body: '',
        headers: {'Content-Type': 'application/json'}            
    });
}

async function redditNo() {
    const response = await fetch('/api/v1/contacts/addRedditNo', {
        method: 'POST',
        body: '',
        headers: {'Content-Type': 'application/json'}            
    });
}