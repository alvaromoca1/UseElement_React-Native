// https://yts.lt/api/v2/movie_suggestions.json?movie_id=10
const BASE_API='https://yts.lt/api/v2/';
class API{
    async getSuggestion(id){
        // las peticiones se hacen con fech el cual utiliza promesas
        const query =await fetch(`${BASE_API}movie_suggestions.json?movie_id=${id}`);
        const {data}= await query.json();
        return data;
    }

}
export default new API();