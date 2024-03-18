import reactLogo from '../Images/reactjs-icon.png'

export default function Navbar(props){
   return(
        <nav className={`navbar ${props.isDark ? 'dark' : 'light'}`}>       
            <img src={reactLogo} alt='' className='nav--icon' />
            <h3 className='nav--logo_text'>ReactFacts</h3>   
            <span className={`classToggle ${props.isDark ? 'notLight' : 'light'}`}>Light</span>
            <div className={`toggle-slider ${props.isDark ? 'active' : ''}`} onClick={props.toggleMode}>
                <div className='slider'></div>
            </div>
            <span className={`classToggle ${props.isDark ? 'dark' : 'notDark'}`}>Dark</span>
        </nav>
   )
}