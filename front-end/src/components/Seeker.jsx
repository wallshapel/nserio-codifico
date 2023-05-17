import React, { useState } from 'react';
import { Card } from './Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export const Seeker = () => {

	const [ info, setInfo ] = useState({});
	const [ error, setError ] = useState(false);

	const seek = async (userName) => {
		try {
			const res = await fetch('https://api.github.com/users/' + userName);
			if (res.ok) {
				const data = await res.json();
				setInfo({
					text: userName,
					username: data.login,
					avatar_url: data.avatar_url,
					created_at: data.created_at,
					name: data.name,
					location: data.location,
					twitter_username: data.twitter_username,
					blog: data.blog,
					public_repos: data.public_repos,
					followers: data.followers,
					following: data.following
				});	
				setError(false);
			} else if (res.status === 404) setError(true);
		} catch (e) {

		}		
	};

	return (	

		<div className="center-content">
			<h1>Find GitHub User</h1>
			<form action="#">
				<div className="search__form">	    			
	    			<input type='text' placeholder="Type here..." onChange={ e => seek(e.target.value) } autoFocus /> 
	    			<FontAwesomeIcon className="i" icon={ faMagnifyingGlass } />
	            </div>	
			</form>            
			<Card info={ info } error={ error } />
		</div>
	);

};