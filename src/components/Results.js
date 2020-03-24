import React from 'react'
import Result from './Result';

function Results({ results }) {
    return (
        <section className="results">
            {results.map(result => {
                console.log(result);
            })}
        </section>
    )
}

export default Results
