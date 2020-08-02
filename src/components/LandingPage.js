import React from 'react'
import Photo from '../img/photo.png'

const LandingPage = () => {
    return (
        <div className="content">
            <div className="content-1">
                <img src={ Photo } className="content__img" alt="Myself"/>
                <h2 className="content__title">I'm a Software Developer, self-taugh and passionate about what I do.</h2>
                <p className="content__paragraph">
                    Welcome to my web page, I was born in Mexico city in 1997.
                    My awesome jorney as a software developer started in 2015, since my first day in colleague.
                    My three main purposes as a professional software developer are develop and maintain applications and Softwares to achieve the customer's satisfaction when consuming the deliverables, grow professionally and keep learning throughout my career and last but not least enjoy while applying my two first goals.
                </p>

                <h2 className="content__title u-margin-top-2">My Programming background</h2>
                <p className="content__paragraph">
                    Programming got my attention just when I was 16 year old, in the summer of 2014 I got curious on how a web page is made so I started to watch some videos on how to implement a technology called HTML and the structure of tags and even for the folder and files.
                    In the next year I got into a computer science career, where I learn different programming languages like JAVA, Javascript, PHP, C and SQL among other interesting topics like algorthims and Artificial Intelligence.
                </p>

                <h2 className="content__title u-margin-top-2">My Programming Projects</h2>
                <p className="content__paragraph">
                    I have created a special section to display with more detail the projects I've been working on since I started my career with the source links form Github or the links where the project itself it's hosted, but not all of them are web projects.
                </p>
            </div>
        </div>
    )
}

export default LandingPage;