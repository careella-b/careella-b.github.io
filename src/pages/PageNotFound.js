/**
 * Page not found 
 * 
 * Displayed when incorrect path is used
 */

function PageNotFound() {
    return (
        <div className="pt-30 pl-20 pb-30">
            <p className="black-color">Page Not Found.</p>
            <a href='/' className="black-color underline">Click here to return home</a>
        </div>
    );
}

export { PageNotFound };
