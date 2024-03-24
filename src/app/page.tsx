'use client';
import Head from 'next/head';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import IndexDataFetch from '../../components/IndexDataFetch';
import '../../public/assets/css/extra.css'

interface CurrentQuote {
    quote: string;
    author: string;
}

export default function Home() {
    const quotes = [
        { quote: "Success is the sum of small efforts, repeated day in and day out.", author: "Robert Collier" },
        { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
        { quote: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
        { quote: "If you are not willing to risk the usual, you will have to settle for the ordinary.", author: "Jim Rohn" },
        { quote: "The mind is everything. What you think you become.", author: "Buddha" },
        { quote: "Whether you think you can or think you can't, you're right.", author: "Henry Ford" },
        { quote: "Life isn't about finding yourself. Life is about creating yourself.", author: "George Bernard Shaw" },
        { quote: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" },
        { quote: "The difference between ordinary and extraordinary is that little extra.", author: "Jimmy Johnson" },
        { quote: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
        { quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.", author: "Mahatma Gandhi" },
        { quote: "Logic will get you from A to B. Imagination will take you everywhere.", author: "Albert Einstein" },
        { quote: "The only true wisdom is in knowing you know nothing.", author: "Socrates" },
        { quote: "Happiness is not something ready-made. It comes from your own actions.", author: "Dalai Lama" },
        { quote: "All our dreams can come true, if we have the courage to pursue them.", author: "Walt Disney" },
        { quote: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.", author: "Martin Luther King Jr." },
        { quote: "Don't let yesterday take up too much of today.", author: "Will Rogers" },
        { quote: "If you want to live a happy life, tie it to a goal, not to people or things.", author: "Albert Einstein" },
        { quote: "The person who reads too much and uses his brain too little will fall into lazy habits of thinking.", author: "Albert Einstein" },
        { quote: "Insanity is doing the same thing, over and over again, but expecting different results.", author: "Often attributed to Einstein, but likely derived from Narcotics Anonymous" },
        { quote: "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do.", author: "Mark Twain" },
        { quote: "The real voyage of discovery consists not in seeking new landscapes, but in having new eyes.", author: "Marcel Proust" },
        { quote: "You can never cross the ocean until you have the courage to lose sight of the shore.", author: "Christopher Columbus" },
        { quote: "I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas Edison" },
        { quote: "Build your own dreams, or someone else will hire you to build theirs.", author: "Farrah Gray" },
        { quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
        { quote: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.", author: "Thomas A. Edison" },
        { quote: "In the end, we only regret the chances we didn't take.", author: "Lewis Carroll" },
        { quote: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
        { quote: "Education is the most powerful weapon which you can use to change the world.", author: "Nelson Mandela" },
        { quote: "The world is a book and those who do not travel read only one page.", author: "Saint Augustine" },
        { quote: "A ship in harbor is safe, but that is not what ships are built for.", author: "John A. Shedd" },
        { quote: "Everything you can imagine is real.", author: "Pablo Picasso" },
        { quote: "Do one thing every day that scares you.", author: "Eleanor Roosevelt" },
        { quote: "It is never too late to be what you might have been.", author: "George Eliot" },
        { quote: "To live is the rarest thing in the world. Most people exist, that is all.", author: "Oscar Wilde" },
        { quote: "The only person you are destined to become is the person you decide to be.", author: "Ralph Waldo Emerson" },
        { quote: "The information is not knowledge. The knowledge is not wisdom. The wisdom is not truth.", author: "Frank Zappa" },
        { quote: "If you cannot do great things, do small things in a great way.", author: "Napoleon Hill" },
        { quote: "Change your thoughts and you change your world.", author: "Norman Vincent Peale" },
        { quote: "Information is power. But like all power, there are those who want to keep it for themselves.", author: "Aaron Swartz" },
        { quote: "It's not OK to violate the privacy of ordinary people because the powerful might break the law.", author: "Aaron Swartz" },
        { quote: "Think deeply about things. Don't just go along because that's the way things are or that's what your friends say. Consider the effects, consider the alternatives, but most importantly, just think.", author: "Aaron Swartz" }
    ];


    var initialQuote;

    const [currentQuote, setCurrentQuote] = useState<CurrentQuote | undefined>(initialQuote); 
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        var wH = window.innerHeight;
        var wW = window.innerWidth;
        var domBody = document.body;

        (function (n) {
            var leftArr = [20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 60, 65, 70, 75, 80];
            var delayArr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50];

            for (var i = 0; i < n; i++) {
                var leftEle = leftArr[Math.floor(Math.random() * leftArr.length)] + parseFloat(Math.random().toFixed(2));
                var delayEle = delayArr[Math.floor(Math.random() * delayArr.length)] * 1000 + Math.round(Math.random() * 700);
                var div = document.createElement('div');
                div.className = 'star comet';
                div.setAttribute('style', 'left:' + leftEle + '%;animation-delay:' + delayEle + 'ms;');
                domBody.appendChild(div);
            }
        })(25);

        (function (n) {
            for (var i = 0; i < n; i++) {
                var div = document.createElement('div');
                div.className = i % 20 == 0 ? 'star star--big' : i % 9 == 0 ? 'star star--medium' : 'star';
                // random everywhere!
                div.setAttribute('style', 'top:' + Math.round(Math.random() * wH) + 'px;left:' + Math.round(Math.random() * wW)
                    + 'px;animation-duration:' + (Math.round(Math.random() * 3000) + 3000) + 'ms;animation-delay:' + Math.round(Math.random() * 3000) + 'ms;');
                domBody.appendChild(div);
            }
        })(150);

        const fetchRandomQuote = () => {
            setIsLoading(true);
            // Troque por lógica simples para teste
            const randomIndex = Math.floor(Math.random() * quotes.length);
            setCurrentQuote(quotes[randomIndex]);
            setIsLoading(false);
        };

        fetchRandomQuote();
    }, []);

    return (
        <>
            <Head>
                <title>Success is the sum of small efforts</title>
            </Head>
            <IndexDataFetch userId="236651138747727872" />
            <div className="container">
                <div className="card">
                    {/* Exiba a frase e o autor */}
                    {isLoading ? (
                        <p>Carregando...</p>
                    ) : currentQuote ? ( // Verifique `currentQuote` explicitamente
                        <>
                            <h1>{currentQuote.quote}</h1>
                            <p>- {currentQuote.author}</p>
                            <Link href="/welcome" as="/welcome" style={{ fontWeight: 'bold' }}>
                                Continuar <FontAwesomeIcon icon={faArrowAltCircleRight} style={{ fontSize: 14, color: "rgba(235, 36, 109, 0.788)" }} />
                            </Link>
                        </>
                    ) : null // Ou retorne `null` para não renderizar nada
                    }
                </div>
            </div>
        </>
    );
}

