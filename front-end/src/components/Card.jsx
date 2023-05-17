import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch, faUsers, faUser, faBlog, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

export const Card = ({ info, error }) => {
    if (info.text === undefined || info.text === '') {
        return (
            <></>
        )
    }

	if (error) {
		return (	
			<div className="error">
				<p>There are no users that meet the search criteria</p>
			</div>
		);
	}    

	if (!error) {
		return (	
			<div className="card_item">
                
                <div className="green-bg">
    				<p className="created_at">{ info.text === undefined ? '' : info.text.toUpperCase() }</p>
    				<img src={ info.avatar_url } alt='' />
                    <p className="created_at">{ info.created_at }</p>
                </div>

				<div className="blue-bg">
                    <h1>{ info.name }</h1>
                    <ul>
                        <li><FontAwesomeIcon icon={ faLocationDot } /> { info.location }</li>
                        <li><FontAwesomeIcon icon={ faTwitter } /> @{ info.twitter_username }</li>
                    </ul>
                    <a href={ info.blog }><FontAwesomeIcon icon={ faBlog } /> { info.blog }</a>
                    <ul>
                        <li>
                            <b>REPOS</b>
                            <p><FontAwesomeIcon icon={ faCodeBranch } /></p>
                            { info.public_repos }
                        </li>
                        <li>
                            <b>FOLLOWERS</b>
                            <p><FontAwesomeIcon icon={ faUsers } /></p>
                            { info.followers }
                        </li>
                        <li>
                            <b>FOLLOWING</b>
                            <p><FontAwesomeIcon icon={ faUser } /></p>
                            { info.following }
                        </li>
                    </ul>
                </div>
			</div>
		);
	}	

}