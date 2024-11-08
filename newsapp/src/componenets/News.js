import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    articles = [
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "UAE jails 57 Bangladeshis over protests against own government",
            "description": "Three defendants were sentenced to life after being convicted of \"inciting riots\" in the Gulf state.",
            "url": "https://www.bbc.co.uk/news/articles/crgk8gnpg0zo",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/303f/live/e836a6a0-481a-11ef-9e1c-3b4a473456a6.jpg",
            "publishedAt": "2024-07-22T15:07:18.5709827Z",
            "content": "According to Wam, the trial of the 57 Bangladeshis heard that they had organised large-scale marches in several streets of the UAE in protest against decisions made by the Bangladeshi government.\r\nTh… [+805 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "What is Kamala Harris' 'brat' rebrand all about?",
            "description": "In the opening hours of her campaign she is leaning heavily into a trend popularised by popstar Charlie XCX.",
            "url": "https://www.bbc.co.uk/news/articles/cqqlgq7k374o",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/6ed9/live/c8ca7700-4820-11ef-9a09-9322e3b45458.jpg",
            "publishedAt": "2024-07-22T14:37:18.8839059Z",
            "content": "The #bratsummer trend has nearly one million posts on TikTok and the lime green theme has been used by thousands of individuals and businesses. \r\nIn recent weeks - as pressure to drop out of the race… [+1573 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Mass killer Louis van Schoor tells BBC of police collusion",
            "description": "Ex-security guard, Louis van Schoor, killed dozens in South Africa but was only jailed for seven murders.",
            "url": "https://www.bbc.co.uk/news/articles/c51yqdy3q61o",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/229c/live/a8aaa380-4520-11ef-b74c-bb483a802c97.jpg",
            "publishedAt": "2024-07-22T10:22:17.9779794Z",
            "content": "Tetinene Joe Jordan, a former anti-apartheid activist who was operating in East London at the time of Van Schoors killings, remembers this well.\r\nHe was hunting, literally hunting people, he says.\r\nV… [+2534 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "New Prince George photo released on his 11th birthday",
            "description": "Kensington Palace has posted the image, taken by his mother, Catherine, Princess of Wales.",
            "url": "https://www.bbc.co.uk/news/articles/cw4yxd3dw7qo",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/d483/live/f8c3d070-480a-11ef-9e1c-3b4a473456a6.jpg",
            "publishedAt": "2024-07-22T10:07:14.9437331Z",
            "content": "Catherine regularly takes photographs of her family, sharing them on social media to mark birthdays and special occasions.\r\nThis years photo of the prince, displayed in black and white, contrasts wit… [+609 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Hollywood stars praise Joe Biden and rally round Kamala Harris",
            "description": "Famous faces are quick to pay tribute to the US president, after he says he won't stand for re-election.",
            "url": "https://www.bbc.co.uk/news/articles/c1e5x1yyj5xo",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/e109/live/8a541840-4808-11ef-9e1c-3b4a473456a6.jpg",
            "publishedAt": "2024-07-22T09:07:16.5249764Z",
            "content": "\"There is nothing more important for our country than defeating Donald Trump at the ballot box,\" said De Niro, a fervent Trump critic.\r\nOscar-winning actress and singer Barbara Streisand praised Mr B… [+3082 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Biden's 'closely-held' decision took White House by surprise",
            "description": "Most of the president's senior aides found out about his decision to exit the race minutes before he publicly announced it.",
            "url": "https://www.bbc.co.uk/news/articles/c3gdzmdje5xo",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/8c54/live/aa6f7aa0-47b5-11ef-81c3-d95826f196b1.jpg",
            "publishedAt": "2024-07-22T01:37:10.3842815Z",
            "content": "Joe Biden's senior White House and campaign staff had spent the past week insisting the president planned to stay in the 2024 race despite an onslaught of calls within the Democratic party for him to… [+4313 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "What Biden quitting means for Harris, the Democrats and Trump",
            "description": "The announcement by Joe Biden has upended the 2024  White House race. Here are three key things to know.",
            "url": "https://www.bbc.co.uk/news/articles/cpwd8yzw45qo",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/7f80/live/c4b73920-47a6-11ef-b74c-bb483a802c97.jpg",
            "publishedAt": "2024-07-21T22:07:16.368933Z",
            "content": "Over the past half-century, political conventions have been transformed into somewhat boring affairs. With every minute carefully scripted for television, theyve become extended multi-day commercials… [+835 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Nipah virus: Kerala state issues alert after 14-year-old dies",
            "description": "The virus is transmitted from animals such as pigs and fruit bats to humans.",
            "url": "https://www.bbc.co.uk/news/articles/cj50d7e9vp6o",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/750c/live/e8adc3f0-4781-11ef-b74b-5f98efd74680.jpg",
            "publishedAt": "2024-07-21T21:22:13.72736Z",
            "content": "The Nipah virus infection is a \"zoonotic illness\" transmitted from animals like pigs and fruit bats to humans, according to the World Health Organization (WHO).\r\nIt can also be transmitted through co… [+1146 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Who can replace Joe Biden as Democratic presidential nominee?",
            "description": "Several rising stars in the party could enter the 2024 fray if Joe Biden steps aside.",
            "url": "https://www.bbc.co.uk/news/articles/c80ekdwk9zro",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/fb28/live/88dab420-36f0-11ef-bbe0-29f79e992ddd.jpg",
            "publishedAt": "2024-07-21T18:37:14.2909503Z",
            "content": "Various scenarios could play out over the coming days and weeks, but there are two ways Mr Biden's campaign could end: he could pull out willingly, or be forced to step aside by his own party.\r\nThe f… [+1619 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Couple found dead weeks after setting off on trip across Atlantic",
            "description": "Sarah Packwood and husband Brett Clibbery had set off from Nova Scotia and were heading for the Azores on their yacht, Theros",
            "url": "https://www.bbc.co.uk/news/articles/c84jxgy8nmlo",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/54ec/live/598e53b0-4745-11ef-9971-855061b2ee05.jpg",
            "publishedAt": "2024-07-21T10:52:10.0335127Z",
            "content": "In a post on Facebook, external, Mr Cribbery's son James confirmed the pair had died, saying that the last few days had been very hard.\r\nHe said the couple would be \"forever missed\", adding: \"There i… [+1208 chars]"
        }
    ]
    constructor() {
        super();
        console.log("hello i am a constructorfrom news component");
        this.state = {
            articles: this.articles,
            loading: false
        }
    }
     async componentDidMount()
    {
        let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=d6190a9f801b43d68b70ea48d9d0a0d3";
        let data= await fetch(url);
        let parsedData= await data.json();
        console.log(parsedData);
        this .setState({articles:parsedData.articles});
    }
    render() {
        return (
            <div className='container my-3'>
                <h2>NewsMania -Top Headlines</h2>
                <div className='row'>
                    {this.state.articles.map((element) => {

                        return (<div className="col-md-4" key={element.url} >
                            <NewsItem title={element.title?element.title:""} description={element.description?element.description .slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                        </div>)
                    })}
                </div>


            </div>




        )
    }
}
