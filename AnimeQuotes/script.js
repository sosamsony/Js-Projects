const anime = ['naruto', 'dbz', 'bleach', 'onepiece', 'tensura'];
const testContainer = document.querySelector(".test");

listAnime = anime.forEach((anime) => {
    return testContainer.innerHTML =   `<ul>
                                    <li>${anime}</li>
                                </ul>`
})