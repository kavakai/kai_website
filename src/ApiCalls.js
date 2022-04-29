const urls = [
  "https://cors-anywhere.herokuapp.com/https://calm-headland-82293.herokuapp.com/",
  "https://cors-anywhere.herokuapp.com/https://fierce-plains-74115.herokuapp.com/",
  "https://cors-anywhere.herokuapp.com/https://worth-wild.herokuapp.com/",
  "https://cors-anywhere.herokuapp.com/https://radiant-lowlands-33922.herokuapp.com/"
]

export const wakeApps = () => {
  return urls.forEach(url => fetch(url))
}