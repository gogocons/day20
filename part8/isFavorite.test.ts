import User from "./typeUser";
import isFavorite from "./isFavorite";

const user1:User = {favoriteShows: ['Lost', 'Sopranos', 'Breaking Bad', 'Something Else', 'Something Really Deep']};
const userLong:User = {favoriteShows: ['Lost', 'Sopranos', 'Breaking Bad', 'Something Else', 'Something Really Deep', '6', '7', '8', '9', '10', '11']};
const userShort:User = {favoriteShows: ['Lost', 'Sopranos']};

it('checks if the name passed in the function is contained in the user favoriteShows array', function() {
  expect(isFavorite(user1, 'Breaking Bad')).toBe(true);
})

it("check if throw error function is working for long array", function () {
  expect(() => {
    isFavorite(userLong, 'Lost');
  }).toThrow(new Error("too many favorite shows, im not checking, fml"));
});

it("check if throw error function is working for short array", function () {
  expect(() => {
    isFavorite(userShort, 'Sopranos');
  }).toThrow(new Error("not worth my time to check"));
});