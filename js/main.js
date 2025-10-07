// alert("La buena guana bana");


document.querySelector('button').addEventListener('click', getPoem)


// const img = "https://quickchart.io/wordcloud?text=How%soon hath Time, the subtle thief of youth,,Stoln on his wing my three and twentieth year!,My hasting days fly on wtih full career,,But my late spring no bud or blossom shew'th.,Perhaps my semblance might deceive the truth,,That I to manhood am arrived so near,,And inward ripeness doth much less appear,,That some more timely-happy spirits endu'th.,Yet be it less or more, or soon or slow,,It shall be still in strictest measure even,To that same lot, however mean or high,,Toward which Time leads me, and the will of Heaven;,All is, if I have grace to use it so,,As ever in my great Taskmaster's eye."


function getPoem () {
    const api_URL = "https://poetrydb.org/random/1.text"
    const poemPlace = document.querySelector('p').innerHTML

    document.querySelector('p').innerHTML = ''

    fetch(api_URL)
    .then(res => res.json())
    .then(data => {
        console.log(data)
            document.querySelector('p').innerHTML += `<div><img>${data[0].lines}</div>`
            getCloud(data[0].lines)
}

)}

// Mentor Karim Hassan helped me debug this to get the image to populate
function getCloud (text) {
    const cloud_URL = "https://quickchart.io/wordcloud?text="
    const imgText = document.querySelector('div').innerHTML
    console.log(text.join(' '))
    const cleanText = encodeURIComponent(text.slice(0,20).join(' '))
    console.log(cleanText)
    fetch(`https://quickchart.io/wordcloud?text=${cleanText}`)
    .then(res => { 
    document.querySelector('img').src = res.url
})

}