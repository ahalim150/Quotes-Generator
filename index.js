var random;
var last_index = -1;

function newQuote(){
    do {
        random = Number.parseInt(Math.random()*quotes.length);
    } while (random === last_index)
    
    console.log(random)
    last_index = random;
    document.getElementById('quote').textContent = `${quotes[random].quote}`;
    document.getElementById('author').textContent = `${quotes[random].author}`;
}

// function newQuote(){
//     do {
//         random = quotes[Number.parseInt(Math.random()*quotes.length)];
//     } while (random === last_index)
    
//     console.log(random)
//     last_index = random;
//     document.getElementById('quote').textContent = random.quote;
//     document.getElementById('author').textContent = random.author;
// }


const quotes = [
    {
        quote: "“Be yourself; everyone else is already taken.”",
        author: "― Oscar Wilde"
    },
    {
        quote: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
        author: "― Marilyn Monroe"
    },
    {
        quote: "“So many books, so little time.”",
        author: "― Frank Zappa"
    },
    {
        quote: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        author: "― Albert Einstein"
    },
    {
        quote: "“A room without books is like a body without a soul.”",
        author: "― Marcus Tullius Cicero"
    },
    {
        quote: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
        author: "― Bernard M. Baruch"
    },
    {
        quote: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
        author: "― Dr. Seuss"
    },
    {
        quote: "“You only live once, but if you do it right, once is enough.”",
        author: "― Mae West"
    },
    {
        quote: "“Be the change that you wish to see in the world.”",
        author: "― Mahatma Gandhi"
    },
    {
        quote: "“In three words I can sum up everything I've learned about life: it goes on.”",
        author: "― Robert Frost"
    },
    {
        quote: "“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”",
        author: "― J.K. Rowling,"
    },
    {
        quote: "“If you tell the truth, you don't have to remember anything.”",
        author: "― Mark Twain"
    },
    {
        quote: "“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”",
        author: "― Maya Angelou"
    },
    {
        quote: "“A friend is someone who knows all about you and still loves you.”",
        author: "― Elbert Hubbard"
    },
    {
        quote: "“To live is the rarest thing in the world. Most people exist, that is all.”",
        author: "― Oscar Wilde"
    },
    {
        quote: "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
        author: "― Mahatma Gandhi"
    },
    {
        quote: "“We accept the love we think we deserve.”",
        author: "― Stephen Chbosky,"
    },
    {
        quote: "“Without music, life would be a mistake.”",
        author: "― Friedrich Nietzsche,"
    },
    {
        quote: "“I am so clever that sometimes I don't understand a single word of what I am saying.”",
        author: "― Oscar Wilde,"
    },
    {
        quote: "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",
        author: "― Ralph Waldo Emerson"
    },
    {
        quote: "“It is better to be hated for what you are than to be loved for what you are not.”",
        author: "― Andre Gide,"
    }
];