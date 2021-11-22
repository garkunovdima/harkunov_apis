const DEFAULT_USER_AVATAR = 'https://w7.pngwing.com/pngs/867/694/png-transparent-user-profile-default-computer-icons-network-video-recorder-avatar-cartoon-maker-blue-text-logo.png';

console.log("https://jsonplaceholder.typicode.com/users");
console.log("https://jsonplaceholder.typicode.com/todos");

$(document).ready(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((responce) => {
            return responce.json();
        })
        .then((json) => {
            for (let i = 0; i < json.length; i++) {
                let userObject = json[i];
                //console.log(userObject);
                create_div(json[i]);
            }
        });
});

let counter = 0;

function create_div(user) {
    var field = $('<div>', {
        class: `my_card my-2 row card${counter}`,
        id: `card${counter}`
    }).appendTo("#my_data");

    $(`.card${counter}`).append(`<div class="card${counter}_img col-2"><div class="d-flex"><img class="img-fluid" src="${DEFAULT_USER_AVATAR}"/></div></div>`);
    $(`.card${counter}`).append(`<div class="card${counter}_data col-8"></div>`);
    $(`.card${counter}`).append(`<div class="card${counter}_buts col-2"></div>`);

    $(`.card${counter}_data`).append(`<div class="name_card">${user.name}</div>`);
    $(`.card${counter}_data`).append(`<div>User ID: ${user.id}</div>`);
    $(`.card${counter}_data`).append(`<div>Email: <a href="${user.email}">${user.email}<a/></div>`);
    $(`.card${counter}_data`).append(`<div>Company: ${user.company.name}</div>`);
    $(`.card${counter}_data`).append(`<div>Phone: ${user.phone}</div>`);
    $(`.card${counter}_data`).append(`<div>Website: <a href="${user.website}">${user.website}<a/></div>`);


    $(`.card${counter}_data`).append(`<button class="m-1 btn btn-danger btn_delete${counter}">Delete</button>`);
    $(`.card${counter}_data`).append(`<button class="m-1 btn btn-info btn_show${counter}">Show info</button>`);

    $(`.btn_delete${counter}`).on({
        click: function() {
            $(this).parent().parent().remove();
        }
    })
    $(`.btn_show${counter}`).on({
        click: function() {
            console.log(user);

            let str = '';

            for (key in user) {
                if (user[key] == "[object Object]") {
                    for (deep_key in user[key]) {
                        if (user[key][deep_key] == "[object Object]") {
                            for (very_deep_key in user[key][deep_key]) {
                                str += `${key}: ${deep_key}: ${very_deep_key}: ${user[key][deep_key][very_deep_key]}\n`;
                            }
                        } else {
                            str += `${key}: ${deep_key}: ${user[key][deep_key]}\n`
                        }
                    }
                } else {
                    str += `${key}: ${user[key]}\n`
                }
            }
            alert(str);
        }
    })

    counter++;
    console.log("func");

}