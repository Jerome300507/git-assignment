import React from "react";


function Sections() {
    return (
        <div className="sections">

            <h1>
                We are a <span>Creative</span>Design Agency
            </h1>

            {/* Beauty Section */}
            <div className="section">
                <img src="/images/beauty.jpg"alt="Beauty"/>
                <h3>Beauty</h3>
                <p> I create clean and visully appealing designs that make websites stand out and feel modern</p>
            </div>


             {/* Construction Section */}
             <div className="section">
                <img src="/images/construction.jpg" alt="Construction" />
                <h3>Costruction</h3>
                <p> I build responsive and functional websites from scratch using modern web technologies</p>
             </div>
        </div>
    );
}

export default Sections;