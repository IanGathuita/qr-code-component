import avatar from '../Images/image-avatar.png';
export default function CardFooter(){
    return(
        <div className='card-footer'>
            <img src={avatar} alt="avatar"></img>
            <p>Creation of <span className='white-text'>Jules Wyvern</span></p>
        </div>
    )
}