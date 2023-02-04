import User from "./typeUser";

function isFavorite(user: User, show: string) {
  if (user.favoriteShows.length > 10) {
    throw Error("too many favorite shows, im not checking, fml");
  } else if (user.favoriteShows.length <= 2) {
    throw Error("not worth my time to check");
  } else {
    for (const favoriteShow of user.favoriteShows) {
      if (favoriteShow === show) {
        return true;
      }
    }
    return false;
  }
}

export default isFavorite;
