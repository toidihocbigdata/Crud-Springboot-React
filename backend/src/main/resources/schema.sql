DROP TABLE IF EXISTS cities;
CREATE TABLE cities(id serial PRIMARY KEY, name VARCHAR(255), population integer);
DROP TABLE IF EXISTS patients;
CREATE TABLE patients(patient_id serial PRIMARY KEY, name VARCHAR(255),gender VARCHAR(50), age integer, email VARCHAR(50), phone_number VARCHAR(50), created_at TIMESTAMP, updated_at TIMESTAMP );