// import {setTimeout} from 'timers/promises';

const delay = ms => new Promise(res => setTimeout(res, ms));

async function submit() {
    console.log();
    let color = document.getElementById("colors").value;
    let suspect = "";
    let ele = document.getElementsByClassName("suspects");
    for (i = 0; i < ele.length; i++) {
        if (ele.type = "radio") {
            if (ele[i].checked) {
                suspect = ele[i];
            }
        }
    }
    let source = document.getElementById("news").checked ? "news" : "TikTok";
    q1(color, suspect, source);
    success();
}

async function q1(pcolor, psuspect, psource) {
    console.log("hello");
    let data = {color: pcolor, suspect: psuspect, source: psource};
    console.log(data);
    const response = await fetch('/api/v1/contacts/q1', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}            
    });
    success();
}

async function justin() {
    let colorparam = document.getElementById("colors").value;
    if (colorparam.length === 0) {
        error();
    }
    let data = {color: colorparam};
    const response = await fetch('/api/v1/contacts/justin', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}            
    });
    success();
}

async function brian() {
    let colorparam = document.getElementById("colors").value;
    if (colorparam.length === 0) {
        error();
    }
    let data = {color: colorparam};
    const response = await fetch('/api/v1/contacts/brian', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}            
    });
    success();
}

async function hj() {
    let colorparam = document.getElementById("colors").value;
    if (colorparam.length === 0) {
        error();
    }
    let data = {color: colorparam};
    const response = await fetch('/api/v1/contacts/hj', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}            
    });
    success();
}

async function kristen() {
    let colorparam = document.getElementById("colors").value;
    if (colorparam.length === 0) {
        error();
    }
    let data = {color: colorparam};
    const response = await fetch('/api/v1/contacts/kristen', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}            
    });
    success();
}

async function question2Yes() {
    const response = await fetch('/api/v1/contacts/question2Yes', {
        method: 'POST',
        body: '',
        headers: {'Content-Type': 'application/json'}            
    });
    success();
}

async function question2No() {
    const response = await fetch('/api/v1/contacts/question2No', {
        method: 'POST',
        body: '',
        headers: {'Content-Type': 'application/json'}            
    });
    success();
}

async function question2Error() {
    document.getElementById("ilikeit").style.visibility = "hidden";
    document.getElementById("ilikeit").disabled = "true";
    document.getElementById("neitherlikeordislike").innerHTML = "Don't be a fucking coward pick one.";
    document.getElementById("neitherlikeordislike").style.backgroundColor = "red";
    document.getElementById("idontlikeit").style.visibility = "hidden";
    document.getElementById("idontlikeit").disabled = "true";
    await delay(2000);
    document.getElementById("ilikeit").style.visibility = "visible";
    document.getElementById("ilikeit").disabled = "false";
    document.getElementById("neitherlikeordislike").innerHTML = "Maybe?";
    document.getElementById("neitherlikeordislike").style.backgroundColor = "#1e1e1e";
    document.getElementById("idontlikeit").style.visibility = "visible";
    document.getElementById("idontlikeit").disabled = "false";
}

async function question3Yes() {
    const response = await fetch('/api/v1/contacts/question3Yes', {
        method: 'POST',
        body: '',
        headers: {'Content-Type': 'application/json'}            
    });
    success();
}

async function question3No() {
    const response = await fetch('/api/v1/contacts/question3No', {
        method: 'POST',
        body: '',
        headers: {'Content-Type': 'application/json'}            
    });
    success();
}

async function question3Error() {
    document.body.style.background = "none";
    document.body.style.backgroundColor = "red";
    document.getElementById("ilikeit").style.visibility = "hidden";
    document.getElementById("ilikeit").disabled = "true";
    let maybe = document.getElementById("neitherlikeordislike");
    maybe.innerHTML = "FUCKING PICK ONE PLEBIANS";
    maybe.style.backgroundColor = "red";
    maybe.style.borderColor = "red";
    document.getElementById("idontlikeit").style.visibility = "hidden";
    document.getElementById("idontlikeit").disabled = "true";
    await delay(2000);
    document.body.style.backgroundColor = "black";
    document.body.style.backgroundImage = "url('./question-3.jpeg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";
    document.getElementById("ilikeit").style.visibility = "visible";
    document.getElementById("ilikeit").disabled = "false";
    maybe.innerHTML = "Maybe?";
    maybe.style.backgroundColor = "#1e1e1e";
    maybe.style.borderColor = "#1e1e1e";
    document.getElementById("idontlikeit").style.visibility = "visible";
    document.getElementById("idontlikeit").disabled = "true";
}

async function success() {
    const colors = document.getElementById("colors");
    colors.style.visibility = "hidden";
    colors.disabled = "true";
    const yes = document.getElementById("ilikeit");
    yes.style.visibility = "hidden";
    yes.disabled = "true";
    const no = document.getElementById("idontlikeit");
    no.style.visibility = "hidden";
    no.disabled = "true";
    const maybe = document.getElementById("neitherlikeordislike");
    maybe.disabled = "true";
    maybe.innerHTML = "Your vote makes real change :) Thanks for playing!";
    console.log('yo');
    const body = document.getElementsByTagName('body')[0];
    body.style.backgroundImage = "url('./whoDidItback.png')";
    console.log('yo yo');
    maybe.style.borderColor = "#1e1e1e";
}

// async function redditYes() {
//     const response = await fetch('/api/v1/contacts/addRedditYes', {
//         method: 'POST',
//         body: '',
//         headers: {'Content-Type': 'application/json'}            
//     });
// }

// async function redditNo() {
//     const response = await fetch('/api/v1/contacts/addRedditNo', {
//         method: 'POST',
//         body: '',
//         headers: {'Content-Type': 'application/json'}            
//     });
// }