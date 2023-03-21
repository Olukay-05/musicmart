import { GoogleLogin } from "react-google-login";


const clientId = "424483526692-muhblov1snhppbi16bkt5ubkcruh2md5.apps.googleusercontent.com"


const GoogleSignUp = () => {

    const handleGoogleSuccess = (response) => {
        console.log(response); // Handle successful Google sign up
    };
      
      const handleGoogleFailure = (response) => {
        console.log(response); // Handle Google sign up failure
    };

    return(
        <div id="signInButton">
            <GoogleLogin
                clientId={ clientId }
                buttonText="Sign up with Google"
                onSuccess={handleGoogleSuccess}
                onFailure={handleGoogleFailure}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    )
}

export default GoogleSignUp;
