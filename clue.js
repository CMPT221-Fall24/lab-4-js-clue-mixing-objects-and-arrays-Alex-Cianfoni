const suspectArray = [
  { firstName: 'Jon', lastName: 'Green', occupation: 'cook' },
  { firstName: 'Jacob', lastName: 'Green', occupation: 'banker' },
  { firstName: 'Jaciline', lastName: 'Green', occupation: 'baker' },
  { firstName: 'Jerry', lastName: 'Green', occupation: 'president' },
  { firstName: 'Jason', lastName: 'Green', occupation: 'multi level marketing advertiser' },
  { firstName: 'Jay', lastName: 'Green', occupation: 'nft maker' },
];

const weaponArray = ['knife', 'sink', 'kitchen aid', 'microscope', 'portable charging bank', 'portapotty', 'cup', 'toilet'];

const roomArray = ['office', 'rec area', 'mnt fuji', 'dresser', 'server room', 'daves house', 'factory', 'marist', 'mellissa driveway', 'my room'];

function selectRandom(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function pickMystery() {
  return {
    suspect: selectRandom(suspectArray),
    weapon: selectRandom(weaponArray),
    room: selectRandom(roomArray),
  };
}

function revealMystery(mystery) {
  return `${mystery.suspect.firstName} ${mystery.suspect.lastName} killed Mr. Marist using the ${mystery.weapon} in the ${mystery.room}!`;
}

document.addEventListener('DOMContentLoaded', () => {
  const revealButton = document.getElementById('revealButton');
  const mysteryMessage = document.getElementById('mysteryMessage');

  revealButton.addEventListener('click', () => {
      const mystery = pickMystery();
      mysteryMessage.textContent = revealMystery(mystery);
  });
});