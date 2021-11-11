const animeOL = document.querySelector('#animeOL')
const fetchquote = function () {
    const response = axios.get('https://animechan.vercel.app/api/quotes')
    return response
}


const consoleQuote = async () => {
    try {
        const res = await fetchquote()
        const quotesArray = res.data
        console.log(quotesArray)
        quotesArray.forEach(element => {
            const li = document.createElement('li')
            const li2 = document.createElement('li')
            const li3 = document.createElement('li')
            const ul = document.createElement('ul')
            const bold = document.createElement('b')
            const section = document.createElement('section')

            animeOL.appendChild(section)

            bold.append(`Anime: ${element.anime}`)
            li.append(bold)

            li.style.textDecorationStyle = 'underline'

            section.appendChild(li)

            li.appendChild(ul)

            li2.append(`Character: ${element.character}`)
            ul.append(li2)

            li3.append(`Quote: ${element.quote}`)
            ul.append(li3)


        });
    }

    catch (err) {
        console.log(`Error cause: ${err}`)
    }
}
consoleQuote()

