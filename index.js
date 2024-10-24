function QuoteCreator (content, author) {
    this.content = content;
    this.author = author;
}

// Create an array "quotes" that houses multiple variables(objects created via the QuoteCreator constructor function) with each object housing variables such as quoteText and quoteAuthor
var quotes = [new QuoteCreator("The best way to predict the future is to create it", "Abraham Lincoln"),
new QuoteCreator("Success is not final, failure is not fatal: It is the courage to continue that counts", "Winston Churchill"),
new QuoteCreator("Believe you can and you're halfway there", "Theodore Roosevelt"),
new QuoteCreator("Do what you can, with what you have, where you are", "Theodore Roosevelt"),
new QuoteCreator("The only limit to our realization of tomorrow is our doubts of today", "Franklin D. Roosevelt"),
new QuoteCreator("Don't watch the clock; do what it does. Keep going", "Sam Levenson"),
new QuoteCreator("Success usually comes to those who are too busy to be looking for it", "Henry David Thoreau"),
new QuoteCreator("You miss 100% of the shots you don't take", "Wayne Gretzky"),
new QuoteCreator("The harder you work for something, the greater you’ll feel when you achieve it", "Unknown"),
new QuoteCreator("Dream big and dare to fail", "Norman Vaughan"),
new QuoteCreator("Opportunities don't happen. You create them", "Chris Grosser"),
new QuoteCreator("Success is walking from failure to failure with no loss of enthusiasm", "Winston Churchill"),
new QuoteCreator("Success is not how high you have climbed, but how you make a positive difference to the world", "Roy T. Bennett"),
new QuoteCreator("The only place where success comes before work is in the dictionary", "Vidal Sassoon"),
new QuoteCreator("I find that the harder I work, the more luck I seem to have", "Thomas Jefferson"),
new QuoteCreator("Start where you are. Use what you have. Do what you can", "Arthur Ashe"),
new QuoteCreator("Don’t wait for opportunity. Create it", "George Bernard Shaw"),
new QuoteCreator("Your limitation—it’s only your imagination", "Unknown"),
new QuoteCreator("You don’t have to be great to start, but you have to start to be great", "Zig Ziglar"),
new QuoteCreator("Do something today that your future self will thank you for", "Sean Patrick Flanery"),
new QuoteCreator("It always seems impossible until it’s done", "Nelson Mandela"),
new QuoteCreator("Go as far as you can see; when you get there, you’ll be able to see further", "Thomas Carlyle"),
new QuoteCreator("Success is not in what you have, but who you are", "Bo Bennett"),
new QuoteCreator("The only way to do great work is to love what you do", "Steve Jobs"),
new QuoteCreator("Perseverance is not a long race; it’s many short races one after the other", "Walter Elliot"),
new QuoteCreator("If you really want to do something, you'll find a way. If you don't, you'll find an excuse", "Jim Rohn"),
new QuoteCreator("What lies behind us and what lies before us are tiny matters compared to what lies within us", "Ralph Waldo Emerson"),
new QuoteCreator("Do one thing every day that scares you", "Eleanor Roosevelt"),
new QuoteCreator("It does not matter how slowly you go as long as you do not stop", "Confucius"),
new QuoteCreator("Be the change that you wish to see in the world", "Mahatma Gandhi"),
new QuoteCreator("The harder the battle, the sweeter the victory", "Les Brown"),
new QuoteCreator("Fall seven times, stand up eight", "Japanese Proverb"),
new QuoteCreator("Happiness is not something ready-made. It comes from your own actions", "Dalai Lama"),
new QuoteCreator("Act as if what you do makes a difference. It does", "William James"),
new QuoteCreator("You are never too old to set another goal or to dream a new dream", "C.S. Lewis"),
new QuoteCreator("Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle", "Christian D. Larson"),
new QuoteCreator("With the new day comes new strength and new thoughts", "Eleanor Roosevelt"),
new QuoteCreator("The only way to achieve the impossible is to believe it is possible", "Charles Kingsleigh"),
new QuoteCreator("Keep your eyes on the stars, and your feet on the ground", "Theodore Roosevelt"),
new QuoteCreator("The biggest risk is not taking any risk", "Mark Zuckerberg"),
new QuoteCreator("The best revenge is massive success", "Frank Sinatra"),
new QuoteCreator("Life is 10% what happens to us and 90% how we react to it", "Charles R. Swindoll"),
new QuoteCreator("What you get by achieving your goals is not as important as what you become by achieving your goals", "Zig Ziglar"),
new QuoteCreator("You must expect great things of yourself before you can do them", "Michael Jordan"),
new QuoteCreator("To accomplish great things, we must not only act but also dream; not only plan but also believe", "Anatole France"),
new QuoteCreator("Strive not to be a success, but rather to be of value", "Albert Einstein"),
new QuoteCreator("In the end, we only regret the chances we didn’t take", "Lewis Carroll"),
new QuoteCreator("When you stop chasing the wrong things, you give the right things a chance to catch you", "Lolly Daskal"),
new QuoteCreator("We generate fears while we sit. We overcome them by action", "Dr. Henry Link"),
new QuoteCreator("Life is either a daring adventure or nothing at all", "Helen Keller"),
new QuoteCreator("To see what is right and not do it is a lack of courage", "Confucius"),
new QuoteCreator("Don’t count the days, make the days count", "Muhammad Ali"),
new QuoteCreator("The only thing standing between you and your goal is the story you keep telling yourself as to why you can’t achieve it", "Jordan Belfort"),
new QuoteCreator("Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless", "Jamie Paolinetti"),
new QuoteCreator("The best dreams happen when you’re awake", "Cherie Gilderbloom"),
new QuoteCreator("Challenges are what make life interesting and overcoming them is what makes life meaningful", "Joshua J. Marine"),
new QuoteCreator("You may have to fight a battle more than once to win it", "Margaret Thatcher"),
new QuoteCreator("Failure is the condiment that gives success its flavor", "Truman Capote"),
new QuoteCreator("Your life does not get better by chance, it gets better by change", "Jim Rohn"),
new QuoteCreator("Great things never came from comfort zones", "Neil Strauss"),
new QuoteCreator("Success is liking yourself, liking what you do, and liking how you do it", "Maya Angelou"),
new QuoteCreator("Don’t be afraid to give up the good to go for the great", "John D. Rockefeller"),
new QuoteCreator("We can’t help everyone, but everyone can help someone", "Ronald Reagan"),
new QuoteCreator("It is our choices that show what we truly are, far more than our abilities", "J.K. Rowling"),
new QuoteCreator("The only limit to our realization of tomorrow will be our doubts of today", "Franklin D. Roosevelt"),
new QuoteCreator("Success is getting what you want. Happiness is wanting what you get", "W.P. Kinsella"),
new QuoteCreator("If you want to fly, you have to give up the things that weigh you down", "Toni Morrison"),
new QuoteCreator("The road to success and the road to failure are almost exactly the same", "Colin R. Davis"),
new QuoteCreator("Success is not the key to happiness. Happiness is the key to success", "Albert Schweitzer"),
new QuoteCreator("If you are not willing to risk the usual, you will have to settle for the ordinary", "Jim Rohn"),
new QuoteCreator("If you want something you’ve never had, you must be willing to do something you’ve never done", "Thomas Jefferson"),
new QuoteCreator("Success seems to be connected with action. Successful people keep moving. They make mistakes, but they don’t quit"),
new QuoteCreator("If you want something you’ve never had, you must be willing to do something you’ve never done.", "Thomas Jefferson"),
new QuoteCreator("Success seems to be connected with action. Successful people keep moving. They make mistakes, but they don’t quit.", "Conrad Hilton"),
new QuoteCreator("A year from now you may wish you had started today.", "Karen Lamb"),
new QuoteCreator("Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.", "Roy T. Bennett"),
new QuoteCreator("If you cannot do great things, do small things in a great way.", "Napoleon Hill"),
new QuoteCreator("Success isn’t about how much money you make. It’s about the difference you make in people’s lives.", "Michelle Obama"),
new QuoteCreator("The only place where your dream becomes impossible is in your own thinking.", "Robert H. Schuller"),
new QuoteCreator("Your time is limited, so don’t waste it living someone else’s life.", "Steve Jobs"),
new QuoteCreator("Success is a state of mind. If you want success, start thinking of yourself as a success.", "Joyce Brothers"),
new QuoteCreator("Don’t let the fear of losing be greater than the excitement of winning.", "Robert Kiyosaki"),
new QuoteCreator("What lies behind us and what lies ahead of us are tiny matters compared to what lies within us.", "Ralph Waldo Emerson"),
new QuoteCreator("If you want to live a happy life, tie it to a goal, not to people or things.", "Albert Einstein"),
new QuoteCreator("All progress takes place outside the comfort zone.", "Michael John Bobak"),
new QuoteCreator("It does not matter how slowly you go as long as you do not stop.", "Confucius"),
new QuoteCreator("You are never too old to set another goal or to dream a new dream.", "C.S. Lewis"),
new QuoteCreator("Don’t let yesterday take up too much of today.", "Will Rogers"),
new QuoteCreator("He who is not courageous enough to take risks will accomplish nothing in life.", "Muhammad Ali"),
new QuoteCreator("The successful warrior is the average man, with laser-like focus.", "Bruce Lee"),
new QuoteCreator("The way to get started is to quit talking and begin doing.", "Walt Disney"),
new QuoteCreator("Success is not how high you have climbed, but how you make a positive difference to the world.", "Roy T. Bennett"),
new QuoteCreator("The secret to getting ahead is getting started.", "Mark Twain"),
new QuoteCreator("Only those who dare to fail greatly can ever achieve greatly.", "Robert F. Kennedy"),
new QuoteCreator("Don’t limit your challenges. Challenge your limits.", "Unknown"),
new QuoteCreator("If you can dream it, you can achieve it.", "Zig Ziglar"),
new QuoteCreator("Action is the foundational key to all success.", "Pablo Picasso"),
new QuoteCreator("The only way to do great work is to love what you do.", "Steve Jobs"),
new QuoteCreator("A winner is a dreamer who never gives up.", "Nelson Mandela"),
new QuoteCreator("Work hard in silence, let your success be your noise.", "Frank Ocean"),
]

var quoteBox = document.querySelector(".quote");
var authorBox = document.querySelector(".author");
var lastRandomNumber = null;

document.querySelector("button").addEventListener("click", () => {
    let randomNumber; 
    do {
        randomNumber = Math.floor(Math.random() * quotes.length);  // Generate a random number between 0 and the length of the quotes array
    } while (randomNumber === lastRandomNumber); 
    randomNumber === lastRandomNumber; 
    
    quoteBox.textContent = quotes[randomNumber].content;
    authorBox.textContent = quotes[randomNumber].author;
})