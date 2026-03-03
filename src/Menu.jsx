const Menu = ({ downloadImage }) => {
    return (
        <div className="menu-cont">
            <button className="menu-btn" onClick={downloadImage}>Download</button>
            <button className="menu-btn" onClick={() => window.location.href = "https://github.com/Rohan-Shridhar/gridcraft"}>GitHub</button>
        </div>
    );
}