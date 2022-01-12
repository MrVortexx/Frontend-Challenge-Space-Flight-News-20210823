class BrowserService {
    constructor() {}
     openSite(url){
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }
    getSiteHostname(url){
        return new URL(url).origin;
    }

}

const browserService = new BrowserService();

export default browserService;