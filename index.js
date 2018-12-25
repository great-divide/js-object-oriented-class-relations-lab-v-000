let store = { drivers: [], trips: [], passengers: []};

driverId = 0
class Driver {
	constructor(name) {
		this.id = ++driverId;
		this.name = name;
		store.drivers.push(this);	
	}
	trips() {
		return store.trips.filter(
			function(trip) {
				return trip.driverId === this.id;
			}.bind(this)
		);
	}
	passengers() {
		return this.trips().map((trip) => trip.passenger());
	};
}


passengerId = 0
class Passenger {
	constructor(name) {
		this.id = ++passengerId;
		this.name = name;
		store.passengers.push(this)
	}
	trips() {
		return store.trips.filter(
			function(trip) {
				return trip.passengerId === this.id;
			}.bind(this)
		); 
	};
	drivers() {
		return this.trips().map((trip) => trip.driver());
	};
}

tripId = 0
class Trip {
	constructor(driver, passenger) {
		this.id = ++tripId;	
		this.driverId = driver.id;
		this.passengerId = passenger.id;
		store.trips.push(this);
	}
	passenger() {
		return store.passengers.find(
			function(passenger) {
				return passenger.id === this.passengerId;
			}.bind(this)
			);
	}
	driver() {
		return store.drivers.find(
			function(driver) {
				return driver.id === this.driverId;
			}.bind(this)
			);
	}
}


// Driver class:
// A driver has many trips, and has many passengers through trips.
// new Driver() - initialized with a name; returns a JavaScript object that has attributes of id, and name
// trips() - returns all of the trips that a driver has taken
// passengers() - returns all of the passengers that a driver has taken on a trip