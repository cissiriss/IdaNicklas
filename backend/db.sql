CREATE TABLE Parties (
    id SERIAL PRIMARY KEY
);

CREATE TABLE Guests (
    id SERIAL PRIMARY KEY,
    party_id INTEGER REFERENCES Parties(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    attending_wedding BOOLEAN DEFAULT TRUE,
    attending_dinner BOOLEAN DEFAULT TRUE,
    special_food VARCHAR(255),
    misc VARCHAR(255),
    CONSTRAINT fk_party FOREIGN KEY (party_id) REFERENCES Parties (id) ON DELETE CASCADE
);

CREATE TABLE SongSuggestions (
    id SERIAL PRIMARY KEY,       
    name VARCHAR(100) NOT NULL,  
    song_suggestion VARCHAR(255) NOT NULL 
);