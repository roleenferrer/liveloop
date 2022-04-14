-- DROP IF TABLES EXIST (to start fresh)
DROP TABLE IF EXISTS buses CASCADE;

-- Create tables
CREATE TABLE buses(
  bus_id INT UNIQUE,
  longitude DOUBLE PRECISION,
  latitude DOUBLE PRECISION,
  active BOOLEAN,
  PRIMARY KEY (bus_id)
);
