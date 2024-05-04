interface Band {
  name: string,
  foundationYear: number,
  isActive: boolean,
  musicalGenre: string
}

const genrePopRock = "🎵 Pop Rock"
const genreHardRock = "🤟 Hard Rock"
const genreRock = "🎸 Rock"
const genreClassic = "🎼 Clásica"

const guitar = '🎸'
const musicGroups: Band[] = [
  { name: "The Beatles", foundationYear: 1960, isActive: true, musicalGenre: genrePopRock },

  { name: "Queen", foundationYear: 1970, isActive: false, musicalGenre: genreRock },
  { name: "AC DC", foundationYear: 1973, isActive: true, musicalGenre: genreHardRock },
  { name: "Ludwig van Beethoven", foundationYear: 1970, isActive: false, musicalGenre: genreClassic },
  { name: "The Rolling Stones ", foundationYear: 1962, isActive: true, musicalGenre: genreRock },
]

musicGroups.forEach((musicGroup) => {
  console.log(
    `%c ${musicGroup.name} %c / ${musicGroup.foundationYear} / Activo: ${musicGroup.isActive} / ${musicGroup.musicalGenre} `,
    'background: green; font-weight: bold; font-size:20px',
    '',
  );

})
