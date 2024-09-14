# Contact Management App with Charts and Maps

[Assignment Reference](https://github.com/hsingla378/taiyo_assignment/blob/master/Frontend%20Task%20-%20Taiyo.pdf) 

[Live App](https://taiyoassignment.vercel.app/)

This project is a **Contact Management App** built using **ReactJS**, **TypeScript**, **Redux**, **React Query (TanstackQuery)**, and **TailwindCSS**. The app allows users to add, edit, view, and delete contacts. Additionally, it provides a dashboard featuring charts and maps to visualize COVID-19 data. The app is responsive and works seamlessly across different devices.

## Features

### Contacts Page
- Add new contacts using a form.
- View a list of all added contacts.
- Edit and delete existing contacts.
- View contact details.
- Data is managed using **Redux** for state management.

### Dashboard Page
- A line graph showing COVID-19 case fluctuations over time.
- An interactive map with markers showing COVID-19 data for different countries.
- **React Query** is used to fetch data from APIs.

## Tech Stack
- **ReactJS**: Frontend library for building user interfaces.
- **TypeScript**: For type-safe JavaScript.
- **Redux**: State management.
- **React Query (TanstackQuery)**: For handling API calls and caching.
- **React Router v6**: For routing and navigation.
- **TailwindCSS**: For styling the app.
- **React Leaflet**: For interactive maps.
- **Chart.js**: For rendering charts.

## API Endpoints Used
- **Global COVID-19 data**: `https://disease.sh/v3/covid-19/all`
- **Country-specific COVID-19 data**: `https://disease.sh/v3/covid-19/countries`
- **Historical COVID-19 cases**: `https://disease.sh/v3/covid-19/historical/all?lastdays=all`

## How to Use

### Contacts Page
1. **Create a New Contact**: Click the "Create Contact" button and fill in the form. You can provide a first name, last name, and set whether the contact is active or not.
2. **Edit Contact**: Click the "Edit" button next to any contact to modify their details.
3. **Delete Contact**: Click the "Delete" button to remove a contact.
4. **View Contact List**: All added contacts will be displayed in the list with options to view, edit, and delete them.

### Dashboard Page
1. **COVID-19 Line Graph**: Shows the fluctuations in cases, deaths, and recoveries over time.
2. **Interactive Map**: Shows markers for countries, and you can hover over the markers to see the active, recovered, and death statistics for each country.

## Screenshots

#### Contacts (Landing)

![image](https://github.com/user-attachments/assets/7032dd3a-066c-4b23-a5cc-442c5029436c)

---

#### Create Contact

![image](https://github.com/user-attachments/assets/eb84b9a8-88f1-436f-bee1-8f230b26f188)

![image](https://github.com/user-attachments/assets/8481a468-d5d7-4765-b8ef-69b1ee07fee8)

---

#### Contacts List

![image](https://github.com/user-attachments/assets/a57d0871-be50-447d-919f-b09de0b5617c)

---

#### Edit Contact

![image](https://github.com/user-attachments/assets/0b2e3f49-a045-4216-b739-5b068390eeee)

![image](https://github.com/user-attachments/assets/6fe59293-27e0-4716-96fb-ed9463a768d2)

---

#### Delete Contact

![image](https://github.com/user-attachments/assets/37b8426e-dfd1-40f6-a58b-3b9a31754961)

---

#### Clear Contacts

![image](https://github.com/user-attachments/assets/b5fc05fd-83b5-4bb8-9f5a-51dcc057afb5)

![image](https://github.com/user-attachments/assets/73aeb028-5b7c-4c2e-b53b-8c5e3731216e)

---

#### Covid Graph

![image](https://github.com/user-attachments/assets/f05502ff-8a66-4026-bba1-1efa345c7ac7)

---

#### Covid Map

![image](https://github.com/user-attachments/assets/31666c27-836a-47f1-b6f9-908738b1d682)

![image](https://github.com/user-attachments/assets/1ed65c56-9abb-4e4c-8722-2034cdebd625)


