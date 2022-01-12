
class DateService {
    constructor(){}

    formatDate(date){
        if(!date){
            return;
        }
        return new Date(date).toLocaleDateString();
    }

}
const formatDate = new DateService();

export default formatDate;