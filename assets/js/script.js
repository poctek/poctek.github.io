let tags = [
  "Vim",
  "Elixir",
  "Ruby",
  "JavaScript",
  "Databases",
  "JuniorDevForLife",
  "MachineLearning"
]

let tagContainer = document.getElementById("tag-container")

if (tagContainer) {
  let randomIndex = Math.floor(Math.random("") * (tags.length))
  tagContainer.textContent = tags[randomIndex]
}
