import "./footer.scss";

export default function Footer() {
    return (
        <div className="footer">
            <h4>
                &copy; {new Date().getFullYear()} Copyright | sept-dev.
            </h4>
        </div>
    )
}
