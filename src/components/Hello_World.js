//Inside the intent we are declarating communication from client to Alen AI
//inside the reply function we are saying what we want from Alen to answer
intent('What does this app do?', 'Hello Berina', reply('Ċao svima šta ima'));

const NEWS_API_KEY='e18eb7268c344d7a893c64959eb4b601';
let savedArticles = [];

//creating API for getting news by source
//(.*) what we want from user to say
//with this line we are making generic solution instead of using it hard coded
intent('Give me the news from $(source* (.*))',(p)=>{
    let NEWS_API_URL = `https://newsapi.org/v2/top-headlines?apiKey=${NEWS_API_KEY}`;
    //retreiving the value from source that's word from voice recognition
    if(p.source.value){
        NEWS_API_URL = `${NEWS_API_URL}&sources=${p.source.value.toLowerCase().split(" ").join('-')}`;
    }
    const headers = {
    'User-Agent': 'ai-react-news-application/0.1.0',
    };
    api.request(NEWS_API_URL,{headers},(error,response,body)=>{
        const { articles } = JSON.parse(body);
//         if(articles?.length===0){
//             p.play('Sorry, please try searching for news from a different source');
//             return;
//         }
//         
        if(articles?.length===0){
             p.play('Try to search news from different source');
            return;
        } 
        p.play({command: 'newHeadlines',articles});
        //sometimes on reading Alen will say latest and sometimes recent to sound
        //more as a human
        p.play(`Here are the (latest | recent) ${p.source.value}.`);
    });
})

//news by specific term
intent('What\'s up with $(term* (.*))',(p)=>{
    let NEWS_API_URL = `https://newsapi.org/v2/everything?apiKey=${NEWS_API_KEY}`;
    //retreiving the value from source that's word from voice recognition
    if(p.term.value){
        NEWS_API_URL = `${NEWS_API_URL}&q=${p.term.value}`;
    }
    const headers = {
    'User-Agent': 'ai-react-news-application/0.1.0',
    };
    api.request(NEWS_API_URL,{headers},(error,response,body)=>{
        const { articles } = JSON.parse(body);
//         if(articles?.length===0){
//             p.play('Sorry, please try searching for news from a different source');
//             return;
//         }
//         
        if(articles?.length===0){
             p.play('Try to search something else.');
            return;
        } 
        p.play({command: 'newHeadlines',articles});
        //sometimes on reading Alen will say latest and sometimes recent to sound
        //more as a human
        p.play(`Here are the (latest | recent) articles on ${p.term.value}.`);
    });
})

intent('What\'s up with $(term* (.*))',(p)=>{
    let NEWS_API_URL = `https://newsapi.org/v2/everything?apiKey=${NEWS_API_KEY}`;
    //retreiving the value from source that's word from voice recognition
    if(p.term.value){
        NEWS_API_URL = `${NEWS_API_URL}&q=${p.term.value}`;
    }
    const headers = {
    'User-Agent': 'ai-react-news-application/0.1.0',
    };
    api.request(NEWS_API_URL,{headers},(error,response,body)=>{
        const { articles } = JSON.parse(body);
//         if(articles?.length===0){
//             p.play('Sorry, please try searching for news from a different source');
//             return;
//         }
//         
        if(articles?.length===0){
             p.play('Try to search something else.');
            return;
        } 
        p.play({command: 'newHeadlines',articles});
        //sometimes on reading Alen will say latest and sometimes recent to sound
        //more as a human
        p.play(`Here are the (latest | recent) articles on ${p.term.value}.`);
    });
})



