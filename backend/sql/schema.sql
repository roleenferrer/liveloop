-- DROP IF TABLES EXIST (to start fresh)
DROP TABLE IF EXISTS buses CASCADE;
DROP TABLE IF EXISTS members CASCADE;

-- Create tables
CREATE TABLE Buses(
  bus_id INT UNIQUE,
  direction CHAR(4) NOT NULL,
  longitude DOUBLE PRECISION,
  latitude DOUBLE PRECISION,
  active BOOLEAN,
  PRIMARY KEY (bus_id)
);

CREATE TABLE Members(id UUID UNIQUE PRIMARY KEY DEFAULT gen_random_uuid(), member JSONB);