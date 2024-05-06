import smallStar from './images/small-star.svg'
import demoIcon from './images/demo-icon.svg'
import githubIcon from './images/github-icon.svg'

const username = 'mariuszwuteefowicz'
const direction = '' /*desc*/
const projectsContainer = document.querySelector('.projects--js');

console.log ('Hey! Wanna talk - send me a message: mariusz.c008@protonmail.com')

fetch(`https://api.github.com/users/${username}/repos?direction=${direction}`)
.then(response => response.json())
.then(response => {
    for (let repository of response) {
        const {description, name,stargazers_count, html_url, topics, homepage} = repository;

        let tags = ``;
        for (let tag of topics) {
            tags += `<li class="bg-gray-400/10 py-1 px-2 rounded text-sm font-bold">${tag}</li>`
        }

        const element = `<article class="rounded-wtf md:rounded-wtf-xl overflow-clip bg-gradient-to-br from-white/10 to-white/5 flex flex-col h-full">
        <div class="h-11 p-4 flex gap-1.5 shadow-innerlight rounded-t-wtf md:rounded-t-wtf-xl bg-gradient-to-br from-white/10 to-white/5 ring-1 ring-inset ring-bg">
            <span class="w-3 h-3 block rounded-full bg-bg opacity-50"></span>
            <span class="w-3 h-3 block rounded-full bg-bg opacity-50"></span>
            <span class="w-3 h-3 block rounded-full bg-bg opacity-50"></span>
        </div>
        <div class="p-5 md:p-6 lg:p-10 flex flex-col justify-between grow">
            <div>
                <header class="flex gap-4 items-center mb-4">
                    <h3 class="text-2xl leading-none font-bold">${name}</h3>
                    <p class="bg-gray-400/10 py-1 px-2 flex gap-0.5 items-center text-gray-400 font-medium leading-none"><img src="${smallStar}" alt="" class="w-3 h-4">${stargazers_count}</p>
                </header>
                <p class="text-gray-400 text-xl mb-4">${description}</p>
                <ul class="flex gap-2 mb-10 flex-wrap">
                    ${tags}
                </ul>
            </div>
            <div class="flex flex-col flex-wrap md:flex-row gap-4 items-start">
                <a href="${homepage}" target="blank" rel="noreferrer nofollow" class="bg-bg text-accent flex gap-3 font-bold py-4 px-5 items-center rounded-wtf md:rounded-xl md:text-xl border-gray-800 border-2 hover:border-accent transition-colors duration-500"><img src="${demoIcon}" class="w-6 h-6 width="24" height="24" alt=""> View demo</a>
                <a href="${html_url}" target="blank" rel="noreferrer nofollow" class="bg-bg text-accent flex gap-3 font-bold py-4 px-5 items-center rounded-wtf md:rounded-xl md:text-xl border-gray-800 border-2 hover:border-accent transition-colors duration-500"><img src="${githubIcon}" class="w-6 h-6" width="24" height="24" alt="">Source code</a>
            </div>
        </div>
        </article>`
        if (homepage) projectsContainer.insertAdjacentHTML("beforeend", element)
    }
})
.catch((e) => console.log(e))