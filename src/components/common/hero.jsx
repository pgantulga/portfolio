import background from '../../assets/coding.jpg';

const Hero = ({ title, subtitle }) => {
    return (
        <>
            <div id="hero-section">
                <img className='background-image' src={background} alt="coding" />
                <div className='content'>
                    <h1>{title}</h1>
                    <h2>{subtitle}</h2>
                </div>
                <svg className='svg' width="100%" viewBox="0 0 1442 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M83.3605 9.912C-30.4279 19.907 -203 53.6229 -203 53.6229V94H1662V3.24423C1662 3.24423 1529.9 -2.34949 1445.96 3.24423C1324.45 11.3419 1263.85 43.283 1142.73 53.6229C1010.69 64.895 934.137 63.2134 801.793 53.6229C678.947 44.7206 615.078 19.5889 492.367 9.912C333.773 -2.59448 241.685 -3.99498 83.3605 9.912Z" fill="url(#paint0_linear_69_886)" />
                    <path d="M83.3605 16.912C-30.4279 26.907 -203 60.6229 -203 60.6229V101H1662V10.2442C1662 10.2442 1529.9 4.65051 1445.96 10.2442C1324.45 18.3419 1263.85 50.283 1142.73 60.6229C1010.69 71.895 934.137 70.2134 801.793 60.6229C678.947 51.7206 615.078 26.5889 492.367 16.912C333.773 4.40552 241.685 3.00502 83.3605 16.912Z" fill="#F0FDFA" />
                    <defs>
                        <linearGradient id="paint0_linear_69_886" x1="-203" y1="50.5" x2="1662" y2="50.5" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#0F766E" />
                            <stop offset="1" stopColor="#D9F99D" />
                        </linearGradient>
                    </defs>
                </svg>

               
            </div>

        </>



    )
}
export default Hero;

// <div id="hero-section" className='image'>
//         <h1>My name is Gantulga,</h1>
//         <h2>I am Front-end developer</h2>
//         <Link to="/about" className="homeBtn">About Me</Link>
//     </div>

