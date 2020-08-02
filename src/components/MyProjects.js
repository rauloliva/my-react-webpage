import React, { useState, useEffect } from 'react'
import axios from 'axios'
import moment from 'moment'

const Repo = ({ repo }) => {
    var date = moment(repo.created_at).format('MMM Do YYYY')
    var relativeTime = moment(repo.created_at, 'YYYYMMDD').fromNow()
    return (
        <div className='repo__container'>
            <h4 className='repo__container-header'>
                <span className='projectName'>{ repo.name }</span>
            </h4>
            <h4 className='repo__container-header'>
                <a className='repo__container-link' href={ repo.html_url }>Go to Github Repository</a>
            </h4>
            <h4 className='repo__container-header'>Respository Description:</h4>
            <p className='content__paragraph'>
                { repo.description }.
            </p>
            <p className='content__paragraph'>This project was created in { date }, { relativeTime }</p>
        </div>
    )
}

const handleLoading = () => {
    return (
        <span className="loading-box">Loading... Please wait</span>
    )
}

const MyProjects = () => {
    const [repos, setRepos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get('https://api.github.com/users/rauloliva/repos')
            .then( (response) => {
                setRepos(response.data)
                setLoading(false)
            })
    }, [setRepos])

    return (
        <div className="content">
            <div className="content-1">
                <p className="content__paragraph">
                    In this section I cover all of my projects, retrieved from my Github account
                </p>
                <p className="content__paragraph">
                    To get more details about the projects (including source code) press click in (<i>Go to Github Repository</i>)
                </p>
                <div className="repos" id="content">
                    { loading ? handleLoading() : '' }
                    { repos.map((repo, index) => <Repo key={ index } repo={ repo }/>) }
                </div>
            </div>
        </div>
    )
}

export default MyProjects