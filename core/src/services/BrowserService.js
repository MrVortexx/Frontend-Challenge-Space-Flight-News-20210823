class BrowserService {
    constructor() {}
     openSite(url){
         console.log(url)
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }
    getSiteHostname(url){
        console.log(url, 'olha aqui')
        return new URL(url).origin;
    }

}

const browserService = new BrowserService();

export default browserService;