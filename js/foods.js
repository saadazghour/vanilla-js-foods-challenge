/*
  Hi there! Thanks for taking on this code test. The requirements are listed below:

  1. Create a "Foods" class or constructor that will take two arguements: a root element and a data object (foodData).
  2. Render all of the items in the data object into the DOM with the root element as the parent
  3. If the user clicks a food item, it should be removed from the list

  Rules:
  - Only vanilla JS
  - Feel free to use Google, Bing, DuckDuckGo to look things up
  - Time limit: 30 minutes
*/


/* DO NOT MODIFY */
const rootElement = document.querySelector('.foods');

const foodData = [
  {
    id: 1,
    image: '🌮',
    name: 'taco'
  },
  {
    id: 2,
    image: '🍔',
    name: 'burger'
  },
  {
    id: 3,
    image: '🍆',
    name: 'eggplant'
  },
  {
    id: 4,
    image: '🍎',
    name: 'apple'
  },
  {
    id: 5,
    image: '🥞',
    name: 'pancakes'
  },
];
/* DO NOT MODIFY */


/** YOUR CODE BELOW **/

class Foods{
  constructor(rootElement, foodData){
    this._root = rootElement
    this._data = foodData

    this._render()
  }

  createElement(item){
    const li = document.createElement("li")
    li.className = "food-item"
    li.dataset.id = String(item.id)

    const imgSpan = document.createElement("span")
    imgSpan.className = "food-image"
    imgSpan.textContent = item.image

    const nameSpan = document.createElement("span")
    nameSpan.className = "food-name"
    nameSpan.textContent = item.name

    li.appendChild(imgSpan)
    li.appendChild(nameSpan)

    return li
  }

  _render() {

    // Clear previous content
    this._root.innerHTML = ""

    // const ul = document.createElement("ul")
    // ul.className = "foods-list"

    // using document fragement instead, It's create a copy of an Element.
    // Advantage using fragement here, We're appending we are constantly updating DOM
    // It's mean re-rendering, performance reason. then w're appending once here.

    const fragement = document.createDocumentFragment()

   this._data.forEach((item)=>{
      // const li = this.createElement(item)
      // ul.appendChild(li)
     fragement.appendChild(this.createElement(item))
  })

    // this._root.appendChild(ul)
    this._root.appendChild(fragement)

    // Add event listener once (after rendering)
    // we use event delegation -> listen on root.
    this._root.addEventListener("click", event => {
      const { target } = event
      target.remove()
    })

  }
}

const app = new Foods(rootElement, foodData)
