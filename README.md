# Christchurch Op Shop Guide

A one page guide to charity and second-hand shops around Christchurch, built for my Mission Ready Mission 2 project (:

I kept seeing other Christchurch op shop guides that were just a screenshot of a map, so you'd still have to go search the address yourself. I wanted something you could actually search, filter and click straight through to a shop instead. I made 

## Features

- Interactive Leaflet + OpenStreetMap of Christchurch op shops
- Search by shop name or suburb
- Filter by category (clothing, furniture, books, homewares, and more)
- Filter by day of the week, with a one-click "Open today" option
- Clickable shop list synced with map markers, including Google Maps directions links
- Responsive layout for mobile and desktop, with a hamburger menu on smaller screens

## Tech

Plain HTML, CSS and Vanilla JavaScript
Map powered by [Leaflet](https://leafletjs.com/) with [OpenStreetMap](https://www.openstreetmap.org/) tiles.
Hero video footage from Toolkit, Christchurch NZ, trimmed down to the clip used here, licensed for promoting Christchurch.

## Mission 2 requirements

This project covers all 5 things Mission 2 asks for (:

1. Variables using `let` and `const`
2. Functions
3. `getElementById` / `querySelector` to change or display things on the page
4. Events, using `addEventListener`
5. Loops, plus arithmetic and comparative operators for good measure

## About the shop data

Right now all the shop data is hardcoded straight into `map.js`, since that's the simplest way to get it working with no extra steps. I've also saved the same data separately in `shops.json` and `shops.geojson`, so later on I could switch to loading it with `fetch` instead. Didn't set it up that way for Mission 2 though, `fetch` needs a proper local server to actually load a local file, and that's more setup than this project needed right now :)


