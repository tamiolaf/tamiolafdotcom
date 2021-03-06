import profile_pic from '../img/profile-pic.jpeg'
import ImageFadeIn from "react-image-fade-in";

function Home() {

return (
    <div className="App">
        <main className="App-main">
            <ImageFadeIn src={profile_pic} alt={'Tami Olafunmiloye'} className="profile-pic"/>
            <div style={{ backgroundColor: '#fff', marginTop: '.5rem', padding: '.5rem', border: '.1875rem solid black' }}>Hi, I'm Tami Olafunmiloye.</div>
            <div style={{ backgroundColor: '#fff', marginTop: '.75rem', padding: '.5rem', border: '.1875rem solid black' }}>I'm a full stack engineer with experience in finance and media! Check out my latest <a style={{ color: 'black' }} href="https://drive.google.com/file/d/1rQhSaJow16yhyrydc6dTgVXeZ4yILL2Q/view?usp=sharing">tech talk</a>.</div>
            <div style={{ backgroundColor: '#fff', marginTop: '.75rem', padding: '.5rem .75rem', border: '.1875rem solid black' }}>
                <a style={{ textDecoration: 'none', color: 'black' }} href="https://www.github.com/tamiolaf"> <i className="fab fa-github-square fa-3x"></i></a>
                <a style={{ textDecoration: 'none', color: 'black' }} href="https://www.linkedin.com/in/tamiolaf"> <i className="fab fa-linkedin fa-3x"></i></a>
                <a style={{ textDecoration: 'none', color: 'black' }} href="https://www.twitter.com/tamiolaf"> <i className="fab fa-twitter-square fa-3x"></i></a>
                <a style={{ textDecoration: 'none', color: 'black' }} href="mailto:tamiolaf@gmail.com"> <i className="fas fa-envelope-square fa-3x"></i></a>
            </div>
        </main>
    </div>
    )
}

export default Home;
