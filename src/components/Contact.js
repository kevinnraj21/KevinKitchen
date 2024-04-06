import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';


function Contact(){
    return(
        <div className="p-10 my-16 bg-orange-100 rounded-lg w-96 mx-auto">
            <h1 className="text-4xl font-semibold text-center">Contact Me</h1>

            <ul className="mt-10 text-center  text-xl">
                <li className="bg-orange-400 px-3 py-2 block my-5 rounded-md hover:bg-orange-500"><a href="https://www.linkedin.com/in/karan-raj-859079226"> <LinkedInIcon /> Karan Raj </a></li>
                <li className="bg-orange-400 px-3 py-2 block my-5 rounded-md hover:bg-orange-500"><a href="https://github.com/kevinnraj21"> <GitHubIcon /> kevinraj21 </a></li>
                <li className="bg-orange-400 px-3 py-2 block my-5 rounded-md hover:bg-orange-500"><MailIcon /> karanraj827010@gmail.com</li>
            </ul>
        </div>
    )
}

export default Contact;
