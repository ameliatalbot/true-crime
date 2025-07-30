// import {setTimeout} from 'timers/promises';

const delay = ms => new Promise(res => setTimeout(res, ms));

function bluh() {
    console.log("hi");
    let suspect = "";
    let ele = document.getElementsByClassName("suspects");
    for (i = 0; i < ele.length; i++) {
        if (ele.type = "radio") {
            if (ele[i].checked) {
                suspect = ele[i].value;
            }
        }
    }
    let source = document.getElementById("news").checked ? "news" : "tt";
    return suspect, source;
}

async function q1() {
    let psuspect, psource = bluh();
    console.log("in q1 async");
    let data = {suspect: psuspect, source: psource};
    console.log(data);
    const response = await fetch('/api/v1/contacts/q1', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}            
    });
    success();
}

async function q2() {
    let psuspect, psource = bluh();
    console.log("in q2 async");
    let data = {suspect: psuspect, source: psource};
    console.log(data);
    const response = await fetch('/api/v1/contacts/q2', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}            
    });
    success();
}

async function q3() {
    let psuspect, psource = bluh();
    console.log("in q3 async");
    let data = {suspect: psuspect, source: psource};
    console.log(data);
    const response = await fetch('/api/v1/contacts/q3', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}            
    });
    success();
}

async function q4() {
    let psuspect, psource = bluh();
    console.log("in q4 async");
    let data = {suspect: psuspect, source: psource};
    console.log(data);
    const response = await fetch('/api/v1/contacts/q4', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}            
    });
    success();
}

async function success() {
    const colors = document.getElementById("colors");
    colors.style.visibility = "hidden";
    colors.disabled = "true";
    console.log("disabling");
    const yes = document.getElementsByTagName("input");
    for (i=0; i < yes.length;i++) {
        console.log('updating inputs');
        yes[i].style.display = "none";
        yes[i].disabled = "true";
    }
    const no = document.getElementsByTagName("label");
    console.log(no);
    for (i=0; i < no.length;i++) {
        console.log('updating labels');

        no[i].style.display = "none";
        no[i].disabled = "true";
    }
    const maybe = document.getElementById("sub");
    maybe.disabled = "true";
    maybe.innerHTML = "Your vote makes real change :) Thanks for playing!";
    const body = document.getElementsByTagName('body')[0];
    body.style.backgroundImage = "url('./whoDidItback.png')";
    maybe.style.borderColor = "#1e1e1e";
}
