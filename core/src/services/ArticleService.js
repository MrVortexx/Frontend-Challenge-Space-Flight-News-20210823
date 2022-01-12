import Api from './ApiService';


class ArticleService {
    constructor(){

    }
    getNoticias(filters){

        const params = new URLSearchParams();

        for (const filter in filters){
            const value = filters[filter]
            if(value){
                params.append(filter, value);
            }
        }

        return Api.get(this.host() + 'articles', {params})
    }
    host(){
        return process.env.REACT_APP_API_URL
    }
}
const articleService = new ArticleService();

export default articleService;

