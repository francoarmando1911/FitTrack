export default function Header() {
    return (
        <header className="relative w-full bg-gradient-to-t from-orange-600 to-rose-600 py-5">
            <svg
                className="absolute top-0 left-0 w-full h-32 -mt-10" 
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
            >
                <path
                    fill="rgba(255, 255, 255, 0.2)" 
                    d="M0,128L30,138.7C60,149,120,171,180,186.7C240,203,300,213,360,218.7C420,224,480,224,540,213.3C600,203,660,181,720,170.7C780,160,840,160,900,170.7C960,181,1020,203,1080,213.3C1140,224,1200,224,1260,218.7C1320,213,1380,203,1410,197.3L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320H0Z"
                ></path>
            </svg>
            <h1 className="text-center text-2xl md:text-4xl font-black text-white relative z-10">
                FitTrack
            </h1>
        </header>
    );
}
