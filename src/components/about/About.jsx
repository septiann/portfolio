import { useState } from "react";
import "./about.scss"

export default function About() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            id: "1",
            icon: "",
            title: "",
            desc: "",
            img: ""
        },
        {
            id: "2",
            icon: "",
            title: "",
            desc: "",
            img: ""
        },
        {
            id: "3",
            icon: "",
            title: "",
            desc: "",
            img: ""
        }
    ];

    const handleClick = (way) => {
        way === "left"
            ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
            : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    }

    return (
        <div className="about" id="about">
            <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                <div className="container ctr1">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <h2>About Me</h2>
                                <p>
                                    I am a back-end developer who currently works in one of the companies in South Jakarta engaged in a digital agency. I have experience in web development. My daily job is to fix bugs, create features and perform system maintenance within the website development environment.
                                </p>
                                <span></span>
                            </div>
                        </div>
                        <div className="right">
                            <img src="./assets/project1.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className="container ctr2">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <h2>Tech Stacks</h2>
                                <div className="imgContainer">
                                    <img src="https://cdn-icons-png.flaticon.com/512/919/919827.png" alt="" />
                                    <img src="https://cdn-icons-png.flaticon.com/512/919/919826.png" alt="" />
                                    <img src="https://cdn-icons-png.flaticon.com/512/919/919828.png" alt="" />
                                    <img src="https://cdn-icons-png.flaticon.com/512/919/919831.png" alt="" />
                                    <img src="https://cdn-icons-png.flaticon.com/512/919/919836.png" alt="" />
                                    <img src="https://cdn-icons-png.flaticon.com/512/919/919851.png" alt="" />
                                    <img src="https://cdn-icons-png.flaticon.com/512/919/919825.png" alt="" />
                                    <img src="https://cdn-icons-png.flaticon.com/512/919/919830.png" alt="" />
                                    <img src="https://cdn-icons-png.flaticon.com/512/919/919847.png" alt="" />
                                </div>
                                <a href="https://github.com/septiann" target="_blank" rel="noreferrer">More...</a>
                            </div>
                        </div>
                        <div className="right">
                            <img src="./assets/project2.jpg" alt="" />
                        </div>
                    </div>
                </div>

                <div className="container ctr1">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <h2>Contact Information</h2>
                                <div className="imgContainer">
                                    <a href="https://instagram.com/septianngrh4" target="_blank" rel="noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="" /></a>
                                    <a href="https://twitter.com/septianngrh4" target="_blank" rel="noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/174/174876.png" alt="" /></a>
                                    <a href="https://wa.me/6281282060532" target="_blank" rel="noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/174/174879.png" alt="" /></a>
                                    <a href="https://www.linkedin.com/in/septianngrh4/" target="_blank" rel="noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" /></a>
                                    <a href="https://github.com/septiann/" target="_blank" rel="noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/919/919847.png" alt="" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <img src="https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <img src="assets/arrow.png" className="arrow left" alt="" onClick={() => handleClick("left")} />
            <img src="assets/arrow.png" className="arrow right" alt="" onClick={() => handleClick()} />
        </div>
    )
}
