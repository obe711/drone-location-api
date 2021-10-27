# LocationAPI Database + REST API NodeJs Server

This repository contains a data set for every airport and landing strip with an ICAO and/or IATA code in the world and a data set with geo data for many different locations. The install will load the data to your locally running instance of Mongo DB. After creating the locationAPI database go the the “api-example” directory and run yarn install or npm install.

## REST API Server

This will install a scalable REST API Nodejs Server that provides the Mongo Airport & Location data from your new collections.

## Airport Data

A MongoDb database of 28870 entries with basic information about nearly every airport and landing strip in the world. Each entry contains IATA code, airport name, city, two letter ISO country code, elevation above sea level in feet, coordinates in decimal degrees and time zone.

```json
{
    "icao": "KOSH",
    "iata": "OSH",
    "name": "Wittman Regional Airport",
    "city": "Oshkosh",
    "state": "Wisconsin",
    "country": "US",
    "elevation": 808,
    "lat": 43.9844017029,
    "lon": -88.5569992065,
    "tz": "America\/Chicago"
},
```

Time zones sourced from [TimeZoneDB](https://timezonedb.com).

## Location Data

A MongoDb database of 33121 entries with geo information about politically defined locations.

```json
{
  "zip": "00602",
  "lat": 18.36074,
  "lng": -67.17519,
  "city": "Aguada",
  "state_id": "PR",
  "state_name": "Puerto Rico",
  "zcta": "TRUE",
  "population": 37751,
  "density": 476.0,
  "county_fips": "72003",
  "county_name": "Aguada",
  "county_weights": "{\"72003\": \"100\"}",
  "county_names_all": "Aguada",
  "county_fips_all": "72003",
  "imprecise": "FALSE",
  "military": "FALSE",
  "timezone": "America/Puerto_Rico"
}
```

## Installation

Clone repository

```bash
$ git clone git@github.com:obe711/drone-location-api.git && cd drone-location-api
```

## Setup - Builder

Set node to v16.13.0 and install dependencies

```bash
$ nvm install 16.13.0
$ nvm use
$ npm install
```

Create .env file or copy from example

```bash
$ cp .example.env .env
```

## Build Database

Build database - This will take a while. When the console says “Done” go to Compass and hit the refresh button on the locations collection to make sure the data has finished loading the 33,121 documents. Once it has finished press `Ctrl + C` to exit the builder.

```bash
$ npm run build:db
```

## Setup - API Server

```bash
$ npm run build:server
```

## Run API server

```bash
$ npm run dev
```
