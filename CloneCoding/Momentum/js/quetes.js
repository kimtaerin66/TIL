//명령 모음 배열
const quotes = [
    {
        quote: "Everything in your world is created by what you think.",
        author: "Oprah Winfrey",
    },
    {
        quote: "Laughter is by definition healthy.",
        author: "Doris Lessing",
    },
    {
        quote: "If you don't learn to laugh at trouble, you won't have anything to laugh at when you're old.",
        author: "Edgar Watson Howe",
    },
    {
        quote: "Many an optimist has become rich by buying out a pessimist.",
        author: "Robert G. Allen",
    },
    {
        quote: "If we couldn't laugh, we would all go insane.",
        author: "Jimmy Buffett",
    },
    {
        quote: "Hope is necessary in every condition.",
        author: "Oprah Winfrey",
    },
    {
        quote: "Always laugh when you can. It is cheap medicine.",
        author: "Samuel Johnson",
    },
    {
        quote: "Laughter is the closest distance between two people.",
        author: "Victor Borge",
    },
    {
        quote: "One doesn't have a sense of humor. It has you.",
        author: "Larry Gelbart",
    },
    {
        quote: "Perpetual optimism is a force multiplier.",
        author: "Colin Powell",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const randomQuote = quotes[Math.floor(Math.random() * quotes.length-1)];



// 첫번째 span
quote.innerText = randomQuote.quote;
//두번째 span
author.innerText = randomQuote.author;



