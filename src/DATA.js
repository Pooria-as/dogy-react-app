import Breeds from "./img/-Breeds-.jpg"
import Pitbull from "./img/pitbull.jpg"
import Tubby from "./img/tubby.jpg"

const DATA=[
    {
        id:'dog-1',
        name: "Whiskey",
        age: 5,
        src: Breeds,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        id:'dog-2',
        name: "Jacky",
        age: 3,
        src: Pitbull,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        id:'dog-3',
        name: "Tubby",
        age: 4,
        src: Tubby,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      }
]
export default DATA;