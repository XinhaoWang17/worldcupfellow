// 2026 FIFA World Cup — Official Venues
// 16 stadiums across USA (11), Canada (2), Mexico (3)

export interface Venue {
  id: string;
  name: string;
  city: string;
  country: 'USA' | 'Canada' | 'Mexico';
  capacity: number;
}

export const VENUES: Venue[] = [
  // USA
  { id: 'sofi', name: 'SoFi Stadium', city: 'Los Angeles', country: 'USA', capacity: 70240 },
  { id: 'metlife', name: 'MetLife Stadium', city: 'New York / New Jersey', country: 'USA', capacity: 82500 },
  { id: 'att', name: 'AT&T Stadium', city: 'Dallas', country: 'USA', capacity: 80000 },
  { id: 'levis', name: "Levi's Stadium", city: 'San Francisco Bay Area', country: 'USA', capacity: 68500 },
  { id: 'lumen', name: 'Lumen Field', city: 'Seattle', country: 'USA', capacity: 68740 },
  { id: 'gillette', name: 'Gillette Stadium', city: 'Boston', country: 'USA', capacity: 65878 },
  { id: 'hardrock', name: 'Hard Rock Stadium', city: 'Miami', country: 'USA', capacity: 65326 },
  { id: 'mbenz', name: 'Mercedes-Benz Stadium', city: 'Atlanta', country: 'USA', capacity: 71000 },
  { id: 'nrg', name: 'NRG Stadium', city: 'Houston', country: 'USA', capacity: 72220 },
  { id: 'arrowhead', name: 'Arrowhead Stadium', city: 'Kansas City', country: 'USA', capacity: 76416 },
  { id: 'lincoln', name: 'Lincoln Financial Field', city: 'Philadelphia', country: 'USA', capacity: 69176 },
  // Canada
  { id: 'bmo', name: 'BMO Field', city: 'Toronto', country: 'Canada', capacity: 45736 },
  { id: 'bc', name: 'BC Place', city: 'Vancouver', country: 'Canada', capacity: 54500 },
  // Mexico
  { id: 'azteca', name: 'Estadio Azteca', city: 'Mexico City', country: 'Mexico', capacity: 87523 },
  { id: 'akron', name: 'Estadio Akron', city: 'Guadalajara', country: 'Mexico', capacity: 49850 },
  { id: 'bbva', name: 'Estadio BBVA', city: 'Monterrey', country: 'Mexico', capacity: 53500 },
];

export const VENUE_BY_ID: Record<string, Venue> = Object.fromEntries(
  VENUES.map((v) => [v.id, v])
);
