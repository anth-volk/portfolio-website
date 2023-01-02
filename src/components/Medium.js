// External imports
import React, { useState, useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser';

// Internal exports
import './Medium.css';

export default function Medium() {

    // State variables
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const RSS2JSON = "https://api.rss2json.com/v1/api.json?rss_url=";
    const src = "https://medium.com/feed/@anth-volk";

    useEffect(() => {

        // Fetch RSS feed of Medium articles
        fetch(RSS2JSON.concat(src))
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            else {
                throw response;
            }
        })
        .then(stream => {
            const output = stream.items.map( (item, index) => ({
                title: item["title"],
                pubDate: item["pubDate"],
                link: item["link"],
                content: item["content"],
                thumbnail: item["thumbnail"]
            }));
            setData(output);
        })
        .catch(error => {
            console.log("Error: ", error);
            setError(error);
        })
        .finally(() => {
            setLoading(false);
        });
    }, []);

    if (loading) {
        return (
            <p>Module loading...</p>
        );
    }
    else if (error) {
        return (
            <p>{`Module error: ${error}`}</p>
        );
    }
    else {

        const articleJSX = data.map( (item, index) => {

            return (
                <div className="Medium_card" key={index}>
                    <h1 className="Medium_cardTitle">{item.title}</h1>
                    <p className="Medium_cardDate">{item.pubDate}</p>
                    <div className="Medium_cardContent">{ ReactHtmlParser(item.content) }</div>
                </div>
            );
        });

        return (
            <>
                {articleJSX}
            </>
        );
    }


}