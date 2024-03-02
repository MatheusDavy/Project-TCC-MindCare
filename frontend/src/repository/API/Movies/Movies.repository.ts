import * as Fetch from '../../../utils/fetch/Fetch.service';
import { IRepositoryRequirements } from '../../repositories.common';

export function MoviesRepository ({ baseUrl }: IRepositoryRequirements) {
    const url = `${baseUrl}/movies/`;

    function getMovieCategories () {
        const urlFetch = `${url}/categories`;
        return Fetch.get({ url: urlFetch });
    }

    return {
        getMovieCategories
    };
}
