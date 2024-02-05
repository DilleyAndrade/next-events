const DUMMY_EVENTS = [
  {
    id: 'e1',
    title: 'Galactic Harmony Festival',
    description:
      'Join us for a mesmerizing celebration of interstellar unity! The Galactic Harmony Festival brings together beings from across the cosmos for a day of music, art, and cultural exchange.',
    location: 'Celestial Plaza, Nebula City',
    date: '2021-06-15',
    image: 'images/galatic-harmony.jpg',
    isFeatured: true,
  },
  {
    id: 'e2',
    title: 'Quantum Tech Expo',
    description:
      "Explore the cutting edge of technological advancements at the Quantum Tech Expo! This event showcases the latest breakthroughs in quantum computing, artificial intelligence, and futuristic innovations.",
    location: 'Innovation Center, Techropolis',
    date: '2021-08-22',
    image: 'images/tech-expo.jpg',
    isFeatured: true,
  },
  {
    id: 'e3',
    title: 'Enchanted Masquerade Ball',
    description:
      'Step into a world of mystery and enchantment at the Enchanted Masquerade Ball. Adorn yourself in elegant masks and attire as you dance the night away in a magical setting.',
    location: 'Moonlit Manor, Enchanted Forest',
    date: '2022-10-31',
    image: 'images/mask.jpg',
    isFeatured: true,
  },
  {
    id: 'e4',
    title: 'Retro Future Film Festival',
    description:
      'Travel back in time to the future that never was at the Retro Future Film Festival! This cinematic journey explores the imaginative worlds envisioned by filmmakers from the past.',
    location: 'Time Warp Theater, Futurama City',
    date: '2022-11-14',
    image: 'images/retro-film.jpg',
    isFeatured: true,
  },
  {
    id: 'e5',
    title: 'AquaSymphony Water Light Show',
    description:
      'Immerse yourself in a mesmerizing display of water, light, and music at the AquaSymphony Water Light Show.',
    location: 'Aquatic Pavilion, Crystal Isles',
    date: '2022-4-8',
    image: 'images/violin.jpg',
    isFeatured: true,
  },
  {
    id: 'e6',
    title: 'CyberQuest Virtual Reality Expo',
    description:
      ' Step into the future of immersive experiences at the CyberQuest Virtual Reality Expo! Explore the latest advancements in virtual reality technology, from mind-bending simulations to groundbreaking VR gaming.',
    location: 'Virtual Nexus Center, Cyberspace City',
    date: '2022-3-25',
    image: 'images/vr.jpg',
    isFeatured: true,
  },
];

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  });

  return filteredEvents;
}

export function getEventById(id) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}