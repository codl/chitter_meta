/*
this script adds tiny avatars next to staff names in
the extended info

it's cute but idk if it's worth the hassle
*/

let account_links = Array.from(document.querySelectorAll('a[href^="https://chitter.xyz/@"]'));

for(let account_link of account_links){
    fetch(account_link.href, {'headers':
        {'accept': 'application/activity+json',}
    })
        .then(response => response.json())
        .then(json => json['icon']['url'])
        .then(url => {
            let img = document.createElement('img');
            img.src = url;
            img.style.height = '1em';
            img.style.borderRadius = '20%';
            account_link.parentElement.insertBefore(img, account_link);
            account_link.parentElement.insertBefore(document.createTextNode(' '), account_link);
        });
}
