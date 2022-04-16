-- DROP IF TABLES EXIST (to start fresh)
DROP TABLE IF EXISTS buses CASCADE;

-- Create tables
CREATE TABLE Buses(
  bus_id INT UNIQUE,
  direction CHAR(4) NOT NULL,
  longitude DOUBLE PRECISION,
  latitude DOUBLE PRECISION,
  active BOOLEAN,
  PRIMARY KEY (bus_id)
);
