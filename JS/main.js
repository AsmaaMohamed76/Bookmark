var siteName = document.getElementById("siteName")
var siteURL = document.getElementById("siteURL")
var subBtn = document.getElementById("subBtn")
var search = document.getElementById("search")
var siteList =[]

if (localStorage.getItem("bookmarks") != null) {
    siteList = JSON.parse(localStorage.getItem("bookmarks"))
    displayBookmark(siteList)
}
// ADD BOOKMARK FUNCTION
subBtn.addEventListener("click", addBookmark)
function addBookmark(){
    bookmark = {
        name: siteName.value,
        url: siteURL.value
    };
    siteList.push(bookmark)
    localStorage.setItem("bookmarks", JSON.stringify(siteList))
    clear()
    console.log(siteList)
    displayBookmark(siteList)

}
// CLEAR BOOKMARK FUNCTION
function clear() {
    siteName.value = null
    siteURL.value = null
}
// DISPLAY BOOKMARK FUNCTION
function displayBookmark(array){
    var cartona = ""
    for (index = 0; index < array.length; index++) {
        cartona += `
        <tr>
                <td>${index + 1}</td>
                <td>${array[index].name}</td>              
                <td>
                  <button onclick="visit('${array[index].url}')" class="btn btn-visit" data-index="${index}">
                    <i class="fa-solid fa-eye pe-2"></i>Visit
                  </button>
                </td>
                <td>
                  <button onclick="deleteBookmark(${index})" class="btn btn-delete pe-2" data-index="${index}">
                    <i class="fa-solid fa-trash-can"></i>
                    Delete
                  </button>
                </td>
            </tr>
        `
    }
    document.getElementById("content").innerHTML = cartona;
}
// VISITBOOKMARK URL FUNCTION
function visit(url) {
    window.open(url)
}
// DELETE BOOKMARK FUNCTION
function deleteBookmark(index) {
    siteList.splice(index, 1)
    localStorage.setItem("bookmarks", JSON.stringify(siteList))
    displayBookmark(siteList)
}
// SEARCH FUNCTION
search.addEventListener("input",bookSearch)
function bookSearch(){
    var book = search.value
    search.value.toLowerCase()
    var searchList =[]
    for ( index = 0; index < siteList.length; index++) {
        if (siteList[index].name.toLowerCase().includes(book)) {
            searchList.push(siteList[index])
        }
    }
    displayBookmark(searchList)

}

